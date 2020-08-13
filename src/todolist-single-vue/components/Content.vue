<template>
  <div :class="$style.content">
    <div :class="$style.workshop">
      <TodoList/>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";

export default {
  components: { TodoList },
};
</script>

<style scoped module>
.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
}
.workshop {
  display: flex;
  flex-direction: column;
  width: 600px;
  flex-grow: 1;
}
</style>