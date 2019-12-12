<template >
  <div class="fin-reports" >
    <h1>FINANCIAL REPORTS</h1>
    <div  class="container">
     <a  title="Button fade blue/green"  v-on:click="Click" class="button btnFade btnBlueGreen">Daily</a>
     <a  title="Button fade lightblue" class="button btnFade btnLightBlue">Weekly</a>
     <a  title="Button fade orange" class="button btnFade btnOrange">Monthly</a>
     <div v-if="visible">
     <a title="Button fade orange" class="button btnFade btnOrange share"></a>
     <a title="Button fade orange" class="button btnFade btnOrange share">Download</a>
      <a title="Button fade orange" class="button btnFade btnOrange share"></a>
    </div>
     <div class="clear"></div>

    </div>
    <movie-item class="items" v-for="item in tracks" :key="item.ID" :feed="item" ></movie-item>
  </div>
</template>
<script>

import MovieItem from "../../movie-item";
import gql from "graphql-tag";
import moment from "moment";
// moment().format('YYYY-MM-DD')
const GET_LIST = gql`
      query  getTracks($date:date!,$user:Int!){
      tracks (where: {Date: {_eq: $date},UserID:{_eq: $user}} )  {
      ID
      Expense
      Category
      Date
      }
        }
      `;

export default {
  name: 'FinancialReports',
  data(){
    return{
       visible: false,
       tracks:[],
    }},
    components: {
      MovieItem,

 },
 methods: {
   Click: function() {
     this.visible=true,
     // const user= Number(this.$route.params.user)
     console.log("Trying to Logging in!");
    this.$apollo.query({
        query:GET_LIST,
        variables:{
             date:'2019-11-22' ,
             user:Number(this.$route.params.user),
           },
             // pollInterval: 300, // ms
      }).then( result =>
      this.tracks=result.data.tracks,
     )
 },
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items
{
  margin-left: 150px;
}

.container
{
  margin: auto;
  width: 30%;
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
