<template >
  <div class="right-bottom" v-if="visible">
    <h1>Tools</h1>
    <div class='down'>
    <div @click="HealthClick" class='button'> <img alt="Vue logo" src="../../assets/promotion.png"><p>Financial Health</p></div>
    <div @click="TrajectoryClick" class='button'><img alt="Vue logo" src="../../assets/money.png"> <p>Path way</p></div>
    <div @click="SmartClick" class='button'> <img alt="Vue logo" src="../../assets/piggy-bank.png"><p>Smart Budget</p></div>
    <div @click="ReportsClick" class='button'> <img alt="Vue logo" src="../../assets/analysis.png"><p>Financial Reports</p></div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'RightBottom',
  data(){
    return{
       visible: true,
    }},
    components: {
 },
 methods: {
   HealthClick: function() {

    this.$router.push({name:'financialhealth'})
  },
  SmartClick: function() {
   this.$router.push({name:'smartbudget'})
 },
 TrajectoryClick: function() {
  this.$router.push({name:'financialtrajectory'})
},
ReportsClick: function() {
 this.$router.push({name:'financialreports'})
},
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div
  {

  }
  .right-bottom
  {
    height: 47.5%;

  }
  .down
    {
    height: 50%;
    width: 100%;
  }
  .button
  {
    float: left;
  width: 20%;
  height: 100%;
  /* background-color: #99ff99; */
    margin-left: 10px;
    margin-right: 10px;
  }
  h1{
    margin-top : 25px;
  }

</style>
