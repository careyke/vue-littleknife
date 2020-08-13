<template>
  <div :class="$style.footer">
    <span :class="$style.footerItem">Written by Herman Ke</span>
    <span :class="$style.footerItem">Part of TodoMVC</span>
  </div>
</template>

<style scoped module>
.footer {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #cccccc;
}
.footerItem {
  padding: 8px 0;
}
</style>