<template >
  <div class="fin-budget" v-if="visible">
    <h1>SMART BUDGET</h1>
    <ul>
      <input v-model="Salary" type="number" placeholder="Enter your Salary">
      <input @click="SalaryClick" type="submit" value="SUBMIT">
    </ul>
    <!-- Header -->
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Category</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">High</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">Low</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">Your Spend</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Housing</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.housing.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.housing.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.housingagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Utilities</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.utilities.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.utilities.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.utilitiesagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Transportation</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.transportation.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.transportation.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.transportationagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Savings</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.savings.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.savings.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.savingsagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Repayment</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.repayment.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.repayment.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.repaymentagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Food</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.food.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.food.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.foodagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Clothing</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.clothing.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.clothing.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.clothingagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Medical</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.medical.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.medical.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.medicalagg.Expense}}</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Discretionary</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.discretionary.high}}</a>
        <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{$data.data.discretionary.low}}</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">{{0}}{{$data.discretionaryagg.Expense}}</a>
    </div>
  </div>
</template>
<script>

import gql from "graphql-tag";
const FOODAGG = gql`
      query  getAggregates($user:Int!){
      tracks_aggregate(where:{UserID :{_eq: $user}}, distinct_on: [Category])   {
      aggregate{
        sum{
          Expense
        }
      }
      }
        }
      `;


export default {
  name: 'SmartBudget',

  data(){
    return{
       visible: true,
       foodagg:[],
       housingagg:[],
       transportationagg:[],
       clothingagg:[],
       utilitiesagg:[],
       savingsagg:[],
       repaymentagg:[],
       medicalagg:[],
       discretionaryagg:[],
       Salary:null,
       data: {housing:{
         low:0,high:0
       },utilities:{
         low:0,high:0
       },transportation:{
         low:0,high:0
       },savings:{
         low:0,high:0
       },repayment:{
         low:0,high:0
       },food:{
         low:0,high:0
       },clothing:{
         low:0,high:0
       },medical:{
         low:0,high:0
       },discretionary:{
         low:0,high:0
       }},
       name:"hello",
    }},
    components: {
 },
 methods: {
   load: function() {

 },
   SalaryClick: function() {
    console.log(this.Salary);
    // var data=new Object();
    var housing=new Object();
    var utilities=new Object();
    var transportation=new Object();
    var savings=new Object();
    var repayment=new Object();
    var food=new Object();
    var clothing=new Object();
    var medical=new Object();
    var discretionary=new Object();
    housing.low=Number(this.Salary)*30/100;
    housing.high=Number(this.Salary)*35/100;
    utilities.low=Number(this.Salary)*0/100;
    utilities.high=Number(this.Salary)*5/100;
    transportation.low=Number(this.Salary)*15/100;
    transportation.high=Number(this.Salary)*20/100;
    savings.low=Number(this.Salary)*5/100;
    savings.high=Number(this.Salary)*10/100;
    repayment.low=Number(this.Salary)*5/100;
    repayment.high=Number(this.Salary)*15/100;
    food.low=Number(this.Salary)*10/100;
    food.high=Number(this.Salary)*20/100;
    clothing.low=Number(this.Salary)*5/100;
    clothing.high=Number(this.Salary)*10/100;
    medical.low=Number(this.Salary)*0/100;
    medical.high=Number(this.Salary)*3/100;
    discretionary.low=Number(this.Salary)*5/100;
    discretionary.high=Number(this.Salary)*10/100;
    this.data.housing=housing;
    this.data.utilities=utilities;
    this.data.transportation=transportation;
    this.data.savings=savings;
    this.data.repayment=repayment;
    this.data.food=food;
    this.data.clothing=clothing;
    this.data.medical=medical;
    this.data.discretionary=discretionary;
    console.log(this.data.housing.low);
  },
},
created: function () {
  console.log("Working");
  this.$apollo.query({
      query:gql`
            query  getAggregates($user:Int!){
            tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Food"}})   {
            aggregate{
              sum{
                Expense
              }
            }

            }
              }
            `,
      variables:{
            user: Number (this.$route.params.user),
                   }
    }).then( result =>
    this.foodagg=result.data.tracks_aggregate.aggregate.sum,
  )

  this.$apollo.query({
    query:gql`
          query  getAggregates($user:Int!){
          tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Housing"}})   {
          aggregate{
            sum{
              Expense
            }
          }

          }
            }
          `,
      variables:{
            user: Number (this.$route.params.user),
                   }
    }).then( result =>
    this.housingagg=result.data.tracks_aggregate.aggregate.sum,
  )
  //real

    this.$apollo.query({
      query:gql`
            query  getAggregates($user:Int!){
            tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Discretionary"}})   {
            aggregate{
              sum{
                Expense
              }
            }

            }
              }
            `,
        variables:{
              user: Number (this.$route.params.user),
                     }
      }).then( result =>
      this.discretionaryagg=result.data.tracks_aggregate.aggregate.sum,
    )
    this.$apollo.query({
      query:gql`
            query  getAggregates($user:Int!){
            tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Repayment"}})   {
            aggregate{
              sum{
                Expense
              }
            }

            }
              }
            `,
        variables:{
              user: Number (this.$route.params.user),
                     }
      }).then( result =>
      this.repaymentagg=result.data.tracks_aggregate.aggregate.sum,
    )

      this.$apollo.query({
        query:gql`
              query  getAggregates($user:Int!){
              tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Savings"}})   {
              aggregate{
                sum{
                  Expense
                }
              }

              }
                }
              `,
          variables:{
                user: Number (this.$route.params.user),
                       }
        }).then( result =>
        this.savingsagg=result.data.tracks_aggregate.aggregate.sum,
      )

        this.$apollo.query({
          query:gql`
                query  getAggregates($user:Int!){
                tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Transportation"}})   {
                aggregate{
                  sum{
                    Expense
                  }
                }

                }
                  }
                `,
            variables:{
                  user: Number (this.$route.params.user),
                         }
          }).then( result =>
          this.transportationagg=result.data.tracks_aggregate.aggregate.sum,
        )

          this.$apollo.query({
            query:gql`
                  query  getAggregates($user:Int!){
                  tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Utilities"}})   {
                  aggregate{
                    sum{
                      Expense
                    }
                  }

                  }
                    }
                  `,
              variables:{
                    user: Number (this.$route.params.user),
                           }
            }).then( result =>
            this.utilitiesagg=result.data.tracks_aggregate.aggregate.sum,
          )

            this.$apollo.query({
              query:gql`
                    query  getAggregates($user:Int!){
                    tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Medical"}})   {
                    aggregate{
                      sum{
                        Expense
                      }
                    }

                    }
                      }
                    `,
                variables:{
                      user: Number (this.$route.params.user),
                             }
              }).then( result =>
              this.medicalagg=result.data.tracks_aggregate.aggregate.sum,
            )
              this.$apollo.query({
                query:gql`
                      query  getAggregates($user:Int!){
                      tracks_aggregate(where:{UserID :{_eq: $user},Category: {_eq: "Clothing"}})   {
                      aggregate{
                        sum{
                          Expense
                        }
                      }

                      }
                        }
                      `,
                  variables:{
                        user: Number (this.$route.params.user),
                      },
                        pollInterval: 300, // ms
                }).then( result =>
                this.clothingagg=result.data.tracks_aggregate.aggregate.sum,
              )

} ,
// apollo: {
//     tracks_aggregate: {
//       // graphql query
//       query: FOODAGG,
//       variables(){
//         return{
//            user: Number (this.$route.params.user),
//          }
//                  }
//     },
//   },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
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
  border-radius:25px;
}

input[type=submit]{
  background-color:#FFBF37;
  color:#fff;
  font-weight: bold;
  text-align:center;
}

.container
{
  margin: auto;
  width: 40%;
  padding: 10px;

}
.clear {
  clear: both;
}
a,
a:visited {
  text-decoration: none;
  color: #00AE68;
}

a.button {
  display: block;
  position: relative;
  float: left;
  width: 120px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  text-align: center;
  line-height: 50px;
  color: #FFF;
  border-radius: 5px;
  transition: all 0.2s ;
}

.btnBlueGreen {
  background: #00AE68;
}

.btnLightBlue {
  background: #5DC8CD;
}

.btnOrange {
  background: #FFAA40;
}

.btnPurple {
  background: #A74982;
}

/* FADE */
.btnFade.btnBlueGreen:hover {
  background: #21825B;
}

.btnFade.btnLightBlue:hover {
  background: #01939A;
}

.btnFade.btnOrange:hover {
  background: #FF8E00;
}

.btnFade.btnPurple:hover {
  background: #6D184B;
}


</style>
