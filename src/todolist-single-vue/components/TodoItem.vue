<template>
  <div :class="$style.item">
    <div :class="iconClass" />
    <div :class="textClass">{{text}}</div>
    <div :class="$style.close">
      <img src="../../images/close.png"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    id: Number,
    completed: Boolean,
  },
  computed: {
    iconClass: () => {
      return {
        [this.$style.itemIcon]: true,
        [this.$style.itemIconChecked]: props.completed,
      };
    },
    textClass: () => {
      return {
        [this.$style.itemText]: true,
        [this.$style.itemTextChecked]: props.completed,
      }
    },
  },
};
</script>

<style scoped module>
.item {
  display: flex;
  border-bottom: 1px solid #262626;
}
.itemIcon {
  display: flex;
  background-image: url("../../images/check.png");
  background-position: center center;
  width: 40px;
  cursor: pointer;
}
.itemIconChecked {
  background-image: url("../../images/checked.png");
}
.itemText {
  display: flex;
  align-items: center;
}
.itemTextChecked {
  text-decoration: line-through;
  color: #d9d9d9;
}
.close{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
}
.close > img{
  display: none;
}
.close:hover > img{
  display: inline-block
}
</style>