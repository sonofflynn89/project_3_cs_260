<template>
    <div>
	<div class="container">
		<div id="welcomeBox">
			<h1>Welcome to Hockey Central!</h1>
		</div>
	</div>
	<img v-bind:src="imagePath"/>
    </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	     imagePath: '../../static/images/rink.jpg'
	 }
     }
 }
</script>

<style scoped>

.container {
   width: 20%;
   padding-left: 20%;
}

#welcomeBox{
     position: absolute;
     top: 200px;
     width: 60%;
     height: 300px;
     text-align: center;
     color: white;
     background-color: rgba(0, 0, 0, 0.6);
     border-radius: 25px;
}

h1 {
   line-height: 250px;
   font-size: 60px;
}

 
 img {
     width: 100%;
 }
</style>