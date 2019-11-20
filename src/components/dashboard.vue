<template >
  <div class="dashboard" v-if="visible">
  <div class="top-header">
    </div>
   <div class='table'>
     <div class='row'>
         <div class='cell'>
         <right-top/>
         <right-bottom/>
         </div>
         <right/>
     </div>
 </div>

  </div>
</template>

<script>


  import AddMovie from "./add-movie" ;
  import Right from "./dashboard-components/right";
  import RightBottom from "./dashboard-components/right-bottom";
  import RightTop from "./dashboard-components/right-top";

export default {
  name: 'Dashboard',
  data(){
    return{
       visible: true,
       user : this.$route.params.user,
    }},
    components: {
    AddMovie, Right, RightTop,RightBottom
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul {
    width: 100%;
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }


  .table {
      display:table;
      width:100%;
      height:500px;
      table-layout:fixed;

    padding-top: 25px;
padding-right: 25px;
padding-bottom: 25px;
padding-left: 25px;
  }

  left {
      display:table-cell;
      border:1px solid grey;
      padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  }

  .row {
      display:table-row;

  }
  .cell {
      display:table-cell;
      background-color: white;
      padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 25px;

  }

  right-top
    {
    height: 50%;
    width: 100%;
}
right-bottom
  {
  height: 50%;
  width: 100%;
}
.floater
{
   float:right;
}
#daily
{
color:   #336600;
}
#weekly
{
color:   #00cc00;
}
#monthly
{
  color: #99ff99;
}
</style>
