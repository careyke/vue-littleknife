import classes from './TodoList.css';
import closeImg from '../../images/close.png';

export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    completeTodo: Function,
    deleteTodo: Function
  },
  computed: {
    iconClass() {
      return {
        [classes.itemIcon]: true,
        [classes.itemIconChecked]: this.todo.completed,
      }
    },
    textClass() {
      return {
        [classes.itemText]: true,
        [classes.itemTextChecked]: this.todo.completed,
      }
    }
  },
  methods: {
    handleComplete() {
      this.completeTodo(this.todo);
    },
    handleDeleteTodo() {
      this.deleteTodo(this.todo.id);
    }
  },
  render() {
    const { iconClass, textClass, handleComplete, handleDeleteTodo, todo } = this;
    return (
      <div class={classes.item}>
        <div class={iconClass} onClick={handleComplete} />
        <div class={textClass}>{todo.text}</div>
        <div class={classes.close}>
          <img src={closeImg} onClick={handleDeleteTodo} />
        </div>
      </div>
    );
  }
}