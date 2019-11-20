Day 3<template >
  <div class="right-top" v-if="visible">
    <h1>Spend Analytics</h1>
    <!-- <bars

  :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0,2,7,8,8,7,3,4]"
  :gradient="['#6fa8dc', '#42b983']">
</bars> -->

<bars
     :width="500" :height="200"
     :labels=[]
     :data="data"
     :gradient="['#6fa8dc', '#42b983']">
   </bars>
  </div>
</template>
<script>


export default {
  name: 'RightTop',
  data(){
    return{
       visible: true,
       data:[{value: 0, title: 'Day 1'}, {value: 1, title: 'Day 2'}, {value: 5, title: 'Day 3'}, {value: 2, title: 'Day 4'}, {value: 1, title: 'Day 5'}, {value: 8, title: 'Day 6'}, {value: 4, title: 'Day 7'}, {value: 2, title: 'Day 8'}, {value: 1, title: 'Day 9'}, {value: 1, title: 'Day 10'}, {value: 5, title: 'Day 11'}, {value: 2, title: 'Day 12'}, {value: 1, title: 'Day 13'}, {value: 1, title: 'Day 14'}, {value: 5, title: 'Day 15'}, {value: 2, title: 'Day 16'}, {value: 1, title: 'Day 17'}, {value: 1, title: 'Day 18'}, {value: 5, title: 'Day 19'}, {value: 2, title: 'Day 20'}, {value: 1, title: 'Day 22'}],
    }},
    components: {
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div
  {

  }
  .right-top
  {
    height: 60%;

  }


</style>
