<template>
	<div id="app">
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/notas">Notas</router-link>
		</div> -->
		<b-navbar toggleable="md" type="dark" variant="info">
			<b-navbar-brand href="#">NavBar</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="/login" v-if="!estaActivo">Login</b-nav-item>
					<b-nav-item to="/notas" v-if="estaActivo">Notas</b-nav-item>
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-form>
						<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
						<b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
					</b-nav-form>

					<b-nav-item-dropdown right v-if="estaActivo">
						<!-- Using 'button-content' slot -->
						<template v-slot:button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item @click="cerrarSesion()">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		<hr>
		<router-view/>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	export default {
		methods: {
			...mapActions(['cerrarSesion', 'leerToken'])
		},
		computed: {
			...mapGetters(['estaActivo'])
		},
		created() {
			this.leerToken();
		}
	}
</script>

<style>
	#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background: #666;
}
	#nav {
	padding: 30px;
	}

	#nav a {
	font-weight: bold;
	color: #2c3e50;
	}

	#nav a.router-link-exact-active {
	color: #42b983;
	}
</style>
