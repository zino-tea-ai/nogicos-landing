"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { FormStatus } from "@/types";

interface WaitlistFormProps {
  variant?: "default" | "compact";
  placeholder?: string;
  buttonText?: string;
  onSuccess?: () => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({
  variant = "default",
  placeholder = "Enter your email",
  buttonText = "Join the waitlist",
  onSuccess,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.trim();
    setErrorMessage(null);

    if (!normalizedEmail) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(normalizedEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setErrorMessage(null);
        onSuccess?.();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        className="form-success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <span className="success-icon">✓</span>
        <span>You&apos;re on the list!</span>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`waitlist-form ${variant === "compact" ? "waitlist-form--compact" : ""}`}
      noValidate
    >
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="waitlist-input"
      />
      <motion.button
        type="submit"
        className="btn btn-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Joining..." : buttonText}
      </motion.button>
      {status === "error" && errorMessage && (
        <p className="form-error">{errorMessage}</p>
      )}
    </form>
  );
}






