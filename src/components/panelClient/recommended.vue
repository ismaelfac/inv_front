<template>
    <div>
       <ul class="list-group">
           <li class="list-group-item"><a href="">recommended</a></li>
           <li class="list-group-item"><a href="">recommended</a></li>
           <li class="list-group-item"><a href="">recommended</a></li>
           <li class="list-group-item"><a href="">recommended</a></li>
           <li class="list-group-item"><a href="">recommended</a></li>
           <li class="list-group-item"><a href="">recommended</a></li>
       </ul>
    </div>
</template>
<script>
import store from '../../store'
export default {
    name: 'Recommended',
    computed: {
        ads: () => store.state.tasks
    }
}
</script>