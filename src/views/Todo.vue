<template>
<div>
               <div class="form-check">
                  <input type="checkbox" class="form-check-input" v-model="todo.completed" @click="isOneCompleted">
                  <label :class="{
                                    'is-completed': todo.completed
                                 }">
                                 {{ todo.title}}
                  </label>
            </div>
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
    },
    isOneCompleted(){
      // console.log(this.todo.id+" is : "+this.todo.completed)
       this.$emit('isCompleted', this.todo)
    }
 }
}
</script>

<style>
.is-completed{
   text-decoration: line-through;
}
</style>