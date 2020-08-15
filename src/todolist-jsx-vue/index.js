import Vue from 'vue';

import Main from './components/Main';

new Vue({
  render() { // vue自动注入h(即 createElement方法)
    return <Main />
  }
}).$mount('#app');

