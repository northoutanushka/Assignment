<template>
  <div class="top">
    <div class="target">
      <img class="targetpng" src="../assets/target.jpg" alt="" />
      <span class="targetname">target</span>
    </div>
    <div>
      <img
        class="menu"
        src="../assets/hamburgerIcon.png"
        alt=""
      />
      <img class="mail" src="../assets/mail.png" alt="" />
      <img class="dropdown" src="../assets/dropdown.png" alt="" />
      <img class="notification" src="../assets/notification.png" alt="" />
      <img class="dropdown" src="../assets/dropdown.png" alt="" />
      <img class="person" src="../assets/person.png" alt="" />
      <span>{{ name }}</span>
      <img class="dropdown" src="../assets/dropdown.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Anushka Mishra",
    };
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 46px;
  background-color: #f5f5f5;
  display: flex;
}
.target {
  width: 280px;
  height: 46px;
  background-color: red;
  border-top-left-radius: 30px;
}
span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  margin-bottom: 15px;
  padding-left: 9px;
}

.mail {
  width: 20px;
  height: 20px;
  margin-left: 710px;
  margin-bottom: 1px;
}
.menu {
  width: 33px;
  height: 20px;
  margin-left: 18px;
  margin-bottom: 1px;
}
.dropdown {
  width: 20px;
  height: 20px;
  margin-left: 2px;
  margin-bottom: 1px;
}
.notification {
  width: 20px;
  height: 20px;
  margin-left: 35px;
  margin-bottom: 1px;
}
.person {
  width: 20px;
  height: 20px;
  margin-bottom: 32px;
  vertical-align: middle;
  margin-left: 35px;
  margin-top: 9px;
}
.targetpng {
  width: 73px;
  height: 40px;
  margin-left: 20px;
  margin-top: 3px;
}
.targetname {
  color: white;
  margin-bottom: 13%;
  font-size: 20px;
}
</style>
