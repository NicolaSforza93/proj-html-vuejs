<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
</style>
