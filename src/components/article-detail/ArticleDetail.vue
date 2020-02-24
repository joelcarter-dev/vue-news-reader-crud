<template>
  <div>
      <h1>{{ article.title }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

import * as config from '../../../config';

export default {
    name: "ArticleDetail",
    data: function() {
        return {
            article: {}
        }
    }, methods: {
    getArticle: function(articleId) {
      return axios
        .get(`${config.apiUrl}/articles/${articleId}`)
        .then(function(response) {
          return response.data.article;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }, created: async function() {
    const articleId = this.$route.params.articleId;
    this.article = await this.getArticle(articleId);
    console.log(this.article)
  }
}
</script>

<style scoped>

</style>