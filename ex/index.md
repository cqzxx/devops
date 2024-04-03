---
layout: page
footer: false
head:
  - - link
    - rel: stylesheet
      href: /static/css/exercise.css
# head:
#   - - script
#     - src: https://cdn.jsdelivr.net/npm/echarts-wordcloud@2.1.0/dist/echarts-wordcloud.min.js
---

<div class="ex-content">
  <v-chart class="chart" :option="option" autoresize />
</div>

<script setup>
import { data as posts } from '../ex/index.data.js'
import * as echarts from 'echarts';
// import VChart from 'vue-echarts';
import { ref } from 'vue';

import { defineClientComponent } from 'vitepress'
const VChart = defineClientComponent(() => {
  return import('vue-echarts')
})

function getData() {
  let dataObject = {}
  let dataArray = []
  for (let post of posts) {
    if (post.url == '/ex/') {
      continue
    }
    for (let tag of post.frontmatter.tags) {
      if (! (tag in dataObject)) {
        dataObject[tag] = 0
      }
      dataObject[tag] += 1
    }
  }
  for (let key in dataObject) {
    dataArray.push({
      name: key,
      value: dataObject[key],
    })
  }
  console.log(dataArray)
  return dataArray
}

const option = ref({
  series: [
    {
      type: 'treemap',
      data: getData()
    }
  ]
});

</script>

<style scoped>
.chart {
  width: 70vw;
  /*height: calc(100vh - 200px);*/
  height: 80vh;
  margin-top: -10vh;
}
@media (width > 800px) and (height > 500px) {
.chart {
  width: 800px;
  height: 500px;
  margin-top: -5vh;
}
}
</style>
