import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import jwt_decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: localStorage.getItem('token') || '',
		usuarioDB: {},
		todos: [ // this object is just to play with store getters
			{ id: 1, text: '111', done: true },
			{ id: 2, text: '222', done: false },
			{ id: 3, text: '333', done: false },
			{ id: 4, text: '444', done: true },
			{ id: 5, text: '555', done: true }
		]
	},
	mutations: {
		obtenerUsuario(state, payload) {
		state.token = payload;
		if(payload === '') {
			state.usuarioDB = {};
		} else {
			state.usuarioDB = jwt_decode(payload);
			// router.push({name: 'notas'});
		}
		}
	},
	actions: {
		guardarUsuario({commit}, payload) {
			localStorage.setItem('token', payload);
			commit('obtenerUsuario', payload);
		},
		cerrarSesion({commit}) {
			commit('obtenerUsuario', '');
			localStorage.removeItem('token');
			router.push({name: 'login'});
		},
		leerToken({commit}) {
			const token = localStorage.getItem('token');
			if(token) {
				commit('obtenerUsuario', token);
			} else {
				commit('obtenerUsuario', '');
			}
		}
	},
	getters: {
		token: state => state.token,
		estaActivo: state => !!state.token,
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			return getters.doneTodos.length;
		},
		doneTodosById: state => id => {
			return state.todos.filter(todo => todo.id == id)
		},
		usuarioDB: state => state.usuarioDB
	}
})
