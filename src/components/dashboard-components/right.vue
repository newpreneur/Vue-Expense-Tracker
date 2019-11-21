<template >
  <div class="left" v-if="visible">
    <h1>Expense Store </h1>
    <ul>
    <input type="text" placeholder="Expense"  v-model="Expense">
    <select v-model="Category">
    <option disabled value="Category">Please select Category</option>
    <option>Housing</option>
    <option>Utilities</option>
    <option>Transportation</option>
    <option>Savings</option>
    <option>Debt Repayment</option>
    <option>Food</option>
    <option>Clothing</option>
    <option>Medical</option>
    <option>Descretionary</option>
     </select>
      <input v-on:click="post" type="submit" value="ADD">
    </ul>
    <movie-item class="items" v-for="item in tracks" :key="item.ID" :feed="item"></movie-item>
  </div>
</template>
<script>
import MovieItem from "../movie-item";
import moment from "moment";
import gql from "graphql-tag";
const GET_LIST = gql`
      query  getTracks($date:date!,$user:Int!){
      tracks(where: {Date: {_eq: $date}, UserID :{_eq: $user}},limit: 5, order_by: {TimeStamp: desc})   {
      ID
      Expense
      Category
      Date
      }
        }
      `;
const ADD_LIST = gql`
mutation addtracks(
   $Expense: Int!
   $Category: String!
   $User:Int!
 ) {
   insert_tracks(
     objects: [
       {
         Expense: $Expense
         Category: $Category
         UserID:$User
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
  name: 'Right',
  data(){
    return{
       visible: true,
       tracks: [],
       Category: 'Food',
       Expense:'',
       UserID: this.$route.params.user,
    }},
    components: {
      MovieItem
 },
 computed: {

},
 apollo: {
     tracks: {
       // graphql query
       query: GET_LIST,
       variables(){
         return{
            // date:'2019-11-20' ,
            date:moment().format('YYYY-MM-DD') ,
            user: Number (this.UserID),
          }
                  }
     },
   },
  methods: {

    post: function () {
         console.log(moment().format('YYYY-MM-DD').toString());
    const { Expense, Category } = this.$data
    const User= Number(this.UserID)
    this.Expense='',
    this.Category='Food',
    this.$apollo.mutate({
      mutation: ADD_LIST,
      variables: {
        Expense,
        Category,
        User,
      },
       refetchQueries: ["getTracks"]
    })
  }},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items
{
  margin-left: 150px;
}
select
{
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
  button
  {
    background-color:#FFBF37;
    color:#fff;
    font-weight: bold;
    text-align:center;
    text-align:center;
    font-family : Arial;
    width:25%;
    height:35px;
    margin-bottom:10px;
    margin: 0 10px;
    border:none;
    border:1px solid #F8F8F8;
  }
  div
  {
    background-color : #e6e6ff;
  }
  .left
  {
    height:100%;
    border-radius:25px;
  }
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

  }

  input[type=submit]{
    background-color:#FFBF37;
    color:#fff;
    font-weight: bold;
    text-align:center;
  }

</style>
