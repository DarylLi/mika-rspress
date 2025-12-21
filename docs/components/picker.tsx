import React,{useEffect} from 'react';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { createApp } from 'vue'



dayjs.extend(customParseFormat);

const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};

const App: React.FC = () => {
    useEffect(()=>{
        let dd = document.createElement('script');
        dd.src = "https://unpkg.com/vue@3/dist/vue.global.prod.js";
        document.body.appendChild(dd);
        dd.onload=()=>{
            const msg = 'Message from vue3 cdn: Hello Vue3 components!'
            const tel = {
                template:`<h2 style="margin:20px;color:green">${msg}</h2>`,
            }
            const app = (window as any).Vue.createApp(tel);
            app.use((window as any).ElementPlus);
            app.mount('#vue-root')
        };
        
        // const vueApp:any = {
        //     template: `<h1>Hello, Vue3!</h1>`
        //   };
        //   const app = createApp(vueApp);
        //   console.log(app)
        //   app.mount('#vue-root');
    },[])
    
    return(
    <>
    <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
    <div id="vue-root"></div>
    </>
    )};

export default App;