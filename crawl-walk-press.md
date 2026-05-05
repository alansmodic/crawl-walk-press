# Crawl, Walk, Press

**30 days to master the WordPress AI stack**

*Created by Alan Smodic*

*Last verified: May 5, 2026*

---

## Table of Contents

- [Introduction](#introduction)
- **[Week 1: Get the Stack](#week-1-get-the-stack)**
  - [Day 0: Get Your Accounts Ready](#day-0-get-your-accounts-ready)
  - [Day 1: Build a Site in Playground — Zero Install](#day-1-build-a-site-in-playground--zero-install)
  - [Day 2: Install Studio CLI & Spin Up a Local Site](#day-2-install-studio-cli-and-spin-up-a-local-site)
  - [Day 3: Build a Block with Telex — No Code Required](#day-3-build-a-block-with-telex--no-code-required)
  - [Day 4: Connect Claude Desktop to WordPress via MCP](#day-4-connect-claude-desktop-to-wordpress-via-mcp)
  - [Day 5: Explore the WordPress AI Experiments Plugin](#day-5-explore-the-wordpress-ai-experiments-plugin)
  - [Day 6: Understand the Abilities API](#day-6-understand-the-abilities-api)
  - [Day 7: Week 1 Review — Your Toolkit Map](#day-7-week-1-review--your-toolkit-map)
- **[Week 2: Connect & Create](#week-2-connect-and-create)**
  - [Day 8: Teach Claude Your Publication via MCP](#day-8-teach-claude-your-publication-via-mcp)
  - [Day 9: Generate SEO Metadata via MCP](#day-9-generate-seo-metadata-via-mcp)
  - [Day 10: Draft a Newsletter from Today's Coverage](#day-10-draft-a-newsletter-from-today's-coverage)
  - [Day 11: Create a Content Package via MCP](#day-11-create-a-content-package-via-mcp)
  - [Day 12: Build Custom Editorial Blocks with Telex](#day-12-build-custom-editorial-blocks-with-telex)
  - [Day 13: AI-Powered Editorial Analysis with Claude](#day-13-ai-powered-editorial-analysis-with-claude)
  - [Day 14: Week 2 Review — The Connected Workflow](#day-14-week-2-review--the-connected-workflow)
- **[Week 3: Editorial Workflows](#week-3-editorial-workflows)**
  - [Day 15: One Article, Five Platforms via MCP](#day-15-one-article,-five-platforms-via-mcp)
  - [Day 16: Category & Tag Audit with Studio Code](#day-16-category-and-tag-audit-with-studio-code)
  - [Day 17: Performance Audit with Studio Code](#day-17-performance-audit-with-studio-code)
  - [Day 18: Build an Editorial Calendar via MCP](#day-18-build-an-editorial-calendar-via-mcp)
  - [Day 19: Build a Custom Theme with Telex](#day-19-build-a-custom-theme-with-telex)
  - [Day 20: AI-Powered Internal Linking with MCP](#day-20-ai-powered-internal-linking-with-mcp)
  - [Day 21: Week 3 Review — The 15-Minute Editorial Sprint](#day-21-week-3-review--the-15-minute-editorial-sprint)
- **[Week 4: Ship & Scale](#week-4-ship-and-scale)**
  - [Day 22: Write Your AI Editorial Policy](#day-22-write-your-ai-editorial-policy)
  - [Day 23: Build the Team Playbook](#day-23-build-the-team-playbook)
  - [Day 24: Pair with a Teammate](#day-24-pair-with-a-teammate)
  - [Day 25: Measure the Impact](#day-25-measure-the-impact)
  - [Day 26: Advanced — Custom Abilities for Your Newsroom](#day-26-advanced--custom-abilities-for-your-newsroom)
  - [Day 27: Prepare Your Demo](#day-27-prepare-your-demo)
  - [Days 28–30: Race Day — Ship It](#days-2830-race-day--ship-it)
- [FAQ](#faq)

---

# Introduction

⚡ Crawl, Walk, Press

30 days of hands-on exercises to get your editorial and product teams building with the WordPress AI stack — from the Abilities API to Telex.

4 weeks · 30 exercises · 10 min/day

## The WordPress AI Stack

Seven tools that make WordPress AI-native. You'll learn all of them in 30 days.

### 🔌 Abilities API

Built into WordPress core since 6.9. A registry of capabilities that AI agents can discover and invoke — the foundation that makes WordPress legible to AI. [Developer docs →](https://developer.wordpress.org/apis/abilities-api/)

### 🔗 WordPress MCP

Model Context Protocol connects AI agents like Claude to your WordPress site. Read posts, create drafts, manage content — all through natural language. [Setup guide →](https://developer.wordpress.com/docs/mcp/)

### 💻 Studio Code

AI-powered CLI built on Claude Code, specifically tuned for WordPress. Builds themes from descriptions, validates blocks, runs performance audits. [Learn more →](https://wordpress.com/blog/2026/04/27/studio-code-beta/)

### 🎮 Playground

Full WordPress in your browser via WebAssembly. No server, no install, no risk. Has its own MCP server for AI agent integration. Your risk-free testing lab. [Try it →](https://playground.wordpress.net)

### 📊 WordPress AI Experiments plugin

WordPress's AI-powered content toolkit. AI-powered title generation, excerpt suggestions, alt text generation, and content optimization — all inside the editor. [Learn more →](https://github.com/WordPress/ai)

### 🧪 Telex

Automattic AI Labs' natural language builder. Describe a WordPress block or theme in plain English — Telex generates it as a downloadable plugin or theme. [Try it →](https://telex.automattic.ai)

### 🤖 AI Client (WP 7.0)

Provider-agnostic AI SDK shipping in WordPress 7.0 core (May 2026). Lets any plugin call OpenAI, Claude, or Gemini through a single API. [Announcement →](https://make.wordpress.org/core/2026/03/24/introducing-the-ai-client-in-wordpress-7-0/)

## Your 30 Days of Training

Each week builds on the last. Start with installation, end with a team demo.

### Week 1: Get the Stack →

Install & explore Playground, Studio CLI/Code, Telex, Claude + MCP, and WordPress AI Experiments plugin. Finish with a toolkit map and safe testing setup.

### Week 2: Connect & Create →

Wire the tools into editorial workflows. Finish with a publication profile, reusable prompts, newsletter draft, and metadata workflow.

### Week 3: Editorial Workflows →

Build repeatable operations: content repurposing, taxonomy cleanup, performance audits, editorial planning, and internal links.

### Week 4: Ship & Scale →

Package the work for your team: policy, playbook, prompt library, impact report, and live demo.

Built for editorial and product teams learning the WordPress AI stack. Questions? Visit [WordPress.com](https://wordpress.com) or [Pressable](https://pressable.com) to get started. | FAQ →

Created by **Alan Smodic**

---

# Week 1: Get the Stack

Install and explore every tool in the WordPress AI toolkit. By Friday you'll have Playground, Studio Code, Telex, Claude Desktop with MCP, and WordPress AI Experiments plugin all running — and you'll understand what each one does and when to use it.

### Tools you'll set up this week

- **[WordPress Playground](https://playground.wordpress.net)** — browser-based WordPress sandbox, zero install- **[Studio CLI](https://developer.wordpress.com/docs/developer-tools/studio/cli/)** & **[Studio Code](https://wordpress.com/blog/2026/04/27/studio-code-beta/)** — local dev + AI-powered theme building- **[Telex](https://telex.automattic.ai)** — describe an idea in English, get a WordPress block or theme- **[WordPress MCP](https://developer.wordpress.com/docs/mcp/)** — connect Claude and other AI agents to your site- **[WordPress AI Experiments plugin](https://github.com/WordPress/ai)** — AI content features, headline optimization, engagement boost- **[Abilities API](https://developer.wordpress.org/apis/abilities-api/)** — the WordPress core framework for AI-discoverable capabilities

### This week's exercises

**Day 0** — Get Your Accounts Ready

Set up Claude, WordPress.com (or Pressable), download the AI plugin, and install Node.js

**Day 1** — Build a Site in Playground

Your first WordPress AI sandbox — zero install, zero risk

**Day 2** — Install Studio CLI

Persistent local WordPress sites with WP-CLI access

**Day 3** — Build a Block with Telex

Describe a custom block in plain English, download a working plugin

**Day 4** — Connect Claude via MCP

Bridge AI from "gives advice" to "takes action on your site"

**Day 5** — Explore WordPress AI Experiments plugin

Content intelligence, headlines, and analytics inside the editor

**Day 6** — Understand the Abilities API

The foundation that makes WordPress AI-native

**Day 7** — Week 1 Review

Your toolkit map — when to use which tool

Ready? Start with Day 0 →

---

## Day 0: Get Your Accounts Ready

Before we touch any WordPress AI tools, make sure you have access to everything you'll need this month. This is 10 minutes of setup that saves you from hitting walls later.

### What you need

### Access checklist

| Need | Required? | Notes |
|---|---|---|
| AI assistant account | Required | Claude Pro/Team is used in examples; ChatGPT Plus, Gemini Advanced, Cursor, or another MCP-capable assistant can work. |
| WordPress site | Required | Use WordPress.com, Pressable, self-hosted WordPress, Studio CLI, or Playground depending on the exercise. |
| WordPress.com account | Recommended | Needed for the easiest MCP path and for Studio preview/auth flows. |
| Node.js 18+ | Required for Studio CLI | Studio CLI and many local development workflows need Node available in Terminal. |
| Production write access | Optional | Use drafts and test sites first. You do not need production access to learn the workflows. |

#### 1. A paid AI account

Go to [claude.ai/upgrade](https://claude.ai/upgrade) and pick **Pro ($20/month)**. The free tier has daily message limits that will stop you mid-exercise — especially once you start building with MCP and Studio Code.

We write instructions for Claude because that's what we use, but **the exercises are tool-agnostic**. ChatGPT Plus, Gemini Advanced, or Cursor Pro all work. The WordPress-specific tools (MCP, Abilities API) support multiple AI providers.

**Already on a company plan?** If your organization provides Claude through Claude for Work, Team, or Enterprise, you don't need to upgrade — just make sure you're signed in with your work email. Team and Enterprise plans also have stronger data privacy guarantees, which matters when you're working with editorial content.

#### 2. WordPress dashboard access

Confirm you can log into your **WordPress AI plugin dashboard**. You'll need this for WordPress AI Experiments plugin features starting Day 5. If you don't have access, check the plugin's GitHub page — they can set you up in minutes.

#### 3. A WordPress.com account

Make sure you have an account at [wordpress.com](https://wordpress.com). Studio CLI and the WordPress MCP connector both use WordPress.com for authentication. If you already have a Gravatar or Jetpack account, that's the same login.

#### 4. Node.js (for Studio CLI)

Open Terminal (Mac) or Command Prompt (Windows) and run:

`node --version`

If you see a version number (like `v20.x.x`), you're good. If you get an error, go to [nodejs.org](https://nodejs.org) and install the LTS version. Or — and this is a preview of a skill you'll use throughout this program — open [claude.ai](https://claude.ai), take a screenshot of the error, paste it in, and say: "I need to install Node.js. What am I looking at and what should I do?"

#### 5. Bookmark these for the month

- [playground.wordpress.net](https://playground.wordpress.net) — WordPress Playground (Day 1)- [telex.automattic.ai](https://telex.automattic.ai) — Telex block/theme builder (Day 3)- [claude.ai/download](https://claude.ai/download) — Claude desktop app (Day 4)- [developer.wordpress.com/docs/mcp](https://developer.wordpress.com/docs/mcp/) — MCP setup guide (Day 4)

KEY TAKEAWAY

You're set up. Tomorrow we build our first WordPress site with AI — and you won't install a single thing to do it.

**Next:** Day 1: Build a Site in Playground →

---

## Day 1: Build a Site in Playground — Zero Install

**WordPress Playground** runs a complete WordPress site in your browser — no server, no hosting, no Docker, no install. The entire CMS runs client-side in WebAssembly. It's the fastest way to experiment with WordPress, and it's the safest place to test AI integrations because everything resets when you close the tab.

### Why Playground matters for AI

Throughout this program, you'll want to test AI-generated plugins, experiment with new blocks, and try configurations before touching your production site. Playground gives you a disposable WordPress environment in 3 seconds. Later (in Day 19), you'll connect Playground to AI agents via its own MCP server — letting Claude operate inside a safe sandbox.

### Steps

#### 1. Open Playground

Go to [playground.wordpress.net](https://playground.wordpress.net) in your browser. A full WordPress site loads in seconds — you'll see the default theme with a "Hello world!" post. This is a real WordPress installation running entirely in your browser.

#### 2. Explore the admin

Click the **wp-admin** link (or add `/wp-admin` to the URL). You're now in the WordPress dashboard. Create a new post — write a quick headline and paragraph about anything. This is your test content. Notice that everything works: the block editor, media library, plugin installer, theme customizer.

#### 3. Try installing a plugin

Go to **Plugins → Add New** and install something — Jetpack, Yoast, anything. It installs and activates instantly (no download wait since everything is local). This is what makes Playground perfect for testing: install, break, reset, repeat.

#### 4. Understand the reset

Close the browser tab. Open [playground.wordpress.net](https://playground.wordpress.net) again. Everything is gone — fresh install. **This is a feature, not a bug.** You can't accidentally damage anything. When you need persistence, that's what Studio CLI is for (tomorrow).

#### 5. Ask Claude about it

Open [claude.ai](https://claude.ai) in another tab and paste this:

I just set up a WordPress Playground site at playground.wordpress.net. I'm an editor at a news publication exploring how AI tools connect to WordPress.

Explain: What is WordPress Playground technically (WebAssembly, client-side)? Why is it useful for testing AI integrations safely? And what should I try first as someone who'll be connecting AI agents to WordPress over the next month?

Read the response. You're building a mental model for how the WordPress AI stack fits together — and Claude is a good teacher when you give it context about who you are and what you're trying to accomplish.

TOOL: WORDPRESS PLAYGROUND

Runs entirely in WebAssembly — no server, no PHP installation, no database server. Has its own [MCP server](https://make.wordpress.org/playground/2026/03/17/connect-ai-coding-agents-to-wordpress-playground-with-mcp/) for AI agent integration. Everything resets on tab close. Think of it as your consequence-free AI testing lab. [Full docs →](https://wordpress.github.io/wordpress-playground/)

KEY TAKEAWAY

Playground gives you a full WordPress site to experiment with AI tools — consequence-free. You'll use it throughout this program to test before touching production. Remember: Playground for experiments, Studio for building.

← Day 0 · **Next:** Day 2: Install Studio CLI →

---

## Day 2: Install Studio CLI & Spin Up a Local Site

📅 Day 2 of 30 · Week 1: Get the Stack · ⏱ 15 minutes

## Why Studio CLI?

Yesterday you built a site in the browser with Playground. That's great for experiments, but real editorial workflows need a persistent local environment — one that keeps your content between sessions, runs the exact PHP version your production site uses, and gives you full WP-CLI access. That's **Studio CLI**.

Studio CLI runs WordPress locally using the same Playground engine you used yesterday, but with persistence, version control, and a proper CLI interface. No Docker, no MAMP, no Apache config files. One command and you have a running WordPress site.

🔧 **Tool: Studio CLI** — Automattic's command-line tool for local WordPress development. Built on WordPress Playground. Install it from Studio Desktop settings or via `npm install -g wp-studio`. Docs: [developer.wordpress.com/docs/developer-tools/studio/cli](https://developer.wordpress.com/docs/developer-tools/studio/cli/)

## Step 1: Install Studio CLI

Recommended path: install the [Studio desktop app](https://developer.wordpress.com/studio/), then enable **Studio CLI for terminal** from Studio settings. If you prefer npm, you can install the CLI globally instead:

```bash
# Recommended: Studio Desktop → Settings → Studio CLI for terminal

# Alternate npm install:
npm install -g wp-studio
```

Verify the installation:

`studio --version`

## Step 2: Create Your First Site

Create a WordPress site in one command. We'll use `~/Studio/` as the base directory — this keeps all your local sites organized:

`studio site create --name "my-newsroom" --path ~/Studio/my-newsroom --wp 6.9 --php 8.3 --skip-browser`

Let's break down the flags:

- `--name` — A human-readable name for your site (shows in `studio site list`)

- `--path` — Where to create the site on your filesystem

- `--wp 6.9` — WordPress version (match your production version for testing)

- `--php 8.3` — PHP version (available: 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5)

- `--skip-browser` — Don't auto-open a browser window

## Step 3: Check Your Site Status

`studio site status --path ~/Studio/my-newsroom --format json`

This returns JSON with your site URL (typically `http://localhost:XXXX`), admin credentials, PHP/WP versions, and status. Open the URL in your browser to see your new WordPress site.

## Step 4: Run WP-CLI Commands

Studio CLI includes WP-CLI — no separate installation needed. Every WP-CLI command works through `studio wp`:

# Check installed plugins
studio wp --path ~/Studio/my-newsroom plugin list

# Check active theme
studio wp --path ~/Studio/my-newsroom theme list

# Get the site title
studio wp --path ~/Studio/my-newsroom option get blogname

# Create a test post
studio wp --path ~/Studio/my-newsroom post create --post_title="My First AI-Assisted Post" --post_status=draft

## Step 5: Manage the Site Lifecycle

Key commands you'll use throughout this program:

# List all your local sites
studio site list

# Stop a site when you're done working
studio site stop --path ~/Studio/my-newsroom

# Start it back up later
studio site start --path ~/Studio/my-newsroom

# Delete a site and clean up
studio site delete --path ~/Studio/my-newsroom

💡 **Tip:** Studio CLI vs Studio Desktop — Studio CLI is the command-line interface; Studio Desktop is the GUI app. They share the same engine and can see each other's sites. Use whichever you prefer, but CLI is essential for automation and scripting.

## Playground vs Studio CLI — When to Use Which

You now have two ways to run WordPress locally:

- **Playground** (Day 1) — Best for quick throwaway experiments, browser-based demos, sharing via URL. No install required.

- **Studio CLI** (today) — Best for persistent local development, WP-CLI access, version-specific testing, file system access, and scripting.

For the rest of this program, we'll primarily use Studio CLI for hands-on exercises because it gives you a real WordPress environment with full filesystem and WP-CLI access.

✅ **Key Takeaway:** Studio CLI gives you a full WordPress environment in one command — with WP-CLI, version pinning, and file system access. This is your primary development environment for the rest of the program.

← Day 1: WordPress Playground · Day 3: Build a Block with Telex →

---

## Day 3: Build a Block with Telex — No Code Required

**[Telex](https://telex.automattic.ai)** is Automattic AI Labs' natural language WordPress builder. You describe what you want in plain English — a custom block, a full theme, a interactive component — and Telex generates it as a fully functional WordPress plugin or theme that you can download and install on any site.

### Why Telex matters for editorial teams

Every editorial team has moments where they need a custom block: a special election results layout, a podcast episode card, a reporter's notebook format, a "story package" component that groups related coverage. Traditionally, these require a developer, a ticket, and a sprint. With Telex, an editor can describe what they need and have a working WordPress block in minutes — no code, no dev queue, no waiting.

Telex generates standard WordPress plugins that work on any WordPress site, including managed hosting. You describe, it builds, you download a .zip, you install it. It even has a **Project Showcase** where community members share their creations — from recipe cards to interactive quizzes to minesweeper games.

### Steps

#### 1. Open Telex

Go to [telex.automattic.ai](https://telex.automattic.ai) and log in with your WordPress.com account (the one you set up on Day 0). You'll see a large prompt box that says "I want" — this is where you describe your block or theme.

#### 2. Describe a block your team would actually use

Don't build something generic. Think about a layout or component your editorial team currently hacks together with existing blocks or wishes they had. Here's an example prompt for a news publication:

A "Story Package" block for news editors. It should display:
- A main feature article at the top with a large hero image, headline, byline, and excerpt
- Below that, 3 related stories in a responsive grid with thumbnails, headlines, and short descriptions
- A dark header bar across the top that says "Coverage Package" in small caps
- Each story slot should have fields in the editor for: headline, excerpt, image, and URL
- Clean, editorial design with generous whitespace
- When a reader clicks any story, it goes to the URL specified in the editor

The design should feel like a premium news publication — think NYT or BBC coverage packages.

Copy that prompt (or write your own) and paste it into the Telex prompt box. Click **BUILD**.

#### 3. Watch it build

Telex will generate the code in real time. You'll see it create JavaScript, PHP, and CSS files — the standard structure of a WordPress block plugin. The preview updates live so you can see the block taking shape. This usually takes 30-60 seconds.

#### 4. Iterate with follow-up prompts

The first version is rarely perfect — that's fine. This is the power of AI-assisted building: you iterate in plain English. Try prompts like:

- "Make the hero image taller and add a gradient overlay so the headline is readable over the image"- "Add a category label above each related story headline in a small colored badge"- "Make the grid 2 columns on mobile instead of stacking to a single column"- "Add a timestamp field that displays as 'Updated 2 hours ago'"

Each follow-up refines the existing block — you're not starting over.

#### 5. Download and install

When you're happy with the result, click **Download** at the top. You'll get a .zip file — this is a standard WordPress plugin.

If you set up Studio CLI on Day 2, install it on your local site: open your local site's wp-admin → **Plugins → Add New Plugin → Upload Plugin** → choose the .zip file → **Install Now → Activate**.

Now create a new post and type **/** to open the block inserter. Search for your block name (e.g., "Story Package"). Insert it and start filling in the fields.

#### 6. Browse the Project Showcase

Back on the [Telex homepage](https://telex.automattic.ai), scroll down to the **Project Showcase**. These are blocks and themes other people have built. You can remix any of them — click one, fork it, and modify it for your needs. Great for inspiration when you're not sure what to build.

### How Telex compares to other tools

You now have three different ways to build things with AI for WordPress:

- **Telex** — best for custom blocks and themes from scratch. Web-based, generates downloadable plugins. No local setup needed.- **Studio Code** — best for full site building, theme iteration, and performance audits after Studio CLI is installed. Runs locally as an AI-powered CLI.- **Claude + MCP** (coming Day 4) — best for content operations: creating posts, managing metadata, reading your site. Works with your live site.

They complement each other. Telex builds the tools (blocks, themes). MCP operates the content. Studio Code handles the infrastructure.

TOOL: TELEX

By Automattic AI Labs. Describe a WordPress block or theme in natural language → get a working plugin/theme .zip. Runs on [WordPress Playground](https://playground.wordpress.net) under the hood. Supports follow-up prompts for iteration. Community Project Showcase for inspiration. Free, experimental. [telex.automattic.ai →](https://telex.automattic.ai)

KEY TAKEAWAY

Telex lets anyone on your team create custom WordPress blocks by describing what they need. No code, no dev ticket, no waiting. The editorial team can build their own tools — and that's a fundamental shift in how newsrooms operate.

← Day 2 · **Next:** Day 4: Connect Claude via MCP →

---

## Day 4: Connect Claude Desktop to WordPress via MCP

The **Model Context Protocol (MCP)** is an open standard that lets AI assistants connect to external tools and take real actions. **WordPress MCP** lets Claude — or ChatGPT, Cursor, Gemini — read your posts, create drafts, manage categories, and operate your site through natural language. This is the bridge from "AI that gives advice" to "AI that does things for you."

### Why MCP changes everything

Until now in this program, you've been copying and pasting between AI chat windows and WordPress. MCP eliminates that friction. When Claude is connected to your site via MCP, you can say "read my last 10 posts and draft a newsletter" and it reads the actual posts from your database, understands your content, and generates output that includes your real URLs and article details. No copy-pasting, no context loss.

MCP works through the Abilities API you'll learn about on Day 6 — your site's registered capabilities become tools that AI agents can discover and invoke.

### Setup: Choose your path

#### Path A: WordPress.com sites (easiest)

- Install the **Claude desktop app** from [claude.ai/download](https://claude.ai/download).- Open Claude Desktop → click your profile icon → **Settings**.- Click the **Connectors** tab → **Browse connectors**.- Search for **"WordPress.com"** and select the official connector.- Click **Connect** and authorize via OAuth. Done — Claude can now read and write to your WordPress.com site.

#### Path B: Self-hosted / WordPress sites

- Install the **[mcp-adapter plugin](https://github.com/WordPress/mcp-adapter)** on your WordPress site (download from GitHub, upload as plugin).- Set up **[@automattic/mcp-wordpress-remote](https://github.com/Automattic/mcp-wordpress-remote)** as a local proxy — this bridges your local AI client to the remote WordPress site.- Configure authentication using Application Passwords (Settings → Users → your profile → Application Passwords in WordPress admin) or JWT tokens.- Follow the [detailed setup guide](https://developer.wordpress.com/docs/mcp/) for your specific configuration.

**Stuck on setup?** Take a screenshot of whatever you're seeing and paste it into a Claude browser chat with: "I'm trying to set up WordPress MCP to connect Claude Desktop to my WordPress site. Here's what I see — what should I do?" The screenshot-and-ask technique from Day 1 works perfectly here.

💡 **Operating rules:** Connect MCP to a test site first, create drafts before publishing, review every AI-generated change, and avoid bulk updates on production until you have a backup or rollback plan. The power move is safe iteration, not surprise automation.

### Test the connection

Once connected, try these prompts in Claude Desktop to verify everything works:

#### Test 1: Read your site

`List all published posts on my WordPress site. Show me the title, date, and category for each one.`

If Claude returns your actual posts, MCP is working. It just read your WordPress database through the Abilities API.

#### Test 2: Create a draft

`Create a new draft post titled "Testing AI Integration" with a short paragraph about how our editorial team is exploring AI tools for WordPress. Set the category to "Technology". Don't publish it — just save as draft.`

Go to your WordPress admin → **Posts**. You should see the draft. Claude just created a real post in your CMS. Open it — the content is there, the category is set, it's saved as a draft exactly as requested.

#### Test 3: Ask a question about your content

`What topics do we write about most on this site? Look at the last 20 published posts and give me a breakdown by category and theme.`

This is where MCP becomes powerful for editorial teams — Claude can analyze your actual content, not hypothetical content. The insights come from your real publishing data.

TOOL: WORDPRESS MCP

MCP connects AI agents to WordPress through the Abilities API. Supports Claude Desktop, ChatGPT, Cursor, VS Code, and Gemini. WordPress.com has built-in OAuth; self-hosted uses the mcp-adapter plugin + local proxy. Key repos: [mcp-adapter](https://github.com/WordPress/mcp-adapter) | [mcp-wordpress-remote](https://github.com/Automattic/mcp-wordpress-remote) | [Setup guide](https://developer.wordpress.com/docs/mcp/)

KEY TAKEAWAY

MCP is the bridge from "AI that gives advice" to "AI that takes action on your site." Once connected, Claude can read and write to WordPress directly — no copy-pasting, no context loss. This is the foundation for everything in Weeks 2-4.

← Day 3 · **Next:** Day 5: Explore WordPress AI Experiments plugin →

---

## Day 5: Explore the WordPress AI Experiments Plugin

📅 Day 5 of 30 · Week 1: Get the Stack · ⏱ 15 minutes

## What Is the WordPress AI Experiments Plugin?

The **WordPress AI plugin** is an official experimental plugin from the WordPress project that brings AI-powered content features directly into the block editor. It's free, open-source, and works with multiple AI providers — OpenAI, Google, and Anthropic.

🔧 **Tool: WordPress AI Experiments Plugin** — AI features embedded in the WordPress editor. Includes title generation, excerpt suggestions, alt text generation, content optimization, and an AI assistant. Install from [github.com/WordPress/ai](https://github.com/WordPress/ai)

## Installing the Plugin

The AI Experiments plugin isn't in the WordPress plugin directory yet — it's distributed via GitHub. Here's how to install it:

- Go to [github.com/WordPress/ai/releases](https://github.com/WordPress/ai/releases) and download the latest `.zip` file

- In your WordPress admin, go to **Plugins → Add New → Upload Plugin**

- Upload the .zip and activate it

- Go to **Settings → AI** and configure your preferred AI provider (OpenAI, Google, or Anthropic) with an API key

**For Playground users:** You can install it directly in your Playground sandbox to experiment risk-free before adding it to a production site.

## The Core AI Features

### 1. Title Generation

Write or paste your article content, then use the **AI Title Suggestions** panel in the editor sidebar. The plugin generates 3-5 alternative headlines optimized for clarity and engagement. Compare them to your original — you'll quickly develop a sense for which headline structures work best.

**Why it matters for editorial teams:** Headlines are the single biggest lever for article performance. AI-generated alternatives help break you out of your default patterns and test new approaches.

### 2. Excerpt & Meta Description Generation

Auto-generates article summaries that work as meta descriptions, social share text, or newsletter blurbs. In the post sidebar, find the **Excerpt** panel and use the AI generation option. It creates a concise summary that captures the article's key points.

### 3. Image Alt Text Generation

One of the most practical AI features for publishers. The plugin can automatically generate descriptive alt text for images — a critical accessibility and SEO requirement that editorial teams often skip under deadline pressure.

### 4. Content Optimization & Review

Get AI-powered suggestions for improving readability, grammar, and accessibility. The plugin reviews your content and flags areas for improvement — all with a "human approves first" philosophy that keeps editors in control.

## Today's Exercise

- **Install the plugin** — Download from GitHub and activate it on your site (or use Playground for a safe sandbox)

- **Configure an AI provider** — Set up OpenAI, Google, or Anthropic in Settings → AI

- **Open an existing draft** and try Title Suggestions — Generate alternatives and compare them to your original

- **Generate an Excerpt** — Compare it to what you'd write manually. Is it better? A good starting point?

- **Upload an image** and test the alt text generation — How does it compare to hand-written alt text?

💡 **Tip:** The AI Experiments plugin + MCP is a powerful combination. In Week 2, you'll learn to use Claude with MCP to query your content programmatically — asking questions like "which posts are missing alt text?" and getting bulk AI-assisted fixes.

✅ **Key Takeaway:** The WordPress AI Experiments plugin puts AI content features directly in the editor with a "human approves first" philosophy. It works with your choice of AI provider and doesn't require any paid platform subscription — just your own API key.

← Day 4: WordPress MCP · Day 6: The Abilities API →

---

## Day 6: Understand the Abilities API

📅 Day 6 of 30 · Week 1: Get the Stack · ⏱ 12 minutes

## What Is the Abilities API?

The **Abilities API** is a framework built into WordPress core (since version 6.9) that makes WordPress AI-discoverable. Think of it as a registry where plugins and themes declare what they can do — and AI agents can read that registry to understand what actions are available.

Without the Abilities API, an AI agent connecting to WordPress would need to know every REST API endpoint, every plugin's custom routes, every theme's capabilities. With Abilities, each plugin simply declares: "I can do X, Y, Z — here's how to invoke me."

🔧 **Tool: Abilities API** — WordPress core feature (6.9+). Register capabilities via `wp_register_ability()`. AI agents discover them through the `/wp-json/wp/v2/abilities` endpoint. [Developer docs →](https://developer.wordpress.org/apis/abilities-api/)

## How It Works

The Abilities API has three parts:

- **Registration** — A plugin or theme calls `wp_register_ability()` to declare what it can do

- **Discovery** — AI agents query the REST endpoint `/wp-json/wp/v2/abilities` to see all registered abilities

- **Invocation** — The agent calls the ability's callback, which executes the action

Here's what a simple ability registration looks like in PHP:

wp_register_ability( 'generate_newsletter', array(
'label' => 'Generate Newsletter',
'description' => 'Creates a newsletter draft from recent published posts.',
'category' => 'content',
'callback' => 'my_generate_newsletter_handler',
'parameters' => array(
'date_range' => array(
'type' => 'string',
'description' => 'Time period to pull posts from (e.g., "last 7 days")',
'required' => false,
'default' => 'last 7 days',
),
'max_posts' => array(
'type' => 'integer',
'description' => 'Maximum number of posts to include',
'default' => 5,
),
),
) );

## Why This Matters for Editorial Teams

As a non-developer, you don't need to write PHP. But understanding Abilities helps you:

- **Know what's possible** — When you connect Claude to your site via MCP, the abilities it discovers determine what it can do. More abilities = more powerful AI workflows.

- **Request the right plugins** — Tell your engineering team: "We need an ability for X" instead of "Can you build an API for X?" They'll know exactly what to build.

- **Evaluate plugins** — Plugins that register abilities are AI-ready. Those that don't are invisible to AI agents. This becomes a key evaluation criterion.

## Try It: View Abilities on Your Site

On any WordPress 6.9+ site, you can see registered abilities by visiting:

# In your browser
https://your-site.com/wp-json/wp/v2/abilities

# Or via WP-CLI in Studio
studio wp --path ~/Studio/my-newsroom eval 'print_r(wp_get_registered_abilities());'

On a fresh WordPress install, you'll see core abilities like content management and site settings. As you add plugins that support the Abilities API, the list grows — and so does what AI agents can do with your site.

## The Big Picture: Abilities + MCP

Here's how the pieces fit together:

- **Abilities API** = the menu (what's available)

- **MCP** = the waiter (connects AI to the menu)

- **Claude/Studio Code** = the customer (reads the menu, places orders)

An AI agent connects via MCP, discovers abilities, and uses them. The more abilities your site registers, the more your AI agents can do. In Week 4, you'll learn how to create custom abilities for your specific newsroom workflows.

✅ **Key Takeaway:** The Abilities API makes WordPress AI-discoverable. It's the foundation layer — without it, AI agents are flying blind. With it, they know exactly what your site can do and how to do it.

← Day 5: WordPress AI Experiments plugin · Day 7: Week 1 Review →

---

## Day 7: Week 1 Review — Your Toolkit Map

📅 Day 7 of 30 · Week 1: Get the Stack · ⏱ 10 minutes

## Week 1 Checkpoint

You've spent the first week getting your hands on every tool in the WordPress AI stack. Before we start connecting them together in Week 2, let's review what you've set up and make sure nothing's missing.

## Your Toolkit Map

Here's what you should have access to after Week 1:

### ✅ Accounts & Access

- WordPress.com account (Day 0)

- Claude.ai account — Pro or Team (Day 0)

- GitHub account (Day 0)

### ✅ Tools Installed

- Studio CLI (`wp-studio`) (Day 2)

- Claude Desktop with MCP (Day 4)

### ✅ Tools Explored

- WordPress Playground (Day 1)

- Telex (Day 3)

- WordPress AI Experiments plugin features (Day 5)

- Abilities API concepts (Day 6)

### ✅ Skills Gained

- Spin up WordPress in a browser (Playground)

- Create local WordPress sites (Studio CLI)

- Generate blocks and themes from descriptions (Telex)

- Connect Claude to WordPress (MCP)

## Save These Artifacts

- Your toolkit map: accounts, tools, and where each one fits
- A working local Studio site or Playground sandbox
- One Telex-built block idea your team could actually use
- A safe MCP test draft, not a production publish

## How the Tools Connect

Here's the mental model for how these tools work together:

┌──────────────────────────────────────────┐
│ AI Agents │
│ (Claude Desktop, Studio Code, AI tools) │
└───────────┬──────────────────────────────┘
│ MCP Protocol
▼
┌──────────────────────────────────────────┐
│ WordPress Site │
│ ┌─────────────────────────────────┐ │
│ │ Abilities API (Core) │ │
│ │ - Content management │ │
│ │ - Custom abilities (plugins) │ │
│ └─────────────────────────────────┘ │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│ │ WordPress AI plugin │ │ Telex │ │ Plugins │ │
│ │ AI │ │ blocks │ │ & themes│ │
│ └──────────┘ └──────────┘ └──────────┘ │
└──────────────────────────────────────────┘
│
▼
┌──────────────────────────────────────────┐
│ Local Development │
│ Studio CLI · Playground │
└──────────────────────────────────────────┘

## Troubleshooting Checklist

If anything from this week didn't work, now is the time to fix it:

- **Studio CLI won't install?** Check that Node.js 18+ is installed: `node --version`

- **MCP connection failing?** Verify the mcp-adapter plugin is active and your Claude Desktop config points to the correct site URL

- **Telex not generating?** Try a simpler prompt first — "Create a simple callout block with a title and text" — to verify the tool works before attempting complex designs

- **WordPress AI plugin features not showing?** WordPress AI Experiments plugin requires a WordPress site with WordPress AI plugin enabled. Visit [WordPress.com](https://wordpress.com) or [Pressable](https://pressable.com) for hosting options.

## What's Coming in Week 2

In Week 2, you'll stop exploring tools individually and start **connecting them into workflows**:

- **Day 8:** Teach Claude about your specific publication using MCP

- **Day 9:** Auto-generate SEO metadata for your content

- **Day 10:** Draft a newsletter from your latest coverage

- **Day 11:** Create multi-piece content packages

- **Day 12:** Build editorial-specific blocks with Telex

- **Day 13:** Combine analytics + AI for data-driven editorial decisions

✅ **Key Takeaway:** Week 1 was about breadth — touching every tool once. Week 2 is about depth — combining tools into real workflows that save your team time every day.

← Day 6: Abilities API · Day 8: Teach Claude Your Publication →

---

# Week 2: Connect & Create

Tools are installed. Now make them useful. This week you wire the WordPress AI stack into your actual editorial work — your site, your content, your voice. By the end of this week, Claude reads your publication directly via MCP, WordPress AI plugin optimizes your headlines in the editor, and Telex builds custom blocks on demand.

### Tools this week

- **[WordPress MCP](https://developer.wordpress.com/docs/mcp/)** — read your site, create drafts, generate metadata- **Claude Desktop** — your AI editorial assistant, now connected to your CMS- **[WordPress AI Experiments plugin](https://github.com/WordPress/ai)** — titles, excerpts, alt text, content optimization- **[Telex](https://telex.automattic.ai)** — build custom editorial blocks from descriptions- **Studio Code** — landing pages and theme iteration

### This week's exercises

**Day 8** — Teach Claude Your Publication via MCPLet Claude learn your voice from your actual published content

**Day 9** — Generate SEO Metadata via MCPClaude + WordPress AI plugin for editorial analysis

**Day 10** — Draft a Newsletter from Today's CoverageClaude reads your site, you get a draft — no copy-pasting

**Day 11** — Create a Content Package via MCPOne feature article becomes three draft posts in WordPress

**Day 12** — Build Custom Editorial Blocks with TelexBreaking news banners, reporter's notebooks, and more

**Day 13** — Analytics-Driven Editorial with WordPress AI plugin + ClaudeTurn performance data into editorial strategy

**Day 14** — Week 2 Review — The Connected WorkflowTime yourself: data to publish-ready in under 20 minutes

← Previous week · Next week →

---

## Day 8: Teach Claude Your Publication via MCP

With MCP connected (Day 4), Claude can read your actual site. Today, instead of writing a style guide for AI, you'll let Claude learn your publication from the source — your published content.

### Why this matters

Most AI writing tools ask you to describe your brand voice in a text box. The problem is that **people are bad at describing their own voice**. You might say "professional but approachable" — which means nothing actionable to an AI. What works better: show it 20 articles and let it figure out the patterns. That's what MCP enables.

### Steps

#### 1. Ask Claude to analyze your content

In Claude Desktop (with MCP connected to your site), paste this prompt:

Read the last 20 published posts on our WordPress site. Based on what you find, give me a detailed analysis:

1. **Topics and beats** — What do we cover most? What's our editorial focus?
2. **Voice and tone** — Are we formal, conversational, authoritative, casual? How do we address the reader? Do we use first person?
3. **Sentence structure** — Short and punchy? Long and analytical? Mixed?
4. **Content formats** — What types do we publish? (breaking news, features, analysis, opinion, explainers, listicles)
5. **Average length** — How long are our typical pieces?
6. **Headline patterns** — What structures do our headlines follow? Questions? Statements? How-tos? Numbers?
7. **Lede style** — How do we open articles? Hard news ledes? Narrative? Scene-setting?

Be specific — cite actual articles as examples for each point. This will become the foundation for our AI editorial brief.

#### 2. Review and correct

Read Claude's analysis carefully. Some things will be spot-on — it might notice patterns you've never articulated. Other things might be slightly off. **Correct anything that doesn't match your editorial intent.** The corrections are the most valuable part — they're the gap between what you actually do and what you want to do.

#### 3. Save the brief

Ask Claude to save a refined version:

`Based on your analysis and my corrections, write a concise editorial voice guide — the kind of document I could hand to a new writer or freelancer to get them up to speed on how we write. Save it as a file called editorial-voice.md in the current directory.`

You now have an AI-generated editorial brief based on your actual content — not a theoretical style guide written in a vacuum.

KEY TAKEAWAY

MCP lets Claude learn your publication from your actual content, not from a document you write *about* your content. The source of truth is the site itself. This is fundamentally different from describing your brand in a text box.

← Week 2 · **Next:** Day 9: Generate SEO Metadata via MCP →

---

## Day 9: Generate SEO Metadata via MCP

📅 Day 9 of 30 · Week 2: Connect & Create · ⏱ 15 minutes

## Why AI + SEO Metadata?

Every article needs a meta description, an excerpt, Open Graph tags, and alt text for images. Most newsrooms skip these because they're tedious — and that costs organic traffic. With Claude connected via MCP, you can generate all of this in seconds, directly in your WordPress site.

## Step 1: Identify Content Missing Metadata

Ask Claude to audit your site for missing SEO fields:

Look at my last 20 published posts. Which ones are missing:
- An excerpt / meta description
- Alt text on their featured image
- A Yoast/SEO meta description (if the plugin is active)

List them in a table with the post title and what's missing.

Claude reads your posts via MCP, checks each field, and returns a clear gap analysis.

## Step 2: Generate Metadata in Bulk

Once you know what's missing, ask Claude to fill the gaps:

For each post missing an excerpt, generate one that:
- Is under 160 characters (for search snippet display)
- Includes the primary keyword naturally
- Creates urgency or curiosity without being clickbait
- Matches our publication's voice (serious but accessible)

Show me all the suggested excerpts before updating anything.

Review Claude's suggestions, edit as needed, then tell it to apply them:

`These look good. Please update the excerpts on all 12 posts.`

## Step 3: Generate Alt Text for Images

Alt text matters for accessibility and image search. Ask Claude:

Check my 10 most recent posts for images without alt text.
For each one, write descriptive alt text that:
- Describes what the image shows (not just "photo of...")
- Is under 125 characters
- Includes relevant context from the article

💡 **Tip:** Always review AI-generated metadata before publishing. Claude gives excellent first drafts, but your editorial judgment matters — especially for headlines and descriptions that represent your brand in search results.

## Step 4: Build a Recurring Workflow

Turn this into a weekly habit. Every Monday, ask Claude:

Run our weekly SEO check:
1. List posts from the last 7 days missing excerpts or meta descriptions
2. Generate suggestions for each
3. Flag any posts with images missing alt text
4. Show me everything for review before applying changes

This 5-minute Monday check can dramatically improve your site's search presence over time.

✅ **Key Takeaway:** SEO metadata is tedious for humans but trivial for AI. A weekly MCP-powered audit catches gaps that silently cost you organic traffic — and Claude can fix them in bulk.

← Day 8: Teach Claude Your Publication · Day 10: Draft a Newsletter →

---

## Day 10: Draft a Newsletter from Today's Coverage

📅 Day 10 of 30 · Week 2: Connect & Create · ⏱ 15 minutes

## The Newsletter Problem

Most publishers send daily or weekly newsletters by manually curating links and writing summaries. It's 30-60 minutes of work — often the last thing on a busy editor's plate, which means it's the first thing to get cut or rushed. With MCP, Claude can draft a newsletter from your published content in under 2 minutes.

## Step 1: Tell Claude What to Pull

Look at all posts published on our site today.
For each one, give me:
- The headline
- A 2-sentence summary
- The URL
- The category

Sort them by category, then by publication time.

Claude reads your WordPress site via MCP and returns a structured list of today's content.

## Step 2: Generate the Newsletter Draft

Now draft an email newsletter from this content. Use this format:

Subject line: [Publication Name] Daily Briefing — [Date]

Opening: A 2-3 sentence editorial intro that connects today's top stories
thematically (don't just list them).

Sections: Group stories by topic. Each story gets:
- A bold headline (linked to the full article)
- A 2-sentence summary that hooks the reader to click through
- Keep the tone conversational but informed

Closing: "That's your briefing for today. Reply to this email if a story
caught your eye — we read every response."

Total length: Under 400 words.

## Step 3: Refine the Draft

The first draft will be solid but generic. Refine it with follow-up prompts:

The opening feels too formal. Make it sound more like how our editor-in-chief
talks in the morning standup — casual authority, maybe a wry observation
about the news cycle.

Also, the climate story should lead — it got the most engagement on social today.

## Step 4: Save as a Draft Post

Once you're happy with the newsletter, tell Claude to save it:

Create this as a draft post on our site with:
- Post type: post (or "newsletter" if we have a custom post type)
- Category: Newsletter
- Title: the subject line
- Status: draft

This saves the newsletter as a WordPress draft that your team can review, edit, and send through your email platform (Mailchimp, Beehiiv, ConvertKit, etc.).

💡 **Tip:** The power here isn't replacing your newsletter editor — it's giving them a 90% draft to start from instead of a blank page. The editorial voice and judgment still come from your team.

✅ **Key Takeaway:** Newsletter drafting via MCP turns 45 minutes of curation into a 5-minute review. The AI reads your entire site's output and produces a structured, on-brand first draft. Your editor polishes and sends.

← Day 9: SEO Metadata · Day 11: Content Packages →

---

## Day 11: Create a Content Package via MCP

📅 Day 11 of 30 · Week 2: Connect & Create · ⏱ 20 minutes

## What's a Content Package?

A **content package** is a coordinated set of content pieces around a single topic: the main feature article, a sidebar with key facts, a timeline, a data visualization, social media posts, and a newsletter segment — all published together. In traditional workflows, this takes a team days to produce. With MCP + Claude, you can scaffold the entire package in one session.

## The Prompt: One Topic, Five Pieces

Pick a topic your publication is covering (or use a hypothetical). Then prompt Claude:

We're building a content package around [TOPIC]. Create the following as
draft posts on our WordPress site:

1. **Feature article** (800-1000 words)
- Headline, subheads, and full body text
- Category: [your main category]

2. **Key facts sidebar** (200 words)
- 5-7 bullet points with the most important facts/stats
- Format as a standalone post we can embed

3. **Timeline** (300 words)
- Chronological breakdown of key events
- Each entry: date, event title, 1-sentence description

4. **Social media posts** (save as a draft post for the social team)
- 3 tweets (under 280 chars each)
- 1 LinkedIn post (under 700 chars)
- 1 Instagram caption (under 200 chars with hashtags)

5. **Newsletter segment** (150 words)
- A teaser for our daily newsletter linking to the feature

Create all 5 as draft posts. Tag them all with "content-package-[topic]"
so we can find them together.

## Why This Works

Because Claude is connected via MCP, it:

- **Reads your existing content** to match your publication's voice and avoid repeating what you've already published

- **Creates actual WordPress drafts** — not text in a chat window, but real posts in your CMS ready for editing

- **Tags and categorizes consistently** so the package stays organized

- **Cross-references between pieces** — the newsletter segment links to the feature, the social posts highlight different angles

## Refine and Customize

After the initial generation, iterate:

The feature article is good but needs more quotes and data points.
Can you also:
- Add an expert perspective section (attribute to "[Expert Name], [Title]")
- Make the opening paragraph more urgent — this is breaking news
- Update the social posts to lead with the most surprising stat from the timeline

✅ **Key Takeaway:** Content packages showcase MCP's real power — not just writing text, but creating structured, multi-piece content directly in WordPress. The AI scaffolds; your team refines and publishes.

← Day 10: Newsletter Drafting · Day 12: Editorial Blocks with Telex →

---

## Day 12: Build Custom Editorial Blocks with Telex

On Day 3, you built your first block with [Telex](https://telex.automattic.ai). Today, you'll build blocks that solve real editorial problems — the kind of custom components your team wishes they had but never had the dev capacity to build.

### Editorial blocks worth building

Think about the recurring editorial formats your publication uses. Here are prompts for three high-value blocks — pick at least one and build it in [Telex](https://telex.automattic.ai):

#### Option A: Breaking News Banner

A "Breaking News" banner block for editors. Features:
- A bold red banner that stretches full width at the top of any post or page
- An urgency level selector in the editor: "Breaking", "Developing", "Updated"
- Each level has a different color (red, orange, blue)
- Fields for: headline text, timestamp (auto-fills with current time), and a short summary (2 lines max)
- A subtle pulse animation on "Breaking" level that stops after 5 seconds
- Mobile responsive — stacks cleanly on small screens
- A dismiss button so readers can close it

Design it to feel urgent but not overwhelming — credible news publication, not tabloid.

#### Option B: Reporter's Notebook

```
A "Reporter's Notebook" block for behind-the-scenes editorial notes within an article. Features:
- A visually distinct container that's clearly separate from the main article text
- A header that says "Reporter's Notebook" with a small notepad icon
- The background should look like aged paper — slightly warm, with a subtle texture
- A field for the reporter's name and a small avatar/photo
- The text inside uses a slightly different font (more personal, like handwriting-influenced serif)
- An optional "context" label at the top (e.g., "Why this matters", "Behind the story", "Editor's note")
- Should feel like a trusted journalist sharing something extra with the reader
```

#### Option C: Source Attribution Card

```
A "Source Card" block that provides transparent attribution within an article. Features:
- A clean card showing where key claims or data in the article come from
- Fields for: source name, source type (government, academic, industry, leaked), date of data, link to original, and a reliability note
- A small icon that changes based on source type
- Collapsible — shows just "Sources (3)" by default, expands to show all cards on click
- Helps readers assess credibility and lets editors track their sourcing

Design for trust and transparency — this is about showing our work.
```

### Steps

- Go to [telex.automattic.ai](https://telex.automattic.ai) and paste one of the prompts above (or write your own for a block your team needs).- Click **BUILD** and watch it generate.- Use follow-up prompts to iterate: "Make the colors more muted", "Add a dark mode variant", "Make the fields simpler for editors who aren't technical."- When you're happy, **Download** the .zip.- Install on your local Studio site (Plugins → Add New → Upload) and test it in a real post.- If it works well, **share the .zip with a colleague** and ask them to try it. Their feedback is more valuable than yours — you built it, so you know how it works.

TIP: BUILDING GOOD TELEX PROMPTS

Be specific about **both functionality and appearance**. Include: what the editor sees (fields, controls, options), what the reader sees (layout, colors, animations), and how it should *feel* (urgent? calm? trustworthy?). The feeling description helps Telex make better design decisions. Also specify what happens on mobile — blocks that break on phones are blocks that don't get used.

KEY TAKEAWAY

Custom blocks used to require a developer. With [Telex](https://telex.automattic.ai), any editor can build the tools their team needs. This isn't just about saving dev time — it's about giving editorial teams direct control over their publishing formats.

← Day 11 · **Next:** Day 13: Analytics-Driven Editorial →

---

## Day 13: AI-Powered Editorial Analysis with Claude

📅 Day 13 of 30 · Week 2: Connect & Create · ⏱ 15 minutes

## Connecting Content Analysis to Editorial Decisions

Most editorial teams look at analytics after publication to measure performance. But the real power is using content analysis **before and during** creation — letting AI inform what you write, how you headline it, and how you structure your content calendar. Claude + WordPress MCP makes this practical for any WordPress site.

## Exercise 1: Content Gap Analysis

Ask Claude to analyze your content portfolio via MCP:

Look at our published content from the last 30 days.
Analyze it by category and topic:

1. Which categories have the most content? Which have the least?
2. Are there topic areas where we only have 1-2 articles but could
clearly write more? (Look for posts that mention related subtopics
we haven't covered independently.)
3. What categories have the most comments or engagement?
4. Are there seasonal or timely topics we should be covering now?

Give me a "content opportunity matrix" — topics where potential audience
interest is high but our coverage is low.

## Exercise 2: Headline Performance Patterns

```
Look at our 50 most recent articles.
Analyze their headlines and find patterns:

- What headline structures do we use most? (questions, numbers,
how-tos, names, etc.)
- What's the average headline length?
- Which headlines could be improved based on best practices?
- Identify 10 articles that could benefit from headline A/B testing

Then use the WordPress AI plugin to generate 3 alternative headlines
for each of those 10 articles. Present originals vs. AI suggestions
in a table.
```

## Exercise 3: The AI Pre-Publish Checklist

Before publishing your next article, ask Claude:

I'm about to publish an article titled "[TITLE]" in the [CATEGORY] section.

1. What similar articles have we already published? Could this be
a duplicate or should it link to existing content?
2. Suggest 3-5 internal links to add (articles our readers would
logically want to read next)
3. Generate 3 alternative headlines using the AI plugin
4. Check: does this post have a featured image, excerpt, and proper
category/tags?
5. Generate alt text for any images that are missing it

💡 **Tip:** These prompts work with any WordPress site connected via MCP. The WordPress AI Experiments plugin adds title and excerpt generation directly in the editor, while Claude via MCP handles the analytical heavy lifting across your entire content library.

✅ **Key Takeaway:** You don't need a paid analytics platform to do AI-driven editorial analysis. Claude + MCP can read your entire WordPress site and spot patterns, gaps, and opportunities that would take hours to find manually in a dashboard.

← Day 12: Editorial Blocks with Telex · Day 14: Week 2 Review →

---

## Day 14: Week 2 Review — The Connected Workflow

📅 Day 14 of 30 · Week 2: Connect & Create · ⏱ 10 minutes

## Week 2 Checkpoint

In Week 1, you set up the tools. This week, you connected them into real workflows. Let's review what you've built.

## Workflows You've Created

### Content Creation

- **Publication analysis** — Claude learns your voice, topics, and style via MCP (Day 8)

- **SEO automation** — Bulk metadata generation and gap analysis (Day 9)

- **Newsletter drafting** — Daily/weekly newsletters from your published content (Day 10)

- **Content packages** — Multi-piece coordinated content from one prompt (Day 11)

### Design & Analytics

- **Custom editorial blocks** — Breaking news, reporter's notebook, source cards via Telex (Day 12)

- **Data-driven editorial** — Topic gaps, headline patterns, pre-publish checks (Day 13)

## Save These Artifacts

- A publication profile Claude can reuse
- A metadata audit prompt and review checklist
- A newsletter draft workflow
- One content package template
- One custom editorial block brief

## The Time Savings

Here's a rough estimate of time saved per week for a typical editorial team:

| Workflow | Manual Time | With AI | Saved | SEO metadata (20 posts) | 2 hours | 15 min | 1.75 hrs | Daily newsletter | 45 min/day | 10 min/day | 2.9 hrs/wk | Content packages | 4 hours | 45 min | 3.25 hrs | Headline testing | 30 min | 5 min | 25 min

**Estimated weekly savings: 8+ hours** — and that's before factoring in the quality improvements from analytics-informed decisions.

## What's Coming in Week 3

Week 3 shifts from creation to **editorial operations**:

- **Day 15:** Repurpose one article into 5 platform formats

- **Day 16:** Audit categories and tags with Studio Code

- **Day 17:** Run a site performance audit

- **Day 18:** Build an editorial calendar via MCP

- **Day 19:** Design a custom theme with Telex

- **Day 20:** Boost engagement with AI-powered internal linking

✅ **Key Takeaway:** Week 2 proved that connecting AI to your CMS is qualitatively different from using AI in a separate window. When Claude can read your site and write to it directly, workflows that took hours become conversations.

← Day 13: Analytics-Driven Editorial · Day 15: One Article, Five Platforms →

---

# Week 3: Editorial Workflows

You can use the tools individually. Now chain them into repeatable workflows that save your team real hours every week — content repurposing across five platforms, competitive intelligence, taxonomy cleanup, performance optimization, editorial calendar generation, and strategic internal linking.

### Tools this week

- **[WordPress MCP](https://developer.wordpress.com/docs/mcp/)** — content repurposing, calendar generation, internal linking- **Studio Code** — category audits via category management skill, `/need-for-speed` performance audits- **[WordPress AI Experiments plugin](https://github.com/WordPress/ai)** — AI content features + Claude for strategic cross-linking- **[Telex](https://telex.automattic.ai)** — custom editorial themes from descriptions- **[Playground](https://playground.wordpress.net)** — safe sandbox for testing AI integrations before production

### This week's exercises

**Day 15** — One Article, Five Platforms via MCPTwitter thread, LinkedIn, newsletter, push, Instagram — in 10 min

**Day 16** — Category & Tag AuditClean up years of taxonomy debt in minutes

**Day 17** — Performance Audit with Studio CodeCore Web Vitals diagnostics and fixes via /need-for-speed

**Day 18** — Build an Editorial Calendar via MCPData-driven planning that lands as draft posts in WordPress

**Day 19** — Build a Custom Theme with TelexDescribe your ideal editorial design, download a working theme

**Day 20** — AI-Powered Internal LinkingWordPress AI plugin + Claude for strategic cross-linking

**Day 21** — Week 3 Review — The 15-Minute SprintFull editorial cycle: insight to publish-ready in 15 minutes

← Previous week · Next week →

---

## Day 15: One Article, Five Platforms via MCP

📅 Day 15 of 30 · Week 3: Editorial Workflows · ⏱ 15 minutes

## The Content Multiplication Problem

You publish one article. But it needs to live on your website, in a newsletter, on Twitter/X, on LinkedIn, in a push notification, and possibly as a podcast intro. Each platform has different length requirements, tonal expectations, and formatting rules. Manually adapting content for 5 platforms adds 30-45 minutes per article.

## The Prompt

Pick a recently published article on your site and ask Claude:

Read our article "[TITLE]" (or: our most recent article in [CATEGORY]).
Now create platform-adapted versions:

1. **Twitter/X thread** (5-7 tweets)
- Lead with the most surprising finding
- Each tweet stands alone but builds a narrative
- End with a CTA linking back to the full article

2. **LinkedIn post** (under 700 chars)
- Professional tone, industry framing
- Open with a provocative question or stat
- End with "What do you think?" engagement hook

3. **Push notification** (under 100 chars)
- Urgent, clear, action-oriented
- Must make someone stop scrolling

4. **Newsletter blurb** (100 words)
- Conversational, teaser-style
- Links to the full article
- Includes one pull quote from the piece

5. **Podcast intro script** (30 seconds, ~75 words)
- Spoken-word cadence (short sentences, conversational)
- Sets up the topic for audio listeners who haven't seen the article

Save the Twitter thread and LinkedIn post as draft posts tagged "social-[date]".

## Why MCP Makes This Better Than ChatGPT

You could paste your article into any AI chat. But MCP adds three advantages:

- **Claude reads the article directly** — no copy-paste, no truncation, no losing formatting

- **Claude knows your publication's voice** from analyzing your full archive (Day 8)

- **Claude saves outputs to WordPress** — social drafts become posts your team can access and edit

## Iterate on Tone

The Twitter thread is too formal — we're known for being slightly irreverent
on social. Rewrite it with more personality. Think "smart friend explaining
the news at a dinner party."

The LinkedIn post is good but too long. Cut it to 500 characters.

✅ **Key Takeaway:** Content multiplication is where AI saves the most time for publishers. One article, one prompt, five platforms — and each version is tailored to the platform's norms, not just shortened.

← Day 14: Week 2 Review · Day 16: Category & Tag Audit →

---

## Day 16: Category & Tag Audit with Studio Code

📅 Day 16 of 30 · Week 3: Editorial Workflows · ⏱ 15 minutes

## The Taxonomy Problem

Every mature publication has taxonomy debt: duplicate categories that mean the same thing ("Tech" vs "Technology"), tags used once and abandoned, categories with hundreds of posts next to ones with three. This clutter hurts SEO, site navigation, and your ability to surface related content.

🔧 **Tool: Studio Code** — AI-powered CLI for WordPress, built on Claude Code. Runs WP-CLI commands, analyzes site data, and makes bulk changes through conversational prompts. [Learn more →](https://wordpress.com/blog/2026/04/27/studio-code-beta/)

## Step 1: Audit Categories

In Studio Code (or Claude with MCP), ask:

Audit our categories:
1. List all categories with their post count
2. Flag categories with fewer than 3 posts (likely unused)
3. Find categories that seem like duplicates (similar names or descriptions)
4. Identify any categories that are children of the wrong parent
5. Show the full category hierarchy as a tree

Present this as a report with recommendations.

## Step 2: Audit Tags

```
Now audit our tags:
1. How many total tags do we have?
2. How many tags have only 1 post? (these are almost always noise)
3. Find tags that overlap with category names (redundant)
4. List the top 20 most-used tags
5. Find tags that look like typos or variations of the same thing
(e.g., "AI", "A.I.", "artificial intelligence")

Recommend which tags to merge, delete, or keep.
```

## Step 3: Clean Up (Carefully)

After reviewing the report, you can ask Studio Code to make changes:

Based on your audit:
1. Merge "Tech" and "Technology" — keep "Technology" as the canonical term
2. Delete all tags used on only 1 post (list them first so I can review)
3. Move "Climate" under the "Science" parent category

Show me exactly what changes you'll make before executing them.

💡 **Tip:** Always review taxonomy changes before applying them. Deleting a category moves all its posts to "Uncategorized" unless you specify a replacement. Studio Code/Claude will warn you about this — listen to it.

✅ **Key Takeaway:** Taxonomy audits are the kind of tedious-but-important work that AI handles brilliantly. Studio Code can analyze hundreds of categories and thousands of tags in seconds, then make surgical fixes you'd never have time for manually.

← Day 15: One Article, Five Platforms · Day 17: Performance Audit →

---

## Day 17: Performance Audit with Studio Code

📅 Day 17 of 30 · Week 3: Editorial Workflows · ⏱ 15 minutes

## Why Performance Matters for Publishers

Page speed directly impacts your bottom line. Google's research shows that as page load time increases from 1 to 3 seconds, bounce probability increases by 32%. For publishers, every second of load time costs you readers, ad impressions, and subscription conversions.

## Step 1: Run a Site-Wide Audit

Ask Studio Code to analyze your site's performance:

Run a performance audit on our site:

1. List all active plugins and estimate their impact on page load
2. Check our theme for performance issues (render-blocking CSS/JS,
unoptimized images, excessive DOM size)
3. Count how many external scripts are loaded on the homepage
4. Check if caching is properly configured
5. Look for common WordPress performance anti-patterns:
- Plugins loading assets on pages where they're not needed
- Large database queries on the frontend
- Missing image lazy loading
- Unoptimized autoloaded options

Rate our performance setup as Red/Yellow/Green and prioritize fixes.

## Step 2: Analyze Plugin Overhead

```
For each active plugin, tell me:
- What it does
- Whether it loads frontend assets (CSS/JS)
- Whether those assets load on every page or only where needed
- Your recommendation: keep, replace, or configure

Flag any plugins that are redundant (two plugins doing the same thing)
or that haven't been updated in over a year.
```

## Step 3: Quick Wins

After the audit, ask for actionable fixes:

Based on the audit, give me the 5 highest-impact performance improvements
we can make today, ranked by:
1. Expected speed improvement
2. Effort to implement
3. Risk level (will it break anything?)

For each one, give me the exact steps or commands to implement it.

💡 **Tip:** If your site is on WordPress, many performance optimizations are handled at the platform level (page caching, CDN, image optimization). Studio Code is smart enough to recognize hosting infrastructure and focus its recommendations on what you can actually change.

✅ **Key Takeaway:** Performance auditing is perfectly suited for AI — it requires analyzing many files, checking configurations, and cross-referencing best practices. Studio Code does in minutes what would take a developer hours of manual inspection.

← Day 16: Category & Tag Audit · Day 18: Editorial Calendar →

---

## Day 18: Build an Editorial Calendar via MCP

📅 Day 18 of 30 · Week 3: Editorial Workflows · ⏱ 20 minutes

## The Calendar Challenge

Editorial calendars are the backbone of any newsroom. But maintaining them is a constant battle: stories shift, breaking news preempts planned coverage, and the calendar tool is always slightly out of sync with what's actually in the CMS. With MCP, Claude can build and maintain a calendar directly from your WordPress data.

## Step 1: Analyze Your Publishing Cadence

Look at our publishing history for the last 30 days and analyze:
1. How many posts do we publish per day on average?
2. What days of the week do we publish the most?
3. What time of day are posts typically published?
4. Which categories have the most consistent output?
5. Which categories have gaps in coverage?

Show me this as a weekly publishing pattern.

## Step 2: Generate a Forward-Looking Calendar

```
Based on our publishing patterns and upcoming events, create a 2-week
editorial calendar as draft posts:

For each day, create a draft post titled "Editorial Plan: [Date]" containing:
- Planned stories (based on our category cadence)
- Suggested topics (based on trending themes in our coverage)
- Any gaps to fill (categories that are due for coverage)
- Scheduled publishing times (based on our best-performing time slots)

Tag each plan post with "editorial-calendar" so we can find them.
```

## Step 3: The Daily Standup Prompt

Use this every morning to start your editorial day:

Good morning. Give me our editorial briefing:
1. What did we publish yesterday and how is it performing?
2. What's scheduled for today?
3. What's in draft status that might be ready to publish?
4. Any categories that haven't had fresh content in over a week?
5. Suggest one story idea based on what's trending in our topic areas.

💡 **Tip:** The daily standup prompt works best when you run it at the same time each day. Consistency builds the habit, and the AI's recommendations get better as it has more data about your team's patterns.

✅ **Key Takeaway:** An AI-powered editorial calendar isn't a static spreadsheet — it's a living system that reads your CMS, understands your patterns, and surfaces gaps and opportunities. The daily standup prompt alone can transform how your team starts each day.

← Day 17: Performance Audit · Day 19: Custom Theme with Telex →

---

## Day 19: Build a Custom Theme with Telex

On Day 3 you built a block. On Day 12, editorial-specific blocks. Today, you go bigger: describe your ideal editorial theme and have [Telex](https://telex.automattic.ai) build the whole thing.

### When to use Telex vs. Studio Code for themes

**[Telex](https://telex.automattic.ai)** is better when you want to start from a clean description and get a downloadable theme quickly — especially for prototyping ideas or building something completely new. **Studio Code** is better when you're iterating on an existing theme or need deep customization with performance optimization. They complement each other.

### Build your editorial theme

Go to [telex.automattic.ai](https://telex.automattic.ai). This time, instead of building a block, describe a full theme:

Build a modern news magazine WordPress theme for a digital publication. It should have:

HOMEPAGE:
- A prominent hero section featuring one main story with a large image, headline, and excerpt
- Below that, a 3-column grid of recent stories organized by category with thumbnails
- A sidebar widget area with "Trending" stories (by view count) and newsletter signup
- Category-based navigation in the header

ARTICLE PAGE:
- Clean, readable typography optimized for long-form reading (serif body, sans-serif headlines)
- Author bio card with photo at the top
- Estimated reading time
- Related stories at the bottom
- Social sharing buttons (floating on desktop, fixed bottom bar on mobile)
- A "Reporter's Notebook" section style for behind-the-scenes content

DESIGN:
- Color palette: deep navy header, white content area, warm gray backgrounds, accent color for links
- Professional and trustworthy — think modern broadsheet meets digital-first
- Generous whitespace, clear hierarchy
- Fully responsive with a mobile-first reading experience
- Dark mode toggle in the header

After the initial build, iterate with follow-ups:

- "Add an 'Opinion' section on the homepage with a different visual treatment — author photos and a slightly darker background"- "Make the mobile navigation a slide-out drawer with category filters"- "Add a 'Breaking News' ticker bar at the very top of the page"

Download the theme .zip and install it on your Studio CLI site to see it in action with real (or test) content.

KEY TAKEAWAY

A theme that used to take weeks of dev work can now be prototyped in minutes with Telex. The prototype isn't production-ready — but it's a conversation starter that lets editorial and product teams align on design before a single line of manual code is written.

← Day 18 · **Next:** Day 20: AI-Powered Internal Linking →

---

## Day 20: AI-Powered Internal Linking with MCP

📅 Day 20 of 30 · Week 3: Editorial Workflows · ⏱ 15 minutes

## The Internal Linking Gap

Most publishers dramatically under-link their content internally. The average article has 2-3 internal links; top-performing sites have 8-12. Internal links are free SEO, free recirculation, and free engagement — but adding them manually across a large archive is a daunting task.

This is where Claude + WordPress MCP becomes your internal linking team.

## Step 1: Audit Your Internal Link Health

Start by understanding where you stand. Ask Claude via MCP:

Analyze our 20 most recent articles.
For each one:
1. Count existing internal links
2. Identify 3-5 places where an internal link would be natural
and valuable (look for topic references, related concepts,
or "further reading" opportunities)
3. Find the best target article on our site for each link

Present this as a table: Article | Current Links | Suggested Links | Target URLs

Don't make changes yet — let me review first.

## Step 2: Apply Links in Bulk

After reviewing Claude's suggestions:

Your link suggestions look good. Please:
1. Add the suggested internal links to all 20 articles
2. Use natural anchor text (not "click here" — use descriptive phrases)
3. Open links in the same tab (not target="_blank")
4. Skip any article where you'd need to restructure sentences to add links

Tell me how many links you added across all articles.

## Step 3: Find Orphan Content

The most valuable internal linking exercise is finding "orphan" content — articles that exist but have zero or very few internal links pointing to them:

Find all published articles that have fewer than 2 internal links
pointing TO them from other articles.

For each orphan article:
1. Suggest 3 existing articles where we could naturally add a link to it
2. Draft the anchor text and the specific sentence where the link fits

These are our highest-priority link opportunities — they're invisible
to readers and search engines right now.

💡 **Tip:** Run this exercise quarterly on your top 50 articles. Internal linking is compounding — every new link improves SEO, recirculation, and time-on-site. A 20-article batch takes about 10 minutes with MCP.

✅ **Key Takeaway:** Internal linking is one of the highest-ROI SEO activities, and it scales beautifully with AI. Claude + MCP can audit, suggest, and apply internal links across your entire archive in minutes — no paid tools required.

← Day 19: Custom Theme with Telex · Day 21: Week 3 Review →

---

## Day 21: Week 3 Review — The 15-Minute Editorial Sprint

📅 Day 21 of 30 · Week 3: Editorial Workflows · ⏱ 10 minutes

## Week 3 Checkpoint

This week you moved from creating content to **operating your editorial engine** — repurposing, auditing, planning, and optimizing. Let's review what you can now do.

## The 15-Minute Editorial Sprint

You now have enough skills to run a complete editorial workflow in 15 minutes. Here's the protocol:

### Minutes 1-3: Morning Briefing

Run the daily standup prompt from Day 18: yesterday's performance, today's schedule, draft status, coverage gaps.

### Minutes 4-7: Content Multiplication

Take yesterday's top-performing article and generate platform versions (Day 15): Twitter thread, LinkedIn post, newsletter blurb.

### Minutes 8-10: SEO Check

Run the weekly SEO audit (Day 9) on posts from the last 48 hours. Fill any missing metadata.

### Minutes 11-13: Internal Linking

Run AI-powered suggestions or the MCP linking workflow (Day 20) on your 3 newest articles.

### Minutes 14-15: Newsletter Draft

Generate today's newsletter draft (Day 10) and send it to the newsletter editor for review.

## Skills Gained This Week

- **Content multiplication** — one article to five platforms (Day 15)

- **Taxonomy management** — category/tag audit and cleanup (Day 16)

- **Performance auditing** — site-wide speed analysis (Day 17)

- **Editorial planning** — AI-powered calendar and daily standups (Day 18)

- **Theme design** — editorial themes from descriptions with Telex (Day 19)

- **Internal linking at scale** — bulk link analysis and insertion (Day 20)

## Save These Artifacts

- Your 15-minute editorial sprint checklist
- A taxonomy cleanup plan
- A performance audit summary
- An editorial calendar prompt
- An internal linking workflow your team can repeat

## What's Coming in Week 4

The final week is about **shipping and scaling**:

- **Day 22:** Write your team's AI editorial policy

- **Day 23:** Build a team playbook from your workflows

- **Day 24:** Pair with a teammate to teach what you've learned

- **Day 25:** Measure the impact of your new workflows

- **Day 26:** Advanced — custom abilities for your newsroom

- **Days 27-30:** Prepare and deliver your demo

✅ **Key Takeaway:** The 15-minute editorial sprint is your daily operating rhythm. It combines the workflows from Weeks 1-3 into a single, repeatable process. Practice it every morning this week — by Week 4, it'll be second nature.

← Day 20: Internal Linking · Day 22: AI Editorial Policy →

---

# Week 4: Ship & Scale

You've built the skills and the workflows. Now make it stick: write an AI editorial policy your team will actually follow, build a playbook that gets someone to their first useful output in 20 minutes, pair with teammates, measure impact with a weekly scorecard, brainstorm custom Abilities for your newsroom, and deliver your demo.

### Tools this week

- **All tools** — you'll reference the full stack as you build team documentation- **[Abilities API](https://developer.wordpress.org/apis/abilities-api/)** — brainstorm custom AI-native capabilities for your newsroom- **Team playbook** — the onboarding document that drives adoption- **AI editorial policy** — the guardrails that protect credibility

### This week's exercises

**Day 22** — Write Your AI Editorial PolicyOne page of guardrails your team will actually read

**Day 23** — Build the Team PlaybookSetup guides, quick wins, and FAQ for your team

**Day 24** — Pair with a TeammateOne session creates more adoption than ten emails

**Day 25** — Measure the ImpactWeekly scorecard: time saved, quality signals, adoption

**Day 26** — Custom Abilities for Your NewsroomBrainstorm AI-native capabilities unique to your workflows

**Day 27** — Prepare Your Demo10 minutes that show your team a better way to work

**Days 28–30** — Race Day — Ship ItDeliver, share, celebrate

← Previous week ·

---

## Day 22: Write Your AI Editorial Policy

📅 Day 22 of 30 · Week 4: Ship & Scale · ⏱ 20 minutes

## Why You Need an AI Policy

Your team has been using AI tools for three weeks. Some people are probably already more comfortable than others. Before you scale this to the whole organization, you need clear guidelines: what's encouraged, what's prohibited, and where human judgment is non-negotiable.

An AI editorial policy isn't about restricting AI use — it's about giving your team confidence. When they know the boundaries, they're more willing to experiment within them.

## The Framework: Green / Yellow / Red

### 🟢 Green — Freely Encouraged

Things your team should use AI for without hesitation:

- Generating headline alternatives

- Writing meta descriptions and SEO excerpts

- Repurposing content across platforms

- Newsletter draft generation

- Internal link suggestions

- Taxonomy audits and cleanup

- Performance and site audits

- Research and background synthesis

### 🟡 Yellow — Use with Review

AI assists, but a human must review and approve before publication:

- First drafts of articles (always rewritten by a journalist)

- Social media posts (reviewed by social team before posting)

- Content packages (editor reviews all pieces)

- Bulk content updates (spot-check at least 20%)

### 🔴 Red — Human Only

AI should never be the final voice on:

- Factual claims about living people

- Legal or medical information

- Direct quotes and attribution

- Breaking news first reports

- Opinion and editorial stance

- Sensitive topic coverage (conflict, disaster, etc.)

## Exercise: Draft Your Policy

Use Claude via MCP to create a first draft tailored to your publication:

Based on what you know about our publication (our topics, tone, audience),
draft an AI editorial policy using the Green/Yellow/Red framework.

Include:
1. A statement of principles (3-4 sentences on our approach to AI)
2. Green/Yellow/Red lists customized to our specific content areas
3. Disclosure policy — when do we tell readers AI was involved?
4. Quality control checklist — what must be verified before publishing
AI-assisted content?
5. Escalation process — who decides edge cases?

Create this as a draft page on our site titled "AI Editorial Policy".

💡 **Tip:** Your policy should evolve. Review it quarterly. As AI tools improve and your team gets more comfortable, some Yellow items may move to Green. The key is having a starting point that your team can reference and trust.

✅ **Key Takeaway:** An AI editorial policy gives your team permission to innovate within guardrails. It's not about slowing down — it's about scaling up safely. The Green/Yellow/Red framework makes it simple to communicate and enforce.

← Day 21: Week 3 Review · Day 23: Build the Playbook →

---

## Day 23: Build the Team Playbook

📅 Day 23 of 30 · Week 4: Ship & Scale · ⏱ 20 minutes

## From Personal Skills to Team System

Over the last three weeks, you've built individual skills with the WordPress AI stack. Now it's time to package what works into a **playbook** that any team member can follow — even if they haven't gone through this entire program.

## Step 1: Catalog Your Workflows

Based on all the content on this site (the Crawl, Walk, Press program),
compile a list of every workflow, prompt, and exercise we've covered.
For each one, include:
- Workflow name
- Which tool(s) it uses
- Time savings estimate
- Complexity level (Beginner / Intermediate / Advanced)
- The day it was introduced

Sort by complexity level, then by frequency of use.

## Step 2: Create Prompt Templates

The best prompts you've used deserve to be standardized. Ask Claude:

From our workflow catalog, extract the 10 most useful prompts and
format them as a "Prompt Library" page with:

For each prompt:
- A clear name (e.g., "Daily Newsletter Generator")
- The tool it requires (MCP, Studio Code, Telex, etc.)
- The full prompt text (ready to copy-paste)
- Customization notes (what to change for your specific publication)
- Expected output format

Create this as a draft page titled "AI Prompt Library".

## Step 3: Write Quick-Start Guides

Not everyone on your team needs the full 30-day program. Create role-specific quick starts:

Create 3 quick-start guides as draft pages:

1. **"AI Quick Start for Writers"** (5 min read)
- How to use title suggestions and AI content features in the editor
- 3 prompts for improving drafts
- The Green/Yellow/Red policy summary

2. **"AI Quick Start for Editors"** (7 min read)
- The 15-minute editorial sprint
- Newsletter and content package workflows
- SEO audit workflow
- Quality control checklist

3. **"AI Quick Start for Product/Tech"** (10 min read)
- Studio CLI and Studio Code setup
- MCP configuration
- Abilities API overview
- Performance audit workflow
- Custom abilities development

✅ **Key Takeaway:** A playbook turns your personal AI skills into organizational capability. The prompt library alone is worth its weight in gold — it eliminates the "I don't know what to ask" barrier that stops most teams from adopting AI.

← Day 22: AI Editorial Policy · Day 24: Pair with a Teammate →

---

## Day 24: Pair with a Teammate

📅 Day 24 of 30 · Week 4: Ship & Scale · ⏱ 30 minutes

## The Best Way to Learn Is to Teach

Today's exercise is different: you're going to sit with a teammate and walk them through one of the workflows you've learned. This is the most effective way to solidify your own skills, identify gaps in the playbook, and start building organizational momentum.

## Choose Your Pairing Session

Pick the format that fits your teammate's role:

### For a Writer / Reporter

**Show them:** Title Suggestions + Excerpt Generation + Content Multiplication

- Open one of their recent drafts

- Run Title Suggestions and compare alternatives together

- Generate a meta description and social posts from their article

- Let them try a prompt themselves — "make me a Twitter thread from this article"

### For an Editor

**Show them:** The 15-Minute Sprint + Newsletter Drafting

- Run the daily standup prompt live, using your actual site data

- Generate a newsletter draft together

- Iterate on the draft: "make the opening punchier" / "lead with this story instead"

- Show the SEO gap analysis — "here's what we missed this week"

### For a Product / Tech Person

**Show them:** Studio Code + MCP + Abilities API

- Spin up a local site with Studio CLI

- Connect Claude via MCP

- Run a performance audit

- Show the Abilities API endpoint and discuss custom abilities for your site

## Pairing Tips

- **Use their real content** — demos with fake data don't stick. Use actual articles, actual analytics, actual workflows.

- **Let them drive** — After showing the first example, hand over the keyboard. Let them type the prompt and iterate.

- **Note the questions** — Every question they ask is a gap in your playbook. Write them down.

- **End with a win** — Make sure they leave with one thing that saved them time today.

✅ **Key Takeaway:** Teaching a colleague is the fastest way to scale AI adoption. One pairing session creates a second advocate. Do this twice, and you have four people who can demonstrate the value to the rest of the team.

← Day 23: Team Playbook · Day 25: Measure the Impact →

---

## Day 25: Measure the Impact

📅 Day 25 of 30 · Week 4: Ship & Scale · ⏱ 15 minutes

## Quantifying AI's Value

You need numbers to justify continued investment. Not vague "we're more productive" claims — concrete, defensible metrics that resonate with leadership. Here's how to measure what matters.

## The Three Categories

### 1. Time Savings (Easy to Measure)

Track how long tasks took before and after AI workflows:

| Workflow | Before AI | With AI | Weekly Savings | Newsletter drafting | 45 min/day | 10 min/day | 2.9 hours | SEO metadata (per batch) | 2 hours | 15 min | 1.75 hours | Social content per article | 30 min | 5 min | Varies by volume | Content packages | 4 hours | 45 min | 3.25 hours | Internal link audit | Never done | 10 min | N/A (new capability)

### 2. Quality Improvements (Medium to Measure)

- **SEO completeness** — % of posts with meta descriptions before vs. after

- **Internal link density** — Average links per article before vs. after

- **Taxonomy health** — Number of orphaned tags before vs. after cleanup

- **Platform coverage** — How many platforms each article reaches now vs. before

### 3. Revenue / Engagement Impact (Hard but Powerful)

- **Organic traffic change** — After SEO metadata improvements

- **Newsletter open/click rates** — AI-assisted vs. manually written

- **Time on site / recirculation** — After internal linking improvements

- **Content velocity** — Articles published per week before vs. after

## Exercise: Build Your Dashboard

Help me create an AI impact report for our editorial team.
Using data from our site, compile:

1. Content velocity: posts published per week for the last 8 weeks
2. SEO completeness: % of recent posts with excerpts/meta descriptions
3. Average internal links per article (last 20 posts)
4. Content types produced (articles, newsletters, social posts)

Format this as a clear report I can share with leadership.
Include a "before" baseline (week 1 numbers) and "current" numbers.

✅ **Key Takeaway:** Time savings get attention, but quality and engagement metrics close the deal. Measure all three to build an airtight case for AI investment.

← Day 24: Pair with a Teammate · Day 26: Custom Abilities →

---

## Day 26: Advanced — Custom Abilities for Your Newsroom

📅 Day 26 of 30 · Week 4: Ship & Scale · ⏱ 20 minutes

## From User to Builder

On Day 6, you learned what the Abilities API is. Today you'll design custom abilities for your specific newsroom — turning your unique workflows into capabilities that any AI agent can discover and use.

This is the most technical day in the program. If you're not a developer, that's fine — the goal is to **design** the abilities and hand the specs to your engineering team. If you are a developer, you can build them today.

## Step 1: Identify Your Newsroom's Unique Workflows

Think about what's specific to your publication. Examples:

- **Wire service integration** — "Check AP/Reuters for updates on [topic]"

- **Correction workflow** — "Add a correction notice to [article] and log it"

- **Embargo management** — "Schedule [post] for publication at exactly [time]"

- **Story assignment** — "Create a story assignment for [reporter] on [topic]"

- **Live blog management** — "Add an update to the live blog for [event]"

## Step 2: Design the Ability Spec

For each custom ability, define:

Ability: generate_correction_notice
Description: Creates a formatted correction notice for a published article
and appends it to the post content.

Parameters:
- post_id (integer, required): The article to correct
- correction_text (string, required): What was wrong and what's correct
- severity (string, optional): "minor" | "major" | "retraction"
Default: "minor"

Behavior:
1. Adds a styled correction box at the top of the article
2. Includes timestamp and correction category
3. Logs the correction in a custom "corrections" table
4. If severity is "major" or "retraction", notifies the editor-in-chief

## Step 3: Use Studio Code to Scaffold

If you're ready to build, use Studio Code:

Create a WordPress plugin called "Newsroom Abilities" that registers
these custom abilities:

1. generate_correction_notice — adds a formatted correction box to an article
2. create_story_assignment — creates a draft post assigned to a specific author
with a deadline stored in post meta
3. generate_daily_briefing — queries today's published posts, yesterday's
analytics, and upcoming scheduled posts, then returns a structured briefing

Use wp_register_ability() for each. Include proper parameter validation
and capability checks.

💡 **Tip:** Even if you don't build these today, the specs are valuable. Hand them to your engineering team with the message: "Here's what we need AI to be able to do — the Abilities API is how to expose it." That's a product spec, not a feature request.

✅ **Key Takeaway:** Custom abilities are how you make AI truly yours. Every publication has unique workflows — the Abilities API lets you expose them to AI agents. Design the spec even if you're not the one writing the code.

← Day 25: Measure the Impact · Day 27: Prepare Your Demo →

---

## Day 27: Prepare Your Demo

📅 Day 27 of 30 · Week 4: Ship & Scale · ⏱ 25 minutes

## The Demo That Gets Buy-In

You've spent 27 days learning the WordPress AI stack. Now you need to show your leadership (or your customer, or your team) what's possible — in a 10-minute live demo that makes them want to invest more. Here's how to build it.

## The Structure: Show, Don't Slide

The best AI demos are live. No slides, no screenshots — real tools, real content, real results. Here's a 10-minute script:

### Minutes 0-2: The Problem

Open with a concrete pain point your audience feels: "Our newsletter takes 45 minutes every day," or "We have 2,000 articles with no meta descriptions." Make it specific to your organization.

### Minutes 2-5: The Magic Moment

Do the thing live. Pick your strongest workflow:

- **Newsletter in 2 minutes** — Ask Claude to draft today's newsletter from your live site data. The audience watches real content appear.

- **Content package** — Generate 5 pieces from one topic. Show the drafts appearing in WordPress in real-time.

- **SEO bulk fix** — Show the gap analysis, then apply fixes to 10 articles live.

### Minutes 5-7: The Stack

Briefly explain what made the magic possible: "This works because WordPress now has an AI-native architecture — the Abilities API, MCP connections, and tools like Studio Code and Telex."

### Minutes 7-9: The Numbers

Share your impact metrics from Day 25. Time savings, quality improvements, new capabilities.

### Minutes 9-10: The Ask

What do you want from the audience? More time to explore? A bigger pilot? An engineering sprint on custom abilities? Be specific.

## Preparation Checklist

- ☐ Test your demo workflow 3 times end-to-end

- ☐ Ensure your MCP connection is stable

- ☐ Have your site running locally or use the preview URL

- ☐ Prepare a backup (screen recording) in case of network issues

- ☐ Pre-load Claude Desktop with your site context

- ☐ Have your impact metrics ready

- ☐ Know your ask

✅ **Key Takeaway:** Live demos with real content on real tools are 10x more convincing than slides. The WordPress AI stack demos beautifully because it creates visible, tangible results — drafts appearing in the CMS, metadata being filled, content being multiplied.

← Day 26: Custom Abilities · Days 28-30: Race Day →

---

## Days 28–30: Race Day — Ship It

📅 Days 28-30 of 30 · Week 4: Ship & Scale · ⏱ The home stretch

## You Made It

30 days ago, the WordPress AI stack was a list of unfamiliar tools. Now you've used every one of them, built real workflows, measured the impact, written a policy, created a playbook, and taught a teammate. These last three days are about putting it all together.

## Your Final Package

- AI editorial policy
- Team playbook and prompt library
- Role-specific quick-start guides
- Impact report with time-savings and quality metrics
- Demo script and follow-up plan

## Day 28: Deliver Your Demo

Run the demo you prepared on Day 27. Whether it's for your team, your leadership, or a customer — this is your moment. Remember:

- Start with the problem they feel

- Do the thing live

- Show the numbers

- Make a specific ask

## Day 29: Iterate on Feedback

After the demo, collect feedback and refine:

- What resonated most? Double down on that.

- What questions came up? Address them in your playbook.

- What concerns were raised? Update your AI policy to address them.

- Who wants to try it? Schedule pairing sessions with them.

## Day 30: Set Your Running Pace

The program ends, but the practice continues. Commit to a sustainable daily rhythm:

### The Daily Rhythm (15 minutes)

- Morning briefing prompt

- Newsletter draft generation

- Social content for top article

### The Weekly Rhythm (30 minutes)

- SEO gap analysis and bulk fix

- Internal link audit on top 10 articles

- Content package planning for next week

### The Monthly Rhythm (1 hour)

- Taxonomy audit and cleanup

- Performance audit

- Impact metrics report

- AI policy review

- Pairing session with a new team member

## What's Next

The WordPress AI stack is evolving fast. Keep your eye on:

- **WordPress 7.0 AI Client** — A provider-agnostic AI SDK shipping in 2026. It will bring `wp_ai_client_prompt()` to WordPress core, letting any plugin or theme call AI models directly. [Follow development →](https://make.wordpress.org/core/)

- **Studio Code updates** — New capabilities are shipping weekly. [Watch the blog →](https://wordpress.com/blog/2026/04/27/studio-code-beta/)

- **Telex improvements** — Better block and theme generation, more design control. [Try it →](https://telex.automattic.ai/)

- **Abilities API expansion** — More core abilities shipping with each WordPress release. [Developer docs →](https://developer.wordpress.org/apis/abilities-api/)

### 🏃 Congratulations — You've Crossed the Finish Line

You started from the couch. Now you're running a 5K. The WordPress AI stack isn't a future promise — it's tools that work today, and you know how to use every one of them. Keep running.

← Day 27: Prepare Your Demo · Back to Home →

---

# FAQ

## Frequently Asked Questions

### What do I need to start?

A computer with Node.js 18+ installed, a WordPress.com account, and a Claude.ai account (Pro or Team plan recommended for MCP access). Everything else is covered in Day 0. Total setup time: about 20 minutes.

### Do I need to be a developer?

No. The program is designed for editorial and product teams. You'll copy-paste commands into a terminal and write prompts in natural language. Days 1-25 require zero coding. Day 26 (custom abilities) is more technical but can be completed as a design exercise — you write specs, your engineering team builds them.

### How much time does it take per day?

10-20 minutes per exercise. Some days (like the demo prep on Day 27) take 25-30 minutes. You can do it during your morning coffee.

### Do I need a WordPress account?

No. Most exercises work with any WordPress site. WordPress AI Experiments plugin features (Days 5, 13, 20) are platform-specific, but the program provides alternative approaches for non-WordPress sites. MCP, Telex, Studio CLI, Playground, and the Abilities API work with any WordPress setup.

### What is MCP and why does it matter?

MCP (Model Context Protocol) is an open standard that connects AI agents to external tools and data. For WordPress, it means Claude can directly read your posts, create drafts, manage categories, and execute workflows — without you copy-pasting content between the AI and your CMS. It's the difference between "AI as a writing tool" and "AI as a workflow partner." [Setup guide →](https://developer.wordpress.com/docs/mcp/)

### What's the Abilities API?

A framework in WordPress core (since 6.9) that lets plugins and themes declare what they can do in a way AI agents can discover. It's like a menu for AI — agents read it to know what actions are available on your site. Detailed explanation on Day 6. [Developer docs →](https://developer.wordpress.org/apis/abilities-api/)

### What's Telex?

[Telex](https://telex.automattic.ai/) is Automattic AI Labs' natural language builder. Describe a block or theme in plain English, and Telex generates a working WordPress plugin or theme as a downloadable .zip. It's covered in Day 3 (blocks), Day 12 (editorial blocks), and Day 19 (themes).

### What's Studio Code vs Studio CLI?

**Studio CLI** (`wp-studio`) is a command-line tool for creating and managing local WordPress sites. **Studio Code** is an AI-powered CLI built on Claude Code, specifically tuned for WordPress development — it can build themes, run audits, and manage your site through natural language. Studio CLI is covered on Day 2; Studio Code features throughout Weeks 3-4.

### Can I use this with my team?

Absolutely — that's the goal. The program is designed as a self-paced curriculum you can share with your entire editorial/product team. Week 4 focuses specifically on scaling: writing an AI policy (Day 22), building a team playbook (Day 23), pairing with teammates (Day 24), and measuring impact (Day 25).

### What about content quality and accuracy?

AI-generated content should always be reviewed by a human before publication. The program emphasizes this repeatedly: AI drafts, humans refine and publish. Day 22 covers building an AI editorial policy with clear Green/Yellow/Red guidelines for your team.

### Where can I learn more about each tool?

- **Abilities API:** [developer.wordpress.org](https://developer.wordpress.org/apis/abilities-api/)

- **WordPress MCP:** [developer.wordpress.com/docs/mcp](https://developer.wordpress.com/docs/mcp/)

- **Studio CLI:** [npmjs.com/package/wp-studio](https://www.npmjs.com/package/wp-studio)

- **Studio Code:** [wordpress.com blog announcement](https://wordpress.com/blog/2026/04/27/studio-code-beta/)

- **Telex:** [telex.automattic.ai](https://telex.automattic.ai/)

- **WordPress AI plugin:** [github.com/WordPress/ai](https://github.com/WordPress/ai/)

- **WordPress Playground:** [playground.wordpress.net](https://playground.wordpress.net/)

← Back to Home

---

*This document was exported from [Crawl, Walk, Press](https://github.com/alansmodic/crawl-walk-press). Visit the site for the interactive version with progress tracking.*