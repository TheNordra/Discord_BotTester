import{ REST, Routes, Collection, Client} from 'discord.js'
import fg from 'fast-glob'
import {useAppStore} from '@/store/app.js'

const updateSlashCommands = async(commands) =>{
    const rest = new REST({versions: 10}).setToken(process.env.TOKEN)

    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID,
            process.env.GUILD_ID
        ),
        {
            body:commands,
        }
    )
}

export const loadCommands = async() =>{
    const appStore = useAppStore()
    const commands = []
    const actions = new Collection()
    const files = await fg('./source/commands/**/index.js')
    for(const file of files){
        const cmd = await import(file)
        commands.push(cmd.command)
        actions.set(cmd.command.name, cmd.action)
    }

    await updateSlashCommands(commands)
    appStore.commandsActionMap = actions

    console.log(appStore.commandsActionMap)
}

export const loadEvents = async() =>{
    const appStore = useAppStore()
    const client = appStore.client
    const files = await fg('./source/events/**/index.js')
    for(const file of files){
        const eventFile = await import(file)
        
        if(eventFile.event.once){
            client.once(eventFile.event.name,eventFile.action)
        }else{
            client.on(eventFile.event.name,eventFile.action)
        }
    }
}