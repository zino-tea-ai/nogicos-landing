import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getSupabaseClient = () => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
  }
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body ?? {};

    // Validate email
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    const entrySource = typeof source === "string" ? source : "landing-page";
    const { error } = await supabase.from("waitlist").insert({
      email: normalizedEmail,
      source: entrySource,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { success: true, message: "You're already on the list!" },
          { status: 200 }
        );
      }
      console.error("Waitlist insert error:", error);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully joined the waitlist!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    if (error instanceof Error && error.message.includes("SUPABASE_")) {
      return NextResponse.json(
        { success: false, message: "Waitlist is not configured yet." },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Waitlist endpoint is online.",
  });
}






