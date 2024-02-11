import discord
import os
from dotenv import load_dotenv
load_dotenv()

myIntents = discord.Intents.default()
myIntents.message_content = True
myIntents.messages = True

client = discord.Client(intents=myIntents)
token = os.getenv("DISCORD_TOKEN")
allowedTextChannels = [855758948166533120, 604272237607911457] # #hutseinchat, test

@client.event
async def on_ready():
    print("rdy")


@client.event
async def on_message(message: discord.Message):
    if message.channel.id not in allowedTextChannels:
        return

    if "meow" in message.content and message.author != client.user:
        await message.channel.send("mamal juthana")

    await message.add_reaction("\U0001F7E5")

client.run(token)
