---
layout: page
footer: false
---

<v-chart class="chart" :option="option" autoresize />

<script setup>
import { data as posts } from '../ex/index.data.js'
// import * as echarts from 'echarts';
import 'echarts-wordcloud';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

// provide(THEME_KEY, 'dark');

function getData() {
  let dataObject = {}
  let dataArray = []
  for (let post of posts) {
    console.log(post, 'xxx')
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
  series: [{
    type: 'wordCloud',
    shape: 'circle',
    keepAspect: false,
    left: 'center',
    top: 'center',
    width: '70%',
    height: '80%',
    right: null,
    bottom: null,
    sizeRange: [18, 45],
    rotationRange: [-90, 90],
    rotationStep: 45,
    gridSize: 8,
    drawOutOfBound: false,
    shrinkToFit: false,
    layoutAnimation: true,

    textStyle: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      // Color can be a callback function or a color string
      color: function () {
        // Random color
        return 'rgb(' + [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160)
        ].join(',') + ')';
      }
    },
    emphasis: {
      focus: 'self',

      textStyle: {
        textShadowBlur: 10,
        textShadowColor: '#333'
      }
    },
    data: getData(),
  }],
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>

