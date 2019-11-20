<template >
  <div class="auth" v-if="visible">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      This App is built as a part of Software Engineering!
    </p>
    <hr>
    <h3>Login </h3>
    <ul>
      <input v-model="Username" type="text" placeholder="Username">
      <input v-model="Password" type="password" placeholder="Password">
      <input @click="loginClick" type="submit" value="LOG IN">
    </ul>
    <h3> Sign Up</h3>
    <ul>
      <ul>
        <input v-on:click="signupClick" type="submit" value="CREATE ACCOUNT">
      </ul>
    </ul>
    <h3>Developers</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Burada Vivek</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Devang Shetty</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">Chetan Nyamagoud</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Dhanush</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Chandan Bhatt</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Bharath</a></li>
    </ul>
    <a id="github" href="https://router.vuejs.org" target="_blank" rel="noopener">View on GitHub</a>
  </div>
</template>

<script>

import gql from "graphql-tag";
const GET_AUTH = gql`
      query  GetAuth($username: String!,$password: String!){
        authentication (where: {Username: {_eq: $username},Password: {_eq: $password}} ){
       ID
       Username
       Password
      }
        }
      `;
export default {
  name: 'Auth',
  props: {
    msg: String
  },
  methods: {
    loginClick: function() {
      console.log("Trying to Logging in!");
     this.$apollo.addSmartQuery('authentication', {
         // Same options like above
         query:GET_AUTH,
         variables:{
              username: this.Username,
              password: this.Password,
              }
       })
console.log(this.$apolloData)
       if(this.authentication.length)
       {
         this.$router.replace({name:'dashboard', params:{ user : "Hello "+this.Username}})
       }
       else {

       }
  },
    signupClick: function() {
       console.log("Trying to Sign up!");
       this.$router.push({name:'signup'})
    },
  },
  data: () => ({
     visible: true,
     authentication:[],
     Username: '',
     Password: '',

  }),
//   apollo: {
//   authentication: {
//    query:GET_AUTH,
//    variables:{
//         username: "vivek",
//         password:"123456"
//               }
//  },
//
// },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

input{
  text-align:center;
  font-family : Arial;
  width:25%;
  height:35px;
  margin-bottom:10px;
  margin: 0 10px;
  border:none;
  border:1px solid #F8F8F8;
  background-color:#F8F8F8;
  border-radius:25px;
}

input[type=submit]{
  background-color:#FFBF37;
  color:#fff;
  font-weight: bold;
  text-align:center;
}

::-webkit-input-placeholder{
  color:grey;
  letter-spacing: 1px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
#github
{
  color:  #42b;
}
a {
  color: #42b983;
}

</style>
