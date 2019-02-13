<script>
import store from '../../store'
import Form from '../Forms/frm_classified.vue'

export default {
	props: ['id'],
	computed: {
		classified() {
			return store.getters.findClassifield(this.id)
		}
	},
	render(createElement) {
		return createElement(Form, {
			props: {
				title: 'Editar tarea',
				action: 'Actualizar tarea',
				classified: this.classified
			},
			on: {
				validateBeforeSubmit: (draft) => {
					store.dispatch('updateTask', { id: this.id, draft });
					this.$router.push({
						name: 'classifieds.details',
						params: {id: this.id}
					});
				}
			}
		});
	}
}
</script>





