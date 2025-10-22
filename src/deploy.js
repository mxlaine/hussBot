import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { REST, Routes } from 'discord.js';
import config from "../config.json" with { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = await import(filePath);
    commands.push(command.default.data.toJSON());
  }
}

const rest = new REST({ version: '10' }).setToken(config.token);

try {
  console.log('Refreshing guild commands...');
  await rest.put(
    Routes.applicationGuildCommands(config['client-id'], config['guild-id']),
    { body: commands }
  );
  console.log('Successfully registered guild commands.');
} catch (error) {
  console.error('Failed to register commands:', error);
}
