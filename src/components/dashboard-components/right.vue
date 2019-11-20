<template >
  <div class="left" v-if="visible">
    <h1>Expense Store</h1>
    <ul>
    <input type="text" placeholder="Expense"  v-model="Expense">
    <select v-model="Category">
    <option disabled value="Category">Please select Category</option>
    <option>Food</option>
    <option>Travel</option>
    <option>Shopping</option>
    <option>Lifestyle</option>
    <option>Debit</option>
    <option>Credit</option>
    <option>Utilities</option>
    <option>Others</option>
     </select>
      <input v-on:click="post" type="submit" value="ADD">
    </ul>
    <movie-item class="items" v-for="item in tracks" :key="item.ID" :feed="item"></movie-item>
  </div>
</template>
<script>
import MovieItem from "../movie-item";

import gql from "graphql-tag";
const GET_LIST = gql`
      query  getTracks($date:date!){
      tracks(where: {Date: {_eq: $date}},limit: 5, order_by: {TimeStamp: desc})   {
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
 ) {
   insert_tracks(
     objects: [
       {
         Expense: $Expense
         Category: $Category
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
       Category: 'Others',
       Expense:'',
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
       variables:{
            date:'2019-11-20' ,
                    }
     },
   },
  methods: {
    post: function () {
    const { Expense, Category } = this.$data
    this.Expense='',
    this.Category='Others',
    this.$apollo.mutate({
      mutation: ADD_LIST,
      variables: {
        Expense,
        Category,
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
