
import {Funcs} from './MainScripts.js'
const CreateButton = document.getElementById('PC')
const PContent = document.getElementById('PCc')
const PTitle = document.getElementById('PCt')
CreateButton.addEventListener('click', function(){
    Funcs.CreatePost(PTitle.value, PContent.value)
    console.log('e')
})
