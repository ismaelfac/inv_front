<template>
    <div v-if="task" class="media">
        <a class="media-left" href="#">
            <img src="/src/assets/website/images/avatar/3.jpg" alt="">
        </a>
        <div class="media-body">
            <h6 class="media-heading">{{ task.title }}</h6>
            <p><span>{{ task.description }}</span></p>
            <div class="well">
				<div class="btn-group" role="group">
			<button @click="toggleTask" class="btn" :class="task.pending ? 'btn-default' : 'btn-primary'">
				<app-icon :img="task.pending ? 'unchecked' : 'check'"></app-icon><span v-text="task.pending ? 'Marcar' : 'Desmarcar'"></span>
			</button>
			<button @click="editTask" class="btn btn-default">
				<app-icon img="edit"></app-icon> Editar
			</button>
			<button @click="commentTask" class="btn" :class="!commentOn ? 'btn-default' : 'btn-danger'">
				<app-icon :img="!commentOn ? 'thumbs-up' : 'remove-sign'"></app-icon><span v-text="!commentOn ? 'Comentar' : 'Cancelar'"></span>
			</button>
			<button @click="viewTask" class="btn dropdown-toggle" :class="!viewTasks ? 'btn-default' : 'btn-primary'">
				<app-icon :img="!viewTasks ? 'eye-open' : 'eye-close'"></app-icon><span v-text="!viewTasks ? 'Ver Comentarios' : 'Ocultar Comentarios'"></span>
			</button>
			<button @click="deleteTask" class="btn btn-default">
				<app-icon img="trash"></app-icon> Eliminar
			</button>
			</div>
			<div class="well" v-if="commentOn">
				<div class="row">
					<div class="col-xs-12">
						<div class="input-group">
							<textarea name="comment_response_draft" v-model="comment_response_draft" cols="50" rows="2" style="text-align: justify"></textarea>
							<span class="input-group-btn">
								<button class="btn btn-success" @click="send_comment_response_draft" type="button">Enviar</button>
							</span>
						</div><!-- /input-group -->
					</div>
				</div>
			</div><!-- /.col-lg-6 -->
		</div>
            <!-- media -->
		<div v-if="viewTasks">
            <div class="media">
                <a class="media-left" href="#">
                    <img src="/src/assets/website/images/avatar/1.jpg" alt="">
                </a>
                <div class="media-body">
                    <h6 class="media-heading"><a href="#">Lionel Messi</a></h6>
                    <p><span>10 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                    <a href="#">Reply</a>
                </div>
            </div>
            <!-- media -->
            <div class="media">
                <a class="media-left" href="#">
                    <img src="/src/assets/website/images/avatar/2.jpg" alt="">
                </a>
                <div class="media-body">
                    <h6 class="media-heading"><a href="#">Lionel Messi</a></h6>
                    <p><span>10 hour ago</span>There are some business lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu tempor inc ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt </p>
                    <a href="#">Reply</a>
                </div>
            </div>
		</div>
        </div>
    </div>
</template>
<script>
import store from '../../store';
import Icon from '../../views/Icon.vue'
export default {
    name:'post_details',
	components:{
        'app-icon': Icon
   	},
    props:[
        {type:Array, required:true}
    ]
}
</script>