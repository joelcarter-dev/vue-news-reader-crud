<template>
  <div class="">
      <form action="" @submit="createUser">
          <div class="thing">
              <!-- honnypot -->
              <label for="name"></label>
              <input type="text" name="name" v-model="user.ohNoHounyName">
              <label for="lastName"></label>
              <input type="text" name="name" v-model="user.ohNoHounyName">
              <label for="email"></label>
              <input type="text" name="email" v-model="user.ohNoHounyName">
          </div>
          <input v-model="user.firstName" placeholder="First Nmae">
          <input v-model="user.lastName" placeholder="Last Nmae">
          <input v-model="user.email" placeholder="Email">
          <input type="submit" value="submit">
      </form>
      Login
      <form action="" @submit="userLogin">
           <input v-model="login.email" placeholder="Email" type="email">
          <input type="submit" value="login">
      </form>
  </div>
</template>

<script>
import axios from "axios"
const apiBaseUrl = 'http://localhost:3000/v1/';
export default {
    name: "signup",
    data: function() {
        return {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                ohNoHounyName: ""
            },
            login: {
                email: ""
            }
        }
    },
    methods: {
        createUser: function(e) {
            console.log("called")
            e.preventDefault();
            return axios
            // I could not pass in this.data here, wrap your dater items faggot
                .post(`${ apiBaseUrl }users/register`, this.user)
                .then((res) => {
                    console.log(res.data.user)
                    let user = res.data.user
                    if(user) {
                        localStorage.userEmail = user.email
                    } else {
                        //message
                    }
                })
                .catch(function(error) {
                    // handle error
                    console.log(error);
                });
        },
        userLogin: function(e) {
            e.preventDefault();
            return axios
                .post(`${ apiBaseUrl }users/login`, this.login)
                .then((res) => {
                    let user = res.data.user
                    if(user) {
                        localStorage.userEmail = user.email
                    } else {
                        //message
                    }
            })
        }
    }
}
</script>

<style>
.thing {
    opacity: 0;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    position: absolute;
    z-index: -1;
}
</style>