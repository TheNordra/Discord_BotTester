import { SlashCommandBuilder, Client} from "discord.js"


const client = new Discord.Client();
export const command = new SlashCommandBuilder()
    .setName('bot-tag')
    .setDescription('return bot\'s tag')

export const action = async(ctx) =>{
    await ctx.reply('bot\'s tag is : ${client.user.tag}')
}