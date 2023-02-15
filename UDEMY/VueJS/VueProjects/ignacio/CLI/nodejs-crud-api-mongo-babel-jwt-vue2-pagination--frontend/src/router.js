import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router =  new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
		path: '/',
		name: 'Home',
		component: Home
		},
		{
		path: '/notas',
		name: 'Notas',
		component: () => import(/* webpackChunkName: "notas" */ './views/Notas.vue'),
		meta: {requireAuth: true}
		},
		{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
		}
	]
})

router.beforeEach((to, from, next) => {
	// const rutaProtegida = to.matched.some(record => record.meta.requireAuth)
	const rutaProtegida = to.matched.some(record => {
		console.log('record = ', record);
		return record.meta.requireAuth
	})

	if(rutaProtegida && store.state.token === '') {
		next({name: 'login'});
	} else {
		next();
	}
});

export default router;