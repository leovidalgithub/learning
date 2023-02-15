<template>
	<div class="container">
		<h1>Notas</h1>

		<!-- alert -->
		<b-alert
			:show="dismissCountDown"
			dismissible
			:variant="mensaje.color"
			@dismissed="dismissCountDown=0"
			@dismiss-count-down="countDownChanged"
		>
			{{mensaje.texto}}
		</b-alert>

		<!-- edit form -->
		<form @submit.prevent="editarNota(notaEditar)" v-if="editar">
			<h3>Editar nota</h3>
			<input type="text" class="form-control my-2" placeholder="Nombre" v-model="notaEditar.nombre">
			<input type="text" class="form-control my-2" placeholder="Descripción" v-model="notaEditar.descripcion">
			<b-button class="btn-warning my-2 mx-2" type="submit">Editar</b-button>
			<b-button class="my-2" type="submit" @click="editar = false">Cancelar</b-button>
		</form>

		<!-- add form -->
		<form @submit.prevent="agregarNota()" v-if="!editar">
			<h3>Agregar nueva nota</h3>
			<input type="text" class="form-control my-2" placeholder="Nombre" v-model="nota.nombre">
			<input type="text" class="form-control my-2" placeholder="Descripción" v-model="nota.descripcion">
			<b-button class="btn-success my-2 btn-block" type="submit">Agregar</b-button>
		</form>

		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nombre</th>
					<th scope="col">Descripción</th>
					<th scope="col">Acciones</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in notas" :key="index">
					<th scope="row">{{item._id}}</th>
					<td>{{item.nombre}}</td>
					<td>{{item.descripcion}}</td>
					<td>
						<!-- <b-button @click="alerta()">Acción</b-button> -->
						<b-button @click="eliminarNota(item._id)" class="btn-danger btn-sm mx-2">Eliminar</b-button>
						<b-button @click="activarEdicion(item._id)" class="btn-warning btn-sm">Editar</b-button>
					</td>
				</tr>
			</tbody>
		</table><hr>

		<!--  pagination -->
		<nav aria-label="Page navigation example"> <!-- bootstrap 4 -->
			<ul class="pagination justify-content-center">
				<li class="page-item" :class="{'disabled': currentPage === 1}">
					<router-link class="page-link" :to="{ query: { pagina: currentPage - 1 }}">Previous</router-link>
				</li>
				<li class="page-item"
					v-for="(item, index) in cantidadPaginas" :key="index"
					:class="{'active':currentPage === index + 1}">
						<router-link class="page-link" :to="{ query: { pagina: index + 1 }}">{{ index + 1 }}</router-link>
				</li>
				<li class="page-item" :class="{'disabled': currentPage === cantidadPaginas}">
					<router-link class="page-link" :to="{ query: { pagina: currentPage + 1 }}">Next</router-link>
				</li>
			</ul>
		</nav>

		<hr>
		<b-button class="btn-block" v-on:click="testToken">Test Token</b-button>
		<h3>Store getters playground</h3>
		doneTodos --> {{doneTodos}}<br>
		$store.getters.doneTodosCount --> <strong>{{$store.getters.doneTodosCount}}</strong><br>
		$store.getters.doneTodosById(2) --> {{$store.getters.doneTodosById(2)}}
	</div>
</template>

<script>
	import { mapGetters, mapState } from 'vuex';

	export default {
		data() {
			return {
				totalNotas: 0,
				limit: 5,
				currentPage: 1,
				notas: [],
				dismissSecs: 5,
				dismissCountDown: 0,
				mensaje: {color: '', texto: ''},
				nota: {nombre: '', descripcion: ''},
				editar: false,
				notaEditar: {}
			}
		},
		watch: {
			"$route.query.pagina": {
				immediate: true,
				handler(pagina) {
					pagina = parseInt(pagina) || 1;
					this.paginacion(pagina);
					this.currentPage = pagina;
				}
			}
		},
		computed: {
			// ...mapState(['token']),
			...mapGetters(['token', 'doneTodos', 'usuarioDB']),
			cantidadPaginas() {
				return Math.ceil(this.totalNotas / this.limit);
			},
			headers() {
				return { headers : {
					'token': this.token
					} }
			}
		},
		// created() {
		// 	this.listarNotas();
		// },
		methods: {
			paginacion(pagina) { // getNotasByUserId
				let skip = (pagina - 1) * this.limit;
				this.axios
					.get(`/notas?skip=${skip}&limit=${this.limit}`, this.headers)
						.then(res => {
							this.notas = res.data.notaDb;
							this.totalNotas = res.data.totalNotas;
						})
						.catch(e => {
							console.log(e.response);
						})
			},
			alerta() {
				this.mensaje.color = 'danger';
				this.mensaje.texto = 'Probando alerta';
				this.showAlert();
			},
			// listarNotas() {
			// 	this.axios.get('/nota', this.headers)
			// 		.then(res => {
			// 			this.notas = res.data.notaDb;
			// 	})
			// 		.catch(e => {
			// 			console.log(e.response);
			// 	})
			// },
			agregarNota() {
				this.axios.post('/nueva-nota', this.nota, this.headers)
					.then(res => {
						this.notas.push(res.data);
						this.nota.nombre = '';
						this.nota.descripcion = '';
						this.mensaje.color = 'success';
						this.mensaje.texto = 'Nota Agregada!';
						this.showAlert()
					})
					.catch(e => {
						if(e.response.data.error.errors.nombre.message) {
							this.mensaje.texto = e.response.data.error.errors.nombre.message
						} else {
							this.mensaje.texto = 'Error de sistema';
						}
						this.mensaje.color = 'danger';
						this.showAlert()
					})
			},
			eliminarNota(id) {
				this.axios.delete(`/nota/${id}`, this.headers)
					.then(res => {
						const index = this.notas.findIndex(item => item._id === res.data._id);
						this.notas.splice(index, 1);
						this.mensaje.color = 'success';
						this.mensaje.texto = 'Nota Eliminada';
						this.showAlert();
					})
					.catch(e => {
						console.log(e.response);
					})
			},
			activarEdicion(id) {
				this.editar = true;
				this.axios.get(`/nota/${id}`)
					.then(res => {
						this.notaEditar = res.data;
					})
					.catch(e => {
						console.log(e.response);
					})
			},
			editarNota(item) {
			this.axios.put(`/nota/${item._id}`, item)
				.then(res => {
					const index = this.notas.findIndex(n => n._id === res.data._id);
					this.notas[index].nombre = res.data.nombre;
					this.notas[index].descripcion = res.data.descripcion;
					this.mensaje.color = 'success';
					this.mensaje.texto = 'Nota Editada';
					this.showAlert();
					this.editar = false;
				})
				.catch(e => {
					console.log(e.response);
				})
			},
			countDownChanged(dismissCountDown) {
				this.dismissCountDown = dismissCountDown
			},
			showAlert() {
				this.dismissCountDown = this.dismissSecs
			},
			testToken() {
				const user_id = this.usuarioDB.data._id;
				const user = {
					nombre: 'Leonardo Vidal',
					email: 'pepito@yahoo.com',
					pass: 'mznxmznx',
					activo: true
				}
				this.axios.put(`/usuario/${user_id}`, user, this.headers)
					.then(res => {
						console.log('res')
						console.log(res)
					})
					.catch(e => {
						console.log('error');
						console.log(e.response);
					})
			}
		}
	}
</script>