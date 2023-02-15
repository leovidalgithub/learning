<template>
	<div class="container">
		<h1>Login</h1>
		<form @submit.prevent="login">
			<input type="email" placeholder="Email" class="form-control my-2" v-model="usuario.email">
			<input type="text" placeholder="Contraseña" class="form-control my-2" v-model="usuario.pass">
			<b-button class="btn-block" type="submit">Acceder</b-button>
		</form>
		<br>
		<b-button class="btn-block" v-on:click="addNewUser">New User</b-button>
		<div v-if="mensaje != ''" class="my-2">
			<p>{{mensaje}}</p>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		data() {
			return {
				usuario: {email: 'leo@leo.com', pass: 'pqowpqow'},
				mensaje: '',
				newUser: {
					nombre: 'Adolfito',
					email: 'adolfi@yahoo.com',
					pass: 'pqowpqow',
					role: 'ADMIN'
					}
			}
		},
		methods: {
			...mapActions(['guardarUsuario']),
			login() {
				this.axios.post('/login', this.usuario)
					.then(res => {
						const token = res.data.token;
						this.guardarUsuario(token);
						this.$router.push({name: 'Notas'})
						// this.$router.push({name: 'notas', query: { pagina: 1 }})
						console.log(res)
					})
					.catch(e => {
						console.log('e.response');
						console.log(e.response);
						this.mensaje = e.response.data.mensaje
					})
			},
			addNewUser() {
				this.axios.post('/nuevo-usuario', this.newUser)
					.then(res => {
						console.log('newUser added')
						console.log(res.data)
					})
					.catch(e => {
						console.log(e.response);
						this.mensaje = 'Error adding new user'
					})
			}
		}
	}
</script>
