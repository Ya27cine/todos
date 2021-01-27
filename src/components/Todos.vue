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
import Todo from "../views/Todo";
export default {
    name: "Todos",
    components: {
        Todo
    },
    data(){
      return {
        todos: [
          {
            id: 0,
            title: "Learn NodeJs",
            completed: false
          },
          {
            id: 1,
            title: "Learn Spring boot",
            completed: true
          }
        ]
      }
    }
}
</script>

<style>

</style>