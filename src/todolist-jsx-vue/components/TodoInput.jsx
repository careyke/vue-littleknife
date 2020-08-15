import classes from './TodoList.css';

export default {
  name: 'TodoInput',
  props: {
    allCompleted: Boolean,
    todoCount: Number,
    addTodo: Function,
    toggleAllCompleteTodo: Function
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    allCompletedClass: function () {
      // 不需要使用classnames转化 直接可以解析对象
      return {
        [classes.itemIcon]: true,
        [classes.itemIconChecked]: this.allCompleted,
        [classes.itemIconHide]: this.todoCount === 0
      }
    }
  },
  methods: {
    handleInputKeyDown(e) {
      if (e.keyCode !== 13) return;
      if (this.text) {
        this.addTodo(this.text);
        this.text = "";
      }
    },
    handleToggle() {
      this.toggleAllCompleteTodo(!this.allCompleted)
    },
    handleInput(e) {
      this.text = e.target.value;
    }
  },
  render() {
    const { allCompletedClass, handleToggle, handleInputKeyDown, handleInput, text } = this;
    return (
      <div class={classes.todoHeader}>
        <div class={allCompletedClass} onClick={handleToggle} />
        <div class={classes.todoInput}>
          <input
            class={classes.input}
            placeholder="What need to be done?"
            onKeydown={handleInputKeyDown} // 和react不一样 这个不是onKeyDown
            onInput={handleInput}
            value={text}
          />
        </div>
      </div>
    );
  }
}