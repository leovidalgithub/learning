

const lista = document.getElementById('lista');

Sortable.create(lista, {
	animation: 560,
	chosenClass: 'seleccionado',
	ghostClass: 'fantasma',
	dragClass: 'drag',

	onEnd: () => {
		console.debug('element inserted')
	},

	group: 'lista-personas',
	store: {
		// guardamos el orden de la lista
		set: sortable => {
			const orden = sortable.toArray();
			console.debug(orden.join('|'));
			sessionStorage.setItem(sortable.options.group.name, orden.join(','));
		},
		// obtener el order de la lista
		get: sortable => {
			const orden = sessionStorage.getItem(sortable.options.group.name);
			return orden ? orden.split(',') : [];
		}
	}
})