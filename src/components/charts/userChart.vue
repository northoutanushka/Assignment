<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart
        direction="circular"
        :size="{ width, height: 350 }"
        :data="data"
        :margin="{
          left: Math.round((width - 360)/2),
          top: 20,
          right:Math.round((width - 360)/2),
          bottom: 40
        }"
        :axis="axis"
        :config="{ controlHover: false }"
        >
        <template #layers>
          <Pie
            :dataKeys="['name', 'pl']"
            :pie-style="{ innerRadius: 100, padAngle: 0,colors:['#e55f5d','#9f9f9f','#404b62'] }" />
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
import { plByMonth } from '../Data/userData'
export default {
  components: { Chart, Responsive, Pie, Tooltip },
  setup() {
    const data = ref(plByMonth)
    return { data }
  }
};
</script>