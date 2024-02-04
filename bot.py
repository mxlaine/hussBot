import discord
import os
from dotenv import load_dotenv

client = discord.Client(intents=discord.Intents.default())
load_dotenv()
token = os.getenv("DISCORD_TOKEN")

@client.event
async def on_ready():
    print("rdy")


@client.event
async def on_message(message: discord.Message):
    if message.author == client.user or message.channel.id != 855758948166533120:
        return
    await message.add_reaction("\U0001F7E5")


client.run(token)
