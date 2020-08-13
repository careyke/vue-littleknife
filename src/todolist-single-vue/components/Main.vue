<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Content from "./Content";
import Footer from './Footer';

export default {
  components: { Header, Content, Footer },
};
</script>
