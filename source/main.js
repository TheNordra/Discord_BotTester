import { Client, Events, GatewayIntentBits } from 'discord.js'
import vueInit from '@/core/vue.js'
import dotenv from 'dotenv'
import {loadCommands, loadEvents} from '@/core/loader.js' 
import { useAppStore } from '@/store/app.js'

vueInit()
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
const appStore = useAppStore()
appStore.client = client

loadCommands()
loadEvents()

client.login(process.env.TOKEN);


//EP6 25:27 loadEvents bugged
//didn't console.log(logged in information) at[@/events/ready/index.js]