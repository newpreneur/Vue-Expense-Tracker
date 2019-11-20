<template>
  <div :key="feed.ID" class="container">
   <a  title="Button fade blue/green" class="button btnFade btnBlueGreen">{{feed.Date}}</a>
   <a  title="Button fade lightblue" class="button btnFade btnLightBlue">{{feed.Expense}}</a>
   <a  title="Button fade orange" class="button btnFade btnOrange">{{feed.Category}}</a>
   <div class="clear"></div>
  </div>
</template>
<script>
export default {
  name: "MovieItem",
  props: ["feed"]
};
</script>
<style scoped>
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
