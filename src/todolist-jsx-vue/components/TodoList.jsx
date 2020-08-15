import classes from './TodoList.css';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';

let id = 1;

export default {
  name: 'TodoList',
  components: { TodoInput },
  data() {
    return {
      todos: [],
      activeTab: 0,
    }
  },
  computed: {
    undoNum: function () {
      return this.todos.reduce((total, todo) => {
        if (todo.completed) return total;
        return total + 1;
      }, 0);
    },
    todoCount: function () {
      return this.todos.length;
    },
    showClear: function () {
      return this.undoNum < this.todos.length;
    },
    allCompleted: function () {
      return this.todos.length > 0 && this.undoNum === 0;
    },
    pickTodos: function () {
      switch (this.activeTab) {
        case 1:
          return this.todos.filter((todo) => {
            return todo.completed === false;
          });
        case 2:
          return this.todos.filter((todo) => {
            return todo.completed === true;
          });
        default:
          return this.todos;
      }
    },
  },
  methods: {
    addTodo: function (text) {
      this.todos.push({ id: id++, text: text, completed: false });
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    toggleCompleteTodo: function (todo) {
      todo.completed = !todo.completed;
    },
    toggleAllCompleteTodo: function (completed) {
      this.todos.forEach((todo) => {
        todo.completed = completed;
      });
    },
    clearCompletedTodos: function () {
      this.todos = this.todos.filter((todo) => {
        return todo.completed === false;
      });
    },
    switchTab: function (tab) {
      this.activeTab = tab;
    },
  },
  render() {
    return (
      <div class={classes.todolist}>
        <TodoInput
          allCompleted={this.allCompleted}
          todoCount={this.todoCount}
          addTodo={this.addTodo}
          toggleAllCompleteTodo={this.toggleAllCompleteTodo}
        />
        <div class={classes.list}>
          {this.pickTodos.map((todo) => {
            return <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={this.toggleCompleteTodo}
              deleteTodo={this.deleteTodo}
            />
          })}
        </div>
        <TodoFooter
          undoNum={this.undoNum}
          showClear={this.showClear}
          activeTab={this.activeTab}
          switchTab={this.switchTab}
          clearCompletedTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}