<template>
  <div :class="$style.item">
    <div :class="iconClass" @click="handleComplete" />
    <div :class="textClass">{{todo.text}}</div>
    <div :class="$style.close">
      <img :src="closeImg" @click="handleDelete" />
    </div>
  </div>
</template>

<script>
import closeImg from "../../images/close.png";

export default {
  // props: {
  //   // text: String,
  //   // id: Number,
  //   // completed: Boolean,
  //   todo
  // },
  props: ["todo"],
  data: function () {
    return {
      closeImg: closeImg,
    };
  },
  computed: {
    iconClass: function () {
      // 不能使用箭头函数，感觉是运行时给函数绑定了this 但是箭头函数式不生效的
      return {
        [this.$style.itemIcon]: true,
        [this.$style.itemIconChecked]: this.todo.completed,
      };
    },
    textClass: function () {
      return {
        [this.$style.itemText]: true,
        [this.$style.itemTextChecked]: this.todo.completed,
      };
    },
  },
  methods: {
    handleComplete: function () {
      this.$emit("complete-todo", this.todo);
    },
    handleDelete: function () {
      this.$emit("delete-todo", this.todo.id);
    },
  },
};
</script>

<style scoped module>
.item {
  display: flex;
  border-bottom: 1px solid #afafaf;
  height: 50px;
}
.item:hover img {
  display: inline-block !important;
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
.itemIconChecked {
  background-image: url("../../images/checked.png");
}
.itemText {
  display: flex;
  align-items: center;
  font-size: 16px;
  flex-grow: 1;
}
.itemTextChecked {
  text-decoration: line-through;
  color: #d9d9d9;
}
.close {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  cursor: pointer;
  flex-shrink: 0;
}
.close > img {
  display: none;
}
</style>