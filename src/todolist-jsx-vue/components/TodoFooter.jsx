import classes from './TodoList.css';

export default {
  name: 'TodoFooter',
  props: {
    undoNum: Number,
    showClear: Boolean,
    activeTab: Number,
    clearCompletedTodos: Function,
    switchTab: Function
  },
  data() {
    return {
      tabs: [
        { label: "All", value: 0 },
        { label: "Active", value: 1 },
        { label: "Completed", value: 2 },
      ],
    }
  },
  methods: {
    getTabClass: function (value) {
      return {
        [classes.tabItem]: true,
        [classes.activeTab]: this.activeTab === value,
      };
    },
    handleTabClick: function (value) {
      this.switchTab(value);
    },
    handleClear: function () {
      this.clearCompletedTodos();
    },
  },
  computed: {
    clearBtnClass: function () {
      return {
        [classes.right]: true,
        [classes.rightActive]: this.showClear,
      };
    },
  },
  render() {
    const { clearBtnClass, undoNum, getTabClass, handleTabClick, handleClear, tabs } = this;
    return (
      <div class={classes.todoFooter}>
        <span class={classes.left}>{`${undoNum} items left`}</span>
        <div class={classes.center}>
          {
            tabs.map((tab) => {
              return (
                <span key={tab.value}
                  class={getTabClass(tab.value)}
                  onClick={() => handleTabClick(tab.value)}
                >{tab.label}</span>
              );
            })
          }
        </div>
        <span class={clearBtnClass} onClick={handleClear}> Clear Completed</span >
      </div >
    );
  }
}