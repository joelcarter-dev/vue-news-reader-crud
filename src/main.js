import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './components/home/Home.vue';
import About from './components/about/About.vue';
import ArticleDetail from './components/article-detail/ArticleDetail.vue';
import ArticleEditor from './components/article-editor/ArticleEditor.vue';
import Signup from './components/signup/Signup'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  component: Home
},{
  path: '/about',
  component: About
},{
  name: "article-editor",
  path: '/article-editor/:articleId?',
  component: ArticleEditor
}, {
  name: "detail",
  path: '/article/:articleId',
  component: ArticleDetail,
  props: true //this enables route params
},
{
  name: "signup",
  path: '/signup',
  component: Signup,
  props: true //this enables route params
}
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
