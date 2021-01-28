<template>
<div>
        <h2 :class="{
                     'is-completed': todo.completed
                  }">
                  {{ todo.title}}
         </h2>
           <div class="text-right">
            <button @click="updateMyTodo" class="btn btn-info btn-sm mr-1">
               Edit</button>
            <button @click="deletTodo"   class="btn btn-danger btn-sm">
               Delete</button>
           </div>
</div>
  
</template>

<script>
export default {
 props: ['todo'],
 methods: {
    deletTodo(){
       this.$emit('deleteTodo', this.todo.id)
    },
    updateMyTodo(){
       this.$emit('updateTodo', this.todo)
    }
 }
}
</script>

<style>
.is-completed{
   text-decoration: line-through;
}
</style>