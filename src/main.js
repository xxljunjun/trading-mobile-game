import Vue from 'vue'
import App from './App.vue'
import i18n from '@/utils/i18n';
import MescrollUni from "@/pages/mescroll-uni/mescroll-uni.vue"; //上拉加载和下拉刷新
Vue.component('mescroll-uni', MescrollUni)
Vue.config.productionTip = false
const app = new Vue({
	...App,
	i18n,
})
app.$mount()
