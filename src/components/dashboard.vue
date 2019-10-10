<template >
  <div class="dashboard" v-if="visible">
    <h1>{{user}}</h1>
    
  </div>
</template>

<script>


export default {


  name: 'dashboard',
  data(){
    return{
       visible: true,
       user : this.$route.params.user,
    }},
    components: {

 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
