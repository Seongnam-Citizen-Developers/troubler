import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import Router from './router'
import './index.css'
// 처음 create할 때 언어를 kr로 설정
const i18n = createI18n({ locale: 'kr' })
// main ts에서 미들웨어로 셋팅해주고, config에서 path설정도 해줘야한다
const app = createApp(App)
app.use(i18n)
app.use(Router)
app.mount('#app')
