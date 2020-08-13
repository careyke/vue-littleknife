<template>
  <div :class="$style.todoFooter">
    <span :class="$style.left">{{undoNum}} items left</span>
    <div :class="$style.center">
      <span
        v-for="item in tabs"
        :key="item.value"
        :class="getTabClass(item.value)"
        @click="handleTabClick(item.value)"
      >{{item.label}}</span>
    </div>
    <span :class="$style.right">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    undoNum: Number,
  },
  data: function () {
    return {
      tabs: [
        { label: "All", value: 0 },
        { label: "Active", value: 1 },
        { label: "Completed", value: 2 },
      ],
      activeTab: 0,
    };
  },
  methods: {
    getTabClass: function (value) {
      return {
        [this.$style.tabItem]: true,
        [this.$style.activeTab]: this.activeTab === value,
      };
    },
    handleTabClick: function (value) {
      this.activeTab = value;
    },
  },
};
</script>

<style scoped module>
.todoFooter {
  display: flex;
  height: 40px;
}
.left {
  display: flex;
  padding: 0 8px;
  align-items: center;
}
.right {
  display: flex;
  padding: 0 8px;
  align-items: center;
  cursor: pointer;
}
.right:hover{
  color: rgba(175, 47, 47);
}
.center {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}
.tabItem {
  padding: 4px 8px;
  border: 1px solid transparent;
  margin: 0 8px;
  cursor: pointer;
}
.activeTab {
  border-color: rgba(175, 47, 47, 0.2);
}
</style>