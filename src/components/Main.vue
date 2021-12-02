<template>
  <div class="main">
    <h2 style="margin-left: 25px">Dashboard</h2>
    <p style="color: red; font-weight: bold; margin-left: 25px">
      Home / Dashboard <span style="color: gray">/ Data</span>
    </p>
    <div style="margin-left: 25px" class="row1">
      <div class="revenue verticalLine">
        <img class="images" src="../assets/arrow.png" alt="" />
        <img class="vertical" src="../assets/vertical.png" alt="" />
        <span class="count1 commonCount">{{ list[0].count }}</span>
        <img class="horizontal" src="../assets/horizontal.png" alt="" />
        <span class="name1 commonName">{{ list[0].name }}</span>
      </div>
      <div class="sales">
        <img class="images" src="../assets/cart.png" alt="" />
        <img class="vertical" src="../assets/vertical.png" alt="" />
        <span class="commonCount count2">{{ list[1].count }}</span>
        <img class="horizontal" src="../assets/horizontal.png" alt="" />
        <span class="commonName name2">{{ list[1].name }}</span>
      </div>
      <div class="products">
        <img class="images" src="../assets/chart.png" alt="" />
        <img class="vertical" src="../assets/vertical.png" alt="" />
        <span class="commonCount count3">{{ list[2].count }}</span>
        <img class="horizontal" src="../assets/horizontal.png" alt="" />
        <span class="commonName name3">{{ list[2].name }}</span>
      </div>
      <div class="visits">
        <img class="images" src="../assets/visitor.png" alt="" />
        <img class="vertical" src="../assets/vertical.png" alt="" />
        <span class="count4 commonCount">{{ list[3].count }}</span>
        <img class="horizontal" src="../assets/horizontal.png" alt="" />
        <span class="name4 commonName">{{ list[3].name }}</span>
      </div>
    </div>
    <div class="row2">
      <div class="graph">
        <p style="text-align:center;font-weight:bold">PROFIT</p><ProfitChart/>
        <p class="centerText profitamount">82%</p>
        </div>
      <div class="graph">
        <p style="text-align:center;font-weight:bold">NO. OF VISITS</p> <Visit/>
        <p class="centerText noOfVisit">53%</p>
        </div>
    </div>
    <div class="row3">
      <div class="graph">
        <p style="text-align:center;font-weight:bold">CUSTOMERS</p><Customer/>
        <p class="centerText customerAmount">84%</p></div>
      <div class="graph">
        <p style="text-align:center;font-weight:bold">SALES</p><Sales/>
        <p class="centerText salesAmount">55%</p></div>
    </div>
    <div class="usersGraph">
    <UserChart/>
    <p class="userText">Users</p>
    <p class="userAmountText">30</p>
    <p class="text">DONUT CHART EXAMPLE</p>
    </div>
  </div>
</template>

<script>
import UserChart from "./charts/userChart.vue"
import ProfitChart from "./charts/profit.vue"
import Visit from "./charts/visits.vue"
import Customer from "./charts/customer.vue"
import Sales from "./charts/sales.vue"

export default {
  components:{UserChart,ProfitChart,Visit,Customer,Sales},
  data() {
    return {
      list: [
        {
          name: "REVENUE",
          count: "84,198",
        },
        {
          name: "SALES",
          count: "36,540",
        },
        {
          name: "PRODUCTS",
          count: "24,225",
        },
        { name: "VISITS", count: "88,658" },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  position: relative;
  bottom: 593px;
  left: 280px;
  overflow: hidden;
  background-color: #dae0df;
}
.row1 {
  display: flex;
  gap: 65px;
  margin-top: 30px;
  align-items: flex-start;
  justify-content: flex-start;
}
.revenue {
  width: 213px;
  height: 123px;
  background-color: #eb4033;
}
.sales {
  width: 213px;
  height: 123px;
  background-color: #f59305;
}
.products {
  width: 213px;
  height: 123px;
  background-color: #2192ed;
}
.visits {
  width: 213px;
  height: 123px;
  background-color: #4aa94d;
}
.vertical {
  width: 2px;
  height: 123px;
  margin-left: 13px;
}
.horizontal {
  width: 131px;
  height: 2px;
  margin-bottom: 58px;
}
.commonCount {
  position: absolute;
  top: 99px;
  width: 300px;
  padding: 36px;
  color: #dae0df;
  font-size: 23px;
  font-weight: 700;
}
.commonName {
  position: absolute;
  width: 300px;
  padding: 36px;
  color: #dae0df;
  font-size: 20px;
  top: 162px;
}
.count1 {
  left: 102px;
}
.name1 {
  left: 89px;
}
.count2 {
  left: 379px;
}
.name2 {
  left: 382px;
}
.count3 {
  left: 653px;
}
.name3 {
  left: 640px;
}
.count4 {
  left: 930px;
}
.name4 {
  left: 932px;
}
.images {
  width: 48px;
  height: 51px;
  margin-left: 19px;
  margin-bottom: 33px;
}
.row2 {
  display: flex;
}
.row3 {
  display: flex;
}
.graph {
  width: 273px;
  height: 147px;
  background-color: white;
  margin-left: 27px;
  margin-top: 26px;
  margin-bottom: 5px;
}
.usersGraph {
  width: 440px;
  height: 323px;
  background-color: white;
  position: absolute;
  top: 265px;
  left: 631px;
}
.text{
  position: relative;
  bottom: 273px;
  margin-left: 11px;
  font-weight:bold
}
.centerText{
 position: relative;
 bottom: 142px;
 margin-left: 123px;
 font-weight: bold;
 font-size: 22px;
}
.profitamount{
  color: #2192ed;
}
.noOfVisit{
color: #eb4033;
}
.customerAmount{
  color: #2cad90;
}
.salesAmount{
color:#f59305
}
.userText{
position: relative;
bottom: 287px;
font-size: 45px;
font-weight: bold;
margin-left: 160px;
}
.userAmountText{
position: relative;
bottom: 331px;
font-size: 35px;
font-weight: bold;
margin-left: 198px;
}
</style>
