<template class="hello">

<div class="container">
      <h1>List of Todos</h1>
        <div class="form-group">
            <input v-model="title" class="form-control" type="text" name="" placeholder="New todo ..">
        </div>
        <button v-if="myTodo"  @click="updatTodo"  class="btn btn-block btn-danger mb-2">Update Todo</button>
        <button v-else @click="addTodo"  class="btn btn-block btn-success mb-2">Add Todo</button>
      
      <ul class="list-group" >
        <li class="list-group-item" v-bind:key="todo.id" v-for="todo in todos">
           <Todo v-bind:todo="todo"
                   @deleteTodo="delelteOneTodo"  
                   @updateTodo="editTodo" 

                   @isCompleted="checkTodo"  />    
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
      checkTodo(cTodo){
        let todo = {
              ...cTodo,
              completed: !cTodo.completed
          }
          axios.put('http://localhost:3000/todos/'+todo.id, todo)
                  .then((res) => { console.log(res)});
        },
        updatTodo(){
          let todo = {
              ...this.myTodo,
              title: this.title,
              completed: false
          }
           axios.put('http://localhost:3000/todos/'+todo.id, todo)
                  .then((res) => {
                       this.todos = this.todos.map( t => {
                            if( res.data.id === t.id)
                                return res.data;
                            return t;
                       });
                       this.myTodo = null;
                       this.title= '';
                  });
        },
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
          console.log("hjfjhfg")
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