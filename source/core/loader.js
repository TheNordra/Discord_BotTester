import{ REST, Routes} from 'discord.js'
import fg from 'fast-glob'

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
    console.log(result)
}

export const loadCommands = async() =>{

    const commands = []
    const files = await fg('./source/commands/**/index.js')
    for(const file of files){
        const cmd = await import(file)
        commands.push(cmd.command)
    }

    await updateSlashCommands(commands)
}