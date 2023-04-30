import {Events} from "discord.js"

export const event = {
    name : Events.ClientReady,
    once : 1,   //for 'loader.js' loadEvents.client.<type(once, on)>
}

export const action = (c) =>{
    console.log(`Ready! Logged in as ${c.user.tag}`);
}