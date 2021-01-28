<template>
<div>
        <h2 :class="{
                     'is-completed': todo.completed
                  }">
                  {{ todo.title}}
         </h2>
           <div class="text-right">
            <button class="btn btn-info btn-sm mr-1">Edit</button>
              <button @click="deleteTodo(todo.id)" class="btn btn-danger btn-sm">Delete</button>
           </div>
</div>
  
</template>

<script>
export default {
 props: ['todo'],
 methods: {
    deleteTodo(id){
       this.$emit('deleteTodo', id)
    }
 }
}
</script>

<style>
.is-completed{
   text-decoration: line-through;
}
</style>