<template >
  <div class="fin-health" v-if="visible">
    <h1>FINANCIAL HEALTH</h1>
    <ul>
      <input v-model="Salary" type="number" placeholder="Enter your Salary">
      <input @click="loginClick" type="submit" value="SUBMIT">
    </ul>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Category</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">Healthy</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">Your Average</a>
    </div>
    <div class="container">
      <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">Daily</a>
      <a  title="Button fade lightblue" class="button btnFade btnLightBlue">Weekly</a>
      <a  title="Button fade orange" class="button btnFade btnOrange">Monthly</a>
    </div>
  </div>
</template>
<script>


export default {
  name: 'FinancialHealth',
  data(){
    return{
       visible: true,
       Salary:0,

    }},
    components: {
 },

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
