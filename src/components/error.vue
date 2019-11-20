<template >
  <div class="error" v-if="visible">
    <h1>PAGE NOT FOUND</h1>
      <img alt="Vue logo" src="../assets/maddesigner.png">
  </div>
</template>
<script>


export default {
  name: 'Error',
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

</style>
