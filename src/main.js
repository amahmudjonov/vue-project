import {createApp} from 'vue'
import App from './App.vue'
import components from './components/UI/idnex'


const Project = createApp(App)

console.log(components)


components.forEach(component => {
    Project.component(component.name, component)
});

export default Project