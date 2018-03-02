<template>
    <nav>
        <ul>
	    <li><router-link to="/">Home</router-link></li>
	    <li><router-link to="/standings">Standings</router-link></li>
	</ul>	
    </nav>
</template>

<script>
 export default {
     name: 'AppHeader'
 }
</script>

<style scoped>
 ul {
     list-style-type:none;
     margin:0;
     padding:0;
 }

 /*Create a horizontal list with spacing*/
 li {
     display:inline-block;
     float: left;
     padding-left: 20%;
     padding-right: 20%;
     width: 10%;
     background-color: black;
     height: 50px;
     line-height: 40px;
 }

 a {
   color: white;
   }
</style>
