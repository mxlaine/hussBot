# HussBot

HussBot is a Discord bot for fetching various statistics for the tactical first-person shooter **Valorant**.  
It integrates with the [HenrikDev Valorant API](https://docs.henrikdev.xyz/) to deliver real-time player stats, match history, and profile information, all directly inside your Discord server.

---

## Features (WIP)
- **Valorant Account Lookup** - Instantly fetch player profiles using Riot ID and tag.  
- **Live Match & Rank Tracking** - Get live competitive stats and leaderboards for your friends in-game.  
- **Account Level & Card Display** - See player levels and profile cards in embeds.  
- **Extensible Architecture** - Modular commands, easy to expand and maintain.
'
---

## Tech Stack
- **Node.js** (v18+)  
- **Discord.js** - Discord API interaction  
- **Fetch API / node-fetch** - Valorant API integration  
- **ES Modules (ESM)** - Clean, modern import/export syntax  
- **dotenv** - Secure environment variable management  

---

## Installation

Follow these steps to set up and run HussBot locally:

### 1. Clone the repository

```bash
git clone https://github.com/mxlaine/hussBot.git
cd HussBot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create config.json in root
```json
{
  "token"="your_discord_bot_token",
  "api-key"="your_henrik_dev_api_key",
  "guild-id"="your_discord_server_id",
  "client-id"="your_discord_bot_client_id"
}
```

### 4. Deploy commands and run!
```bash
npm src/deploy.js
npm src/
```

### 5. Invite HussBot to your server

Use your bot’s OAuth2 URL (from the Discord Developer Portal) to invite it to your server.
Once it’s online, you’re ready to go!
