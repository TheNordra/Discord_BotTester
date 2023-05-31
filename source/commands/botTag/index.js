import { SlashCommandBuilder} from "discord.js"
import {client} from "@/store/app.js"


export const command = new SlashCommandBuilder()
    .setName('bot-tag')
    .setDescription('return bot\'s tag')

export const action = async(ctx) =>{
    const c = client;
    await ctx.reply(`bot\'s tag is : ${c}`)
}