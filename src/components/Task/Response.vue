<template>
<div v-if="task">
		<h2></h2>
		<p></p>
		<div class="well">
			<button @click="toggleTask" class="btn" :class="task.pending ? 'btn-default' : 'btn-primary'">
				<app-icon img="ok"></app-icon> Completar
			</button>
			<button @click="editTask" class="btn btn-default">
				<app-icon img="edit"></app-icon> Editar
			</button>
			<button @click="commentTask" class="btn btn-default">
				<app-icon img="thumbs-up"></app-icon> Comentar
			</button>
			<button @click="deleteTask" class="btn btn-default">
				<app-icon img="trash"></app-icon> Eliminar
			</button>
		</div>
	</div>
    
</template>