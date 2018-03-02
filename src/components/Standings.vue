<template>
<div id="container">
	<div>
	   <h1>View Current Standings by Conference or Division</h1>
	</div>
	<div>
	   <button v-on:click="sortBy='Conference'">Conference</button>
	   <button v-on:click="sortBy='Division'">Division</button>
	</div>
	
	<template v-if="sortBy=='Conference'">
	<div class="selectButtons">
           <button v-on:click="showStandings('Eastern', 0)">Eastern</button>
	   <button v-on:click="showStandings('Western', 1)">Western</button>
        </div>
	</template>
	
	<template v-if="sortBy=='Division'">
	<div class="selectButtons">
           <button v-on:click="showStandings('Pacific', 2)">Pacific</button>
           <button v-on:click="showStandings('Central', 3)">Central</button>
	   <button v-on:click="showStandings('Metro', 4)">Metropolitan</button>
           <button v-on:click="showStandings('Atlantic', 5)">Atlantic</button>
        </div>
	</template>
	<img v-bind:src="currentImage">
</div>
</template>

<script>
export default {
   name: 'Standings',
   data: function() {
   return {
       sortBy: '',
       sortOptions: ['Conference', 'Division'],
       sortSelection: '',
       conferences: ['Eastern', 'Western'],
       divisions: ['Pacific', 'Central', 'Metropolitan', 'Atlantic'],
       imageUrls: [
                   '../../static/images/eastern.jpg', '../../static/images/western.jpg',
		   '../../static/images/pac.jpg', '../../static/images/central.jpg',
                   '../../static/images/metro.jpg', '../../static/images/atlantic.jpg'
                  ],
       currentImage: '',
     }
   },
   
  methods: {
	showStandings: function(selection, num) {
		this.sortSelection = selection;
		this.currentImage = this.imageUrls[num];
	},
  },
}
</script>

<style scoped>
#container {
width: 100%;
clear:both;
text-align: center;
}

h1 {
padding-top: 15px;
}

img {
width: 100%;
}

.selectButtons {
 padding-top: 15px;
 padding-bottom: 20px;
}
</style>
