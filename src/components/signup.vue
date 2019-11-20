<template >
  <div class="auth" v-if="visible">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
       Signup for Expense Tracker Application!
    </p>
    <hr>
    <h3> Sign Up</h3>
    <ul>
      <ul>
        <input type="text" placeholder="Username"  v-model="signup_username">
        <input type="password" placeholder="Password"  v-model="signup_password">
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
const ADD_LIST = gql`
mutation addtracks(
   $username: String!
   $password: String!
 ) {
   insert_authentication(
     objects: [
       {
         Username: $username
         Password: $password
       }
     ]
   ) {
     returning {
       ID
       Category
       Expense
       Date
     }
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
     this.$router.replace({name:'dashboard', params:{ user : "Hello "+this.login_username}})
    },
    signupClick: function() {
       console.log("Trying to Sign up!");
    },
  },
  data: () => ({
     visible: true,
     signup_username: '',
     signup_password: '',
  })
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
