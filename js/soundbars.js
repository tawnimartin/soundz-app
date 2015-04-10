(function(ns){

  var w = 110;
  var h = 60;

  function arrayAdd(a,b) {
    var added = [];
    d3.range(d3.max([a.length, b.length])).forEach(function(i) {
      var val = (a[i] || 0) + (b[i] || 0);
      val = d3.min([val, 15]);
      val = d3.max([val, 1]);
      added.push( val );
    });
    return added;
  }

  function randomBits(length) {
    var bits = [];
    d3.range(length).forEach(function(i){
      var bit = Math.round(Math.random());
      bit = bit || -1;
      bits.push(bit);
    });
    return bits;
  }

  function equalizer() {
    this.each(function(d, i){
      var column = d3.select(this);
      var stacks = d3.range(column.datum());
      var rects = column.selectAll("rect")
      	.data(stacks);
      	
      rects.enter()
      	.append("rect")
      	.attr("width", 10)
      	.attr("height", 2)
      	.style("fill", "#dbb697")
      	.style("opacity", 0)
      	.attr("y", function(d, i){
        	return h - (i * 3) - 3;
      	})
      	.attr("x", function(){
        	return 11 * i;
        })
      	.transition()
      	.duration(10)
      	.style("opacity", 1);
      
      rects.exit().remove();
    });
  }

  var data = [1,1,1,1,1,1,1,1,1,1];

  var timer;

  var columns;

  function startSoundbars(){
    clearInterval(timer);
    timer = setInterval(function(){
      data = arrayAdd(data, randomBits(data.length));
      columns.data(data).call(equalizer);
    }, 150);  
  }

  function stopSoundbars() {
    clearInterval(timer);
    timer = setInterval(function(){
      data = arrayAdd(data, [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);
      columns.data(data).call(equalizer);
    }, 50);
  }

  var EQView = Backbone.View.extend({

    render: function() {
      this.$el.empty();
      var svg = d3.select(this.el)
        .append("svg")
        .style("width", w)
        .style("height", h)

      columns = svg.selectAll("g").data(data);

      columns.enter().append("g").call(equalizer);

      $(document).on("sound:on", this.play);
      $(document).on("sound:off", this.stop);
    },

    play: function() {
      setTimeout(startSoundbars, 1000);
    },

    stop: function() {
      stopSoundbars();
    }

  });

  ns.EQView = EQView;

})(window);

// SC.initialize({
//   client_id: "c8bce9e7fae8a4674a3aaa85dbf9a633"
// });

// SC.stream("/tracks/293", function(sound){
//   console.log("--->");
  
//   sound.whileplaying = function() {
//     console.log(this.eqData);
//   }
  
//   sound.play();
// });