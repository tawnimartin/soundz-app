(function(ns){

	var total = 0;
	var position = 0;

	var spinnerOffset = 0;

	var size = 336;
	var thickness = 40;

	var outerRadius = size/2;
	var innerRadius = outerRadius - thickness;

	ns.TrackProgress = Backbone.View.extend({

		initialize: function() {
			$(document).on("sound:on", function(){

				tiy.on("stream:position", function(){
					
					this.setPosition.bind(this)();

				}.bind(this));

			}.bind(this));

			if (tiy.streamPlaying) {
				tiy.on("stream:position", function(){
					
					this.setPosition.bind(this)();

				}.bind(this));
			}
		},

		onClick: function() {
			console.log("clicked", d3.event);

			var rect = this.svg.node().getBoundingClientRect();

			var clickX = d3.event.x - rect.left;
			var clickY = d3.event.y - rect.top;

			var centerX = size/2;
			var centerY = size/2;

			var angle = Math.atan2(centerY - clickY, centerX - clickX);

			console.log("original angle", angle);

			angle += Math.PI;

			var circle = Math.PI*2;
			var quarter = circle/4;

			angle += quarter;

			console.log("angle plus a quarter", angle);

			if (angle > circle) {
				angle -= circle;
			}

			var percent = angle / circle;

			console.log("final angle", angle);

			tiy.stream.setPosition(tiy.stream.duration * percent);
		},

		setPosition: function() {

			position = tiy.stream.position;
			total = tiy.stream.duration;


			var scale = d3.scale.linear()
				.range([0, 2*Math.PI])
				.domain([0, total]);


			var angle = scale(position);

			var percent = position/total;

			// console.log("percent", percent);

			if (percent < .01) {
				var start = spinnerOffset;
				var end = start + Math.PI/2;
				
				this.arc.endAngle(end);
				this.arc.startAngle(spinnerOffset);
		  	this.cir.attr("d", this.arc);

		  	spinnerOffset += Math.PI/5;

		  	if (spinnerOffset > Math.PI*2) {
		  		spinnerOffset -= Math.PI*2;
		  	}
			} else {
				spinnerOffset = 0;
				this.arc.startAngle(0);
				this.arc.endAngle(angle);
			  this.cir.attr("d", this.arc);
			}


		},

		render: function() {
			this.$el.empty();

			this.svg = d3.select(this.el).append("svg")
				.attr("width", size)
			  .attr("height", size);

			this.arc = d3.svg.arc()
			  .innerRadius(innerRadius)
			  .outerRadius(outerRadius)
			  .startAngle(0)
			  .endAngle(2*Math.PI)
			    
			// this.cirBG = this.svg.append("path")		
			//   .style("fill", "brown")
			//   .attr("d", this.arc)
			//   .attr("transform", "translate("+(size/2)+","+(size/2)+")")

			this.cir = this.svg.append("path")
			  .style("stroke", "#4adf96")
			  .style("fill", "#4adf96")
			  .attr("transform", "translate("+(size/2)+","+(size/2)+")")

			 this.cirClickArea = this.svg.append("path")		
			  .style("opacity", 0)
			  .attr("d", this.arc)
			  .attr("transform", "translate("+(size/2)+","+(size/2)+")")
			  .on("click", this.onClick.bind(this));

		}

	});

})(window);