<template>
  <div :class="$style.todoHeader">
    <div :class="allCompletedClass" @click="handleToggle" />
    <div :class="$style.todoInput">
      <input
        :class="$style.input"
        v-model="text"
        @keydown.enter="handleInputKeyDown"
        placeholder="What need to be done?"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allCompleted: Boolean,
    todoCount: Number,
  },
  data: function () {
    return {
      text: "",
    };
  },
  computed: {
    allCompletedClass: function () {
      return {
        [this.$style.itemIcon]: true,
        [this.$style.itemIconChecked]: this.allCompleted,
        [this.$style.itemIconHide]: this.todoCount === 0
      };
    },
  },
  methods: {
    handleInputKeyDown: function () {
      if (this.text) {
        this.$emit("add-todo", this.text);
        this.text = "";
      }
    },
    handleToggle: function () {
      this.$emit("toggle-all-todos");
    },
  },
};
</script>

<style scoped module>
.todoHeader {
  display: flex;
  height: 50px;
  flex-shrink: 0;
  border-bottom: 1px solid #afafaf;
}
.itemIcon {
  display: flex;
  background-image: url("../../images/check.png");
  background-position: center center;
  background-repeat: no-repeat;
  width: 50px;
  cursor: pointer;
  flex-shrink: 0;
}
.itemIconHide{
  background-image: none;
}
.itemIconChecked {
  background-image: url("../../images/checked.png");
}
.todoInput {
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.input {
  flex-grow: 1;
  height: 40px;
  font-size: 16px;
}
</style>