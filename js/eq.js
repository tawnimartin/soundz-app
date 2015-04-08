
window.Eq = (function(){


	function Eq(svg) {

		var w = 154;
		var h = 100;

		this.data = [0,0,0,0,0,0,7];

		start();
		setTimeout(stop, 5000);

		svg 
		.style("width", w)
		.style("height", h)
		.style("background", "#ccc");

		this.equalizer(w, h) {
		this.each(function(d, i){
		//for each individual g //column is the actual g element
		var column = d3.select(this);
		var stacks = d3.range(column.datum());

		var rects = column.selectAll("rect").data(stacks);

		rects.enter()
			.append("rect")
			.attr("width", 20)
			.attr("height", 3)
			.style("fill", "#456")
			.attr("x", function(){
				return 22 * i;
			})
			.attr("y", function(d, i){
				return h - (5 * i) - 5;
			});

			rects.exit().remove();

		});
	},

	this.columns = svg.selectAll("g").data(this.data);

	this.columns.enter().append("g").call(equalizer);

	equalizer(this.columns, w, h);


	}

	Eq.prototype = {

	arrayAdd: function(a, b) {
	var added = [];
	var length = a.length;
	d3.range(length).forEach(function(i){
		var val = a[i] + b[i];
		val = d3.min([val, 15]);
		val = d3.max([val, 1]);
		added.push(val);
		});
		return val;
	},

	randomVals: function(length) {
	var vals = [];
	d3.range(length).forEach(function(i){
		var val = Math.round(Math.random());
		val = val || -1;
		vals.push(val);
		});
		return val;
	},

	start: function() {
	clearInterval(this.timer);
	this.timer = setInterval(function() {
		thisdata = this.arrayAdd(this.data, this.randomVals(data.length));
		this.columns.data(this.data).call(equalizer);
		}.bind(this), 150);
	},

	stop: function() {
		clearInterval(this.timer);
		this.timer = setInterval(function(){
			data = this.arrayAdd(data, [-1,-1,-1,-1,-1,-1,-1]);
			this.columns.data(this.data).call(equalizer);
			var total = data.reduce(function(a,b){
				return a + b;
			});
				if (total === 0) {
					clearInterval(this.timer);
				}
		}.bind(this), 50);
	}


	}



})();
