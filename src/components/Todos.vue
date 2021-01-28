<template class="hello">

<div class="container">
      <h1>List of Todos</h1>
      <ul class="list-group" >
        <li class="list-group-item" v-bind:key="todo.id" v-for="todo in todos">
           <Todo v-bind:todo="todo" />
            
        </li>
      </ul>
</div>
 
</template>

<script>
import axios from 'axios';
import Todo from "../views/Todo";
export default {
    name: "Todos",
    components: {
        Todo
    },
    data(){
      return {
        todos: [ ]
      }
    },
    methods: {
        getTodos(){
           axios.get("http://localhost:3000/todos")
           .then(res => this.todos = res.data)
           .catch(err => console.log(err))
        }
    },
    created(){
      this.getTodos();
    }
}
</script>

<style>

</style>