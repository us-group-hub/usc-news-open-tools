# USC.NEWS — Open Calculators, Author Ecosystem, Research Datasets & Syndication Specs

Public open-data benchmarks, transparent calculator formulas, author-monetization documentation, and syndication specifications published by **[USC.NEWS](https://usc.news/)** — independent AI, technology, macroeconomics, and housing analysis focused on the **United States, United Kingdom, Canada, Australia, and New Zealand**.

## Public Capabilities & Creator Ecosystem on USC.NEWS

- **Author Profile Pro & Reader Subscriptions:** Dedicated E-E-A-T author profile pages, 1-click reader subscriptions to individual writers, real-time notification bell, automated email digests, and per-author RSS feeds.
- **Visual Frontend Article Publishing ([`/my-posts/`](https://usc.news/my-posts/) & [`/dashboard/`](https://usc.news/dashboard/)):** Modern Medium-style block editor allowing verified contributors to draft, embed media/videos, manage covers, and publish directly from the frontend without backend complexity.
- **Built-In Contributor Monetization & Rewards ([`/u/`](https://usc.news/u/)):** Transparent on-site contributor balance ledger and referral program — rewarding quality published reporting (`+10` reward units per approved article, `+10` per invited contributor) with public transaction history, anti-spam enforcement, and non-custodial on-chain payouts.
- **2026 LLM API vs. Self-Hosted GPU Cost Calculator ([`/llm-api-gpu-cost-calculator/`](https://usc.news/llm-api-gpu-cost-calculator/)):** Interactive break-even model comparing frontier LLM API token pricing against dedicated H100/L40S GPU hosting.
- **Editorial Fact-Checking Standards ([`/editorial-policy/`](https://usc.news/editorial-policy/)):** Primary-source verification across Federal Reserve, Bank of England, Bank of Canada, RBA, RBNZ, SEC, and official vendor pricing datasets.
- **Standards-Compliant News & RSS Feeds:**
  - Media RSS 2.0 + WebSub: [`https://usc.news/feed/`](https://usc.news/feed/)
  - Full-HTML Newsletter/Syndication RSS: [`https://usc.news/substack-feed.xml`](https://usc.news/substack-feed.xml)
  - Google News XML Sitemap: [`https://usc.news/news-sitemap.xml`](https://usc.news/news-sitemap.xml)

## Repository Contents

```text
├── benchmarks/
│   ├── llm-api-vs-gpu-2026.json      # Open 2026 AI inference TCO benchmark dataset
│   └── five-eyes-housing-2026.json   # 2026 US/UK/CA/AU/NZ mortgage transmission dataset
├── calculators/
│   └── llm-tco-model.mjs             # Reference JS formula for API vs. GPU break-even
├── docs/
│   └── AUTHOR-ECOSYSTEM.md           # Author profiles, subscriptions, frontend editor & /u/ rewards
├── specs/
│   └── syndication-feeds.md          # Public RSS, WebSub & Google News Sitemap docs
└── LICENSE                           # MIT License
```

## Official Public Links

- Website: [https://usc.news/](https://usc.news/)
- Contributor Monetization & Balance Hub: [https://usc.news/u/](https://usc.news/u/)
- Author Dashboard (My Posts): [https://usc.news/my-posts/](https://usc.news/my-posts/)
- Live GPU vs. API Calculator: [https://usc.news/llm-api-gpu-cost-calculator/](https://usc.news/llm-api-gpu-cost-calculator/)
- About & Editorial Policy: [https://usc.news/about/](https://usc.news/about/) · [https://usc.news/editorial-policy/](https://usc.news/editorial-policy/)
- Telegram Channel: [https://t.me/uscnow](https://t.me/uscnow)
