<template>
  <div>
    <router-link v-if="isLogedIn" :to="'/article-editor'">Add Article</router-link>
    <div v-for="article in articles" :key="article.id">
      <div>
        <router-link :to="{
          name: 'detail',
          params: { articleId: article.id}
        }">
          <h2>{{ article.title }}</h2>
        </router-link>
        <span>
          <router-link :to="{
            name: 'article-editor',
            params: { articleId: article.id}
          }">Edit</router-link>
          <a href="#" @click.prevent="deleteArtical(article.id)">Delete</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as authService from "../../services/auth-service.js"

const apiBaseUrl = 'https://example-api4.glitch.me/api';

export default {
  name: "NewsList",
  data: function() {
    return {
      articles: [],
      isLogedIn: false
    };
  },
  methods: {
    getArticles: function() {
      return axios
        .get(`${apiBaseUrl}/articles`)
        .then(function(response) {
          return response.data.articles;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    deleteArtical: function(articleId) {
       return axios
        .delete(`${apiBaseUrl}/articles/${articleId}`)
        .then(async () => {
          this.articles = await this.getArticles()
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  created: async function() {
    this.articles = await this.getArticles();
    this.isLogedIn = authService.isLogedIn()
  }
};
</script>
