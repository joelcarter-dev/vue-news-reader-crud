<template>
  <div>
    <h1 v-if:="!isEdit">New Article</h1>
    <h1 v-if:="isEdit">Update Article</h1>
    <div v-if="errors.length">
        Please correct the following error(s):
        <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </div>
    <form @submit="checkForm">
      <div>
        <label for="title">Title</label>
        <input v-model="article.title" type="text" placeholder="Title" />
      </div>
      <div>
        <label for="body">Body</label>
        <textarea v-model="article.body" name="body" cols="30" rows="10"></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import * as config from '../../../config';

export default {
  name: "ArticleEditor",
  data: function() {
    return {
      isEdit: false,
      article: {},
      errors: []
    };
  },
  methods: {
    checkForm: function(evt) {
      evt.preventDefault();

      this.errors = [];

      if(!this.article.title) {
          this.errors.push('Title required');
      }
      if(!this.article.body) {
          this.errors.push('Body required');
      }
      if(!this.errors.length) {
        if(this.isEdit) {
          this.updateArtical()
        } else {
          this.createArtical()
        }
      }
      
    },
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
    },
    createArtical: function() {
      return axios
        .post(`${ config.apiUrl }/articles`, this.article)
        .then(() => {
            this.$router.push({ path: '/'});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    updateArtical: function() {
       return axios
        .put(`${ config.apiUrl }/articles/${this.article.id}`, this.article)
        .then(() => {
            this.$router.push({ path: '/'});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  created: async function() {
    const articleId = this.$route.params.articleId;
    if(articleId){
      this.isEdit = true
    }
    this.article = await this.getArticle(articleId);
  }
};
</script>

<style>
</style>