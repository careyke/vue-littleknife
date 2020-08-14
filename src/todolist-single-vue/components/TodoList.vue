<template>
  <div :class="$style.todolist">
    <TodoInput
      :allCompleted="allCompleted"
      :todoCount="todoCount"
      @add-todo="addTodo"
      @toggle-all-todos="toggleAllCompleteTodo"
    />
    <div :class="$style.list">
      <TodoItem
        v-for="todo in pickTodos"
        :key="todo.id"
        :todo="todo"
        @complete-todo="toggleCompleteTodo"
        @delete-todo="deleteTode"
      />
    </div>
    <TodoFooter
      :undoNum="undoNum"
      :showClear="showClear"
      :activeTab="activeTab"
      @switch-tab="switchTab"
      @clear-completed-todos="clearCompletedTodos"
    />
  </div>
</template>

<script>
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

let id = 1;

export default {
  components: { TodoFooter, TodoItem, TodoInput },
  data: function () {
    return {
      todos: [],
      activeTab: 0,
    };
  },
  computed: {
    undoNum: function () {
      return this.todos.reduce((total, todo) => {
        if (todo.completed) return total;
        return total + 1;
      }, 0);
    },
    todoCount: function(){
      return this.todos.length;
    },
    showClear: function () {
      return this.undoNum < this.todos.length;
    },
    allCompleted: function () {
      return this.todos.length > 0 && this.undoNum === 0;
    },
    pickTodos: function () {
      switch (this.activeTab) {
        case 1:
          return this.todos.filter((todo) => {
            return todo.completed === false;
          });
        case 2:
          return this.todos.filter((todo) => {
            return todo.completed === true;
          });
        default:
          return this.todos;
      }
    },
  },
  methods: {
    addTodo: function (text) {
      this.todos.push({ id: id++, text: text, completed: false });
    },
    deleteTode: function (id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    toggleCompleteTodo: function (todo) {
      // this.todos = this.todos.map((todo) => {
      //   if (todo.id === id) {
      //     return { ...todo, completed: !todo.completed };
      //   }
      //   return todo;
      // });
      todo.completed = !todo.completed;
    },
    toggleAllCompleteTodo: function (completed) {
      // this.todos = this.todos.map((todo) => {
      //   return { ...todo, completed:!this.allCompleted };
      // });
      this.todos.forEach((todo)=>{
        todo.completed = completed;
      });
    },
    clearCompletedTodos: function () {
      this.todos = this.todos.filter((todo) => {
        return todo.completed === false;
      });
    },
    switchTab: function (tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped module>
.todolist {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: 16px 0;
  background-color: #ffffff;
}
.list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>