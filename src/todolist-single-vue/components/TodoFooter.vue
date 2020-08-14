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
    <span :class="clearBtnClass" @click="handleClear">Clear Completed</span>
  </div>
</template>

<script>
export default {
  props: {
    undoNum: Number,
    showClear: Boolean,
    activeTab: Number,
  },
  data: function () {
    return {
      tabs: [
        { label: "All", value: 0 },
        { label: "Active", value: 1 },
        { label: "Completed", value: 2 },
      ],
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
      this.$emit("switch-tab", value);
    },
    handleClear: function () {
      this.$emit('clear-completed-todos');
    },
  },
  computed: {
    clearBtnClass: function () {
      return {
        [this.$style.right]: true,
        [this.$style.rightActive]: this.showClear,
      };
    },
  },
};
</script>

<style scoped module>
.todoFooter {
  display: flex;
  height: 50px;
  position: relative;
  border-top: 1px solid #afafaf;
  position: relative;
}
.todoFooter::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  pointer-events: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.left {
  display: flex;
  padding: 0 8px;
  align-items: center;
  flex-shrink: 0;
}
.right {
  display: none;
  padding: 0 8px;
  align-items: center;
  cursor: pointer;
  width: 120px;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
.rightActive {
  display: flex;
}
.right:hover {
  color: rgba(175, 47, 47);
}
.center {
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  margin-right: 120px;
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