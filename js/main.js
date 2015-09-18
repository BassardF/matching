var rating = new Rating({
	canvasId : "canvas_container",
	width : 200,
	height : 200,
	strokeWidth : {
		bcg : 0,
		inner : 5
	},
	rating : 40,
	colors : {
		strokeBcg : 'blue',
		bcg : '#293540',
		inner : '#FF530D',
		rating : 'white',
	},
	fontSize : {
		rating : 50
	},
	fontFamily : {
		rating : 'arial'
	},
	offsets : {
		rating : 0,
		inner : 15
	},
	withPercent : false
})