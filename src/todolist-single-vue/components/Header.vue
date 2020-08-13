<template>
  <div :class="$style.headerContainer">
    <span :class="$style.headerTitle">todos</span>
  </div>
</template>

<style scoped module> /** module形式的css 会挂在当前节点对象的data中，key是$style */
  .headerContainer{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }
  .headerTitle{
    font-size: 50px;
    color: rgba(175, 47, 47, 0.15);
  }
</style>