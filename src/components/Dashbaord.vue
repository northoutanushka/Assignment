<template>
  <TopMenu />
  <SideMenu />
  <Main />
</template>

<script>
import TopMenu from "../components/TopMenu.vue";
import SideMenu from "../components/SideMenu.vue";
import Main from "../components/Main.vue";

export default {
  components: {
    TopMenu,
    SideMenu,
    Main,
  },
};
</script>

<style></style>
