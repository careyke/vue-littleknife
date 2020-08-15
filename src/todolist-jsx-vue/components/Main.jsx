import classes from './Main.css';
import TodoList from './TodoList';

export default {
  name: 'Main',
  render() {
    return (
      <div id="app">
        <div class={classes.headerContainer}>
          <span class={classes.headerTitle}>todos</span>
        </div>
        <div class={classes.content}>
          <div class={classes.workshop}>
            <TodoList/>
          </div>
        </div>
        <div class={classes.footer}>
          <span class={classes.footerItem}>Written by Herman Ke</span>
          <span class={classes.footerItem}>Part of TodoMVC</span>
        </div>
      </div>
    )
  }
}