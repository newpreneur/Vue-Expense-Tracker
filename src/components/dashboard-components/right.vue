<template >
  <div class="left" v-if="visible">
    <h1>Expense Store</h1>
    <button type="button" name="button">ADD</button>
  </div>
</template>
<script>


export default {
  name: 'Right',
  data(){
    return{
       visible: true,
    }},
    components: {
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    border-radius:25px;

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

</style>
