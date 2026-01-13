# NogicOS 域名与追踪链接

## 域名配置

| 域名 | 用途 | 状态 |
|------|------|------|
| `www.nogicos.com` | 主站 | ✅ Production |
| `nogicos.com` | 重定向到 www | ✅ Active |
| `nogicos.ai` | AI 品牌入口 → 重定向到主站 | ✅ Active |
| `nogicos.org` | 备用 → 重定向到主站 | ✅ Active |
| `nogicos.net` | 备用 → 重定向到主站 | ✅ Active |
| `nogicos-landing.vercel.app` | Vercel 默认域名（备用） | ✅ Active |

---

## UTM 追踪链接

### 投资人 / 加速器

| 用途 | 链接 |
|------|------|
| **YC 申请** | `https://nogicos.com/?utm_source=accelerator&utm_medium=application` |
| 其他加速器申请 | `https://nogicos.com/?utm_source=accelerator&utm_medium=application&utm_campaign=[加速器名称]` |
| 投资人 Deck | `https://nogicos.com/?utm_source=investor&utm_medium=deck` |
| 投资人邮件 | `https://nogicos.com/?utm_source=investor&utm_medium=email` |

### 社交媒体

| 用途 | 链接 |
|------|------|
| Twitter/X 分享 | `https://nogicos.com/?utm_source=twitter&utm_medium=social` |
| LinkedIn 分享 | `https://nogicos.com/?utm_source=linkedin&utm_medium=social` |
| Product Hunt | `https://nogicos.com/?utm_source=producthunt&utm_medium=launch` |
| Hacker News | `https://nogicos.com/?utm_source=hackernews&utm_medium=social` |
| Reddit | `https://nogicos.com/?utm_source=reddit&utm_medium=social` |

### 内容营销

| 用途 | 链接 |
|------|------|
| 博客文章 | `https://nogicos.com/?utm_source=blog&utm_medium=content&utm_campaign=[文章标题]` |
| Newsletter | `https://nogicos.com/?utm_source=newsletter&utm_medium=email` |
| 播客/访谈 | `https://nogicos.com/?utm_source=podcast&utm_medium=interview&utm_campaign=[节目名称]` |

### 个人分享

| 用途 | 链接 |
|------|------|
| 邮件签名 | `https://nogicos.com/?utm_source=signature&utm_medium=email` |
| 微信/私聊 | `https://nogicos.com/?utm_source=wechat&utm_medium=direct` |
| 名片二维码 | `https://nogicos.com/?utm_source=qrcode&utm_medium=offline` |

### 测试链接

| 用途 | 链接 |
|------|------|
| 测试追踪是否正常 | `https://nogicos.com/?utm_source=test&utm_medium=check` |

---

## UTM 参数说明

| 参数 | 含义 | 示例 |
|------|------|------|
| `utm_source` | 流量来源 | twitter, linkedin, investor, accelerator |
| `utm_medium` | 媒介/渠道类型 | social, email, application, deck |
| `utm_campaign` | 具体活动/项目 | yc-w25, producthunt-launch |
| `utm_content` | 区分同一来源的不同内容 | button-top, link-footer |
| `utm_term` | 付费搜索关键词 | ai-assistant, productivity-tool |

---

## 查看追踪数据

### Google Analytics
1. 打开 [Google Analytics](https://analytics.google.com)
2. 左侧菜单：**报告 → 流量获取 → 流量获取概览**
3. 查看 **"会话来源/媒介"** 维度

### Vercel Analytics
1. 打开 [Vercel Dashboard](https://vercel.com/zinos-projects-1b72b2b2/nogicos-landing/analytics)
2. 查看 **Referrers** 标签页
3. （UTM 详情需要 Pro 版）

---

## 快速复制

```
# YC 申请
https://nogicos.com/?utm_source=accelerator&utm_medium=application

# Twitter
https://nogicos.com/?utm_source=twitter&utm_medium=social

# LinkedIn
https://nogicos.com/?utm_source=linkedin&utm_medium=social

# 投资人邮件
https://nogicos.com/?utm_source=investor&utm_medium=email

# 邮件签名
https://nogicos.com/?utm_source=signature&utm_medium=email
```

---

*最后更新: 2026-01-14*
