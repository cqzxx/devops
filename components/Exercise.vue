<template>
  <div class="ex-content">
    <div class="question">
      <span v-for="tag in tags" class="tag">{{ tag }}</span>
      <hr>
      <b class="subject">{{ subject }}</b>
      <hr>
      <div v-for="(item, index) in options" class="radio">
        <input type="radio" name="xxx" :id="index" @change="radioChange(index)" />
        <label :for="index"><b>{{ String.fromCharCode(65+index) + ': ' }}</b>{{ item.label }}</label>
        <span class="result" v-if="isRight === true && option == index">✅</span>
        <span class="result" v-if="isRight === false && option == index">❌</span>
      </div>
      <hr>
      <div>
        <button type="submit" @click="submit" :disabled="option === null">提交</button>
        <span class="result" v-if="isRight === true">✅答对了</span>
        <span class="result" v-if="isRight === false">❌答错了</span>
        <button class="next" v-if="nextUrl === null" disabled>这是最后一题</button>
        <button class="next" v-else type="submit" @click="next">下一题</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { data as posts } from '../ex/index.data.js'
  import { useRoute } from 'vitepress'
  export default {
    props: {
      exData: {type: Object, default: () => {} },
    },
    data() {
      return {
        isRight: null,
        option: null,
        tags: [],
        subject: null,
        options: [],
        route: useRoute(),
        nextUrl: null,
      }
    },
    mounted() {
      this.subject = this.exData.subject
      this.options = this.exData.options
      this.tags = this.exData.tags

      this.shuffleArray(this.options)
      this.storage()
      this.nextPage()
    },
    methods: {
      radioChange(index) {
        this.option = index
        this.isRight = null
      },
      submit() {
        if (this.options[this.option].answer === true) {
          this.isRight = true
        } else {
          this.isRight = false
        }
      },
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      },
      storage() {
        localStorage.clear();
        localStorage.setItem('EX_URLS', this.getUrls())
      },
      getUrls() {
        let exUrls = []
        for (let post of posts) {
          if (post.url == '/ex/') {
            continue
          }
          exUrls.push(post.url)
        }
        return exUrls
      },
      nextPage() {
        let exUrls = localStorage.getItem('EX_URLS')
        exUrls = exUrls.split(',')
        let index = exUrls.indexOf(this.route.path)
        if (exUrls.length > index + 1) {
          this.nextUrl = exUrls[index+1]
        }
      },
      next() {
        window.location.href = this.nextUrl
      },
    },
  }
</script>
