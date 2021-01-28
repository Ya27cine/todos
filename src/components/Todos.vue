<template class="hello">

<div class="container">
      <h1>List of Todos</h1>
      <form class="block">
        <div class="form-group">
            <input v-model="title" class="form-control" type="text" name="" placeholder="New todo ..">
        </div>
        <button @click="addTodo"  class="btn btn-block btn-success mb-2">Add Todo</button>
      </form>
      <ul class="list-group" >
        <li class="list-group-item" v-bind:key="todo.id" v-for="todo in todos">
           <Todo v-bind:todo="todo" @deleteTodo="delelteOneTodo"  @updateTodo="editTodo"/>    
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
        title: '',
        myTodo: null,
        todos: [ ]
      }
    },
    methods: {
        addTodo(e){
          e.preventDefault();
          if( this.title != ''){
             let newTodo = {title: this.title, completed: false}
             axios.post('http://localhost:3000/todos', newTodo)
                  .then(res => {
                        this.todos = [res.data, ...this.todos];
                        this.title = '';
                  })
          }
        },
        getTodos(){
           axios.get("http://localhost:3000/todos")
           .then(res => this.todos = res.data)
           .catch(err => console.log(err))
        },
        delelteOneTodo(id){
          axios.delete('http://localhost:3000/todos/'+id)
           .then(  () => this.todos =  this.todos.filter( i => i.id !== id )  )
           .catch(err => console.log(err))
        },
        editTodo(todo){
          this.myTodo = todo;
          this.title = this.myTodo.title;
         
        }
    },
    created(){
      this.getTodos();
    }
}
</script>

<style>

</style>