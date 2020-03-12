<template>
  <div class="">
      <form action="" @submit="createUser">
          <input v-model="user.firstName" placeholder="First Nmae">
          <input v-model="user.lastName" placeholder="Last Nmae">
          <input v-model="user.email" placeholder="Email">
          <input type="submit" value="submit">
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
    }
}
</script>

<style>

</style>