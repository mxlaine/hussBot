import { SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('echo')
  .setDescription('Replies with your input!')
  .addStringOption(option =>
    option.setName('input')
          .setDescription('The input to echo back')
          .setRequired(false)
  );

export default {
  data,
  async execute(interaction) {
    const input = interaction.options.getString('input');
    await interaction.reply(input ?? 'You did not provide any input!');
  }
};
