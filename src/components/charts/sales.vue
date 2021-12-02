<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart
        direction="circular"
        :size="{ width, height: 150 }"
        :data="data"
        :margin="{
         bottom:35,
           left:50
        }"
        :axis="axis"
        :config="{ controlHover: false }"
        >
        <template #layers>
          <Pie
            :dataKeys="['name', 'pl']"
            :pie-style="{ innerRadius: 45, padAngle: 0,colors:['#f59305','#e1e0e0'] }" />
        </template>
        <template #widgets>
          <Tooltip
            :config="{
              name: { },
              avg: { hide: true},
              pl: { label: 'value' },
              inc: { hide: true }
            }"
            :color=" {
              backgoundColor:red,
    }"
            hideLine
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script>
import {  ref } from 'vue'
import { Chart, Responsive, Pie, Tooltip } from 'vue3-charts'
import { sales } from '../Data/sales'
export default {
  components: { Chart, Responsive, Pie, Tooltip },
  setup() {
    const data = ref(sales)
    return { data }
  }
};
</script>