<template>
  <div :class="$style.todolist">
    <div></div>
    <div></div>
    <TodoFooter v-bind:undoNum="todoNum"/>
  </div>
</template>

<script>
import TodoFooter from "./TodoFooter";

export default {
  components: { TodoFooter },
  data: function(){
    return {
      todos:[]
    }
  },
  computed:{
    todoNum:function(){
      return this.todos.length;
    }
  }
};
</script>

<style scoped module>
.todolist {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  margin: 16px 0;
}
</style>