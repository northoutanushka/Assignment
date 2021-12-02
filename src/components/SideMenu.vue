<template>
  <nav class="nav-sidebar font-D-DIN" id="nav-sidebar">
    <ul>
      <li>
         <i>
         <img src="../assets/dashboardnew.png" />
         </i>
        <router-link
          style="text-decoration: none; color: white; height: "
          to="/"
          class-active="active"
        >
          Dashboard
        </router-link>
      </li>
      <li>
         <i>
         <img src="../assets/ui.jpg" />
         </i>
        <router-link
          style="text-decoration: none; color: white"
          to="/tabs"
          class-active="active"
        >
          UI Elements
        </router-link>
      </li>
      <li>
          <i>
         <img src="../assets/charticon.png" />
         </i>
        <router-link
          style="text-decoration: none; color: white"
          to="/tabs"
          class-active="active"
        >
          Charts</router-link
        >
      </li>
      <li>
          <i>
         <img src="../assets/tabs.png" />
         </i>
        <router-link
          style="text-decoration: none; color: white"
          to="/tabs"
          class-active="active"
        >
          Tabs & Panels</router-link
        >
      </li>
      <li>
          <i>
         <img src="../assets/responsive.png" />
         </i>
        <router-link
          style="text-decoration: none; color: white"
          to="/tabs"
          class-active="active"
        >
          Responsive Tables</router-link
        >
      </li>
      <li>
          <i>
         <img src="../assets/form.png" />
         </i>
        <router-link
          style="text-decoration: none; color: white"
          to="/tabs"
          class-active="active"
        >
          Forms</router-link
        >
      </li>
      <li>
         <i>
         <img src="../assets/multileveldropdown.png" />
         </i>
        <router-link
          style="text-decoration: none; color: white"
          to="/tabs"
          class-active="active"
        >
          Multi Level Dropdown</router-link
        >
      </li>
      <li>
          <i>
         <img src="../assets/emptypage.png" />
         </i>
        <router-link
          style="text-decoration: none; color: white"
          to="/tabs"
          class-active="active"
        >
          Empty Pages</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-sidebar {
  width: 280px;
  height: 593px;
  background-color: hsla(221, 26%, 17%, 1);
  border-bottom-left-radius: 30px;
  overflow: hidden;
  bottom: 0;
}

.nav-sidebar > ul {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 18px;
  list-style-image: none;
}
.nav-sidebar > ul li {
  width: 100%;
  cursor: pointer;
  position: relative;
  color: white;
  margin: left 13px;
  margin-bottom: 27px;
  list-style-type:none;
  height: 27px;
}
.nav-sidebar > ul li:before {
  content: "";
  display: inline-block;
  height: 11px;
  width: 25px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: -16px;
  margin-right: 13px;
  text-decoration: none;
  
}
img{
  width: 22px;
  height: 25px;
  margin-right: 19px;
  margin-bottom: -5px;
  margin-left: -17px;
}
.nav-sidebar > ul li:hover {
  background-color: rgb(53, 63, 85);
}
</style>
