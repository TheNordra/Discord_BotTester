import { createApp } from 'vue'
import {createPinia} from 'pinia'


export default() =>{
    console.log('CheckPoint Vue')
    const vue = createApp({})
    const pinia = createApp({})

    vue.use(pinia)
}