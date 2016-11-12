var widgets = require('jupyter-js-widgets');
var _ = require('underscore');
var d3 = require('d3');

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including `_model_name`, `_view_name`, `_model_module`
// and `_view_module` when different from the base class.
//
// When serialiazing entire widget state for embedding, only values different from the
// defaults will be specified.

var CircleModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend({}, widgets.DOMWidgetModel.prototype.defaults, {
        _model_name:   'CircleModel',
        _view_name:    'CircleView',
        _model_module: 'circles-pkg',
        _view_module:  'circles-pkg',
        value:         'Circle World',
        circleCount:   0,
        circles: []
        })
     });


var CircleView = widgets.DOMWidgetView.extend({

    createDiv: function(){
        var toolbarDiv = $("<div id='toolbarDiv' style='border:1px solid gray; height: 30px; width: 600px'></div>");
        var div = $("<div id='d3DemoDiv' style='border:1px solid red; height: 300px; width: 600px'></div>");
        div.append(toolbarDiv);
        this.circleCountReadout = $("<input type='text' id='circleCountReadout' value='0'/>");
        toolbarDiv.append(this.circleCountReadout);
        var circleView = this;
        function clearCircles() {
           circleView.circles = [];
           circleView.circleCount = 0;
           $("#circleCountReadout").val(0);
           $("#svg").children().remove();
           circleView.model.set("circleCount", 0);
           circleView.touch();
           };

        var clearButton = $('<button>Clear Circles</button>').click(clearCircles);
        toolbarDiv.append(clearButton);
        return(div);
        },

    createCanvas: function(){
       //console.log("==== Circles.js createCanvas, this:");
       //console.log(this);
       var svg = d3.select("#d3DemoDiv")
                   .append("svg")
                   .attr("id", "svg").attr("width", 600).attr("height", 300);
       //console.log("  after svg from d3.select");
       //console.log("    svg: ");
       //console.log(svg);
       this.svg = svg;
       var circleView = this;
       svg.on('click', function() {
          //console.log("---- svg click");
          var coords = d3.mouse(this);
          //console.log("   coords:");
          //console.log(coords)
          var newCircle = {x: coords[0], y: coords[1], radius: 20,
                           borderColor: "black", fillColor: "beige"};
          //console.log("newCircle:");
          //console.log(newCircle);
          // circleView.circles.push(newCircle);
          circleView.drawCircle(newCircle, "blue");
          });
       }, 

    drawCircle: function(obj, color){
       console.log("--- drawCircle")
       console.log(this);
       this.svg.append("circle")
          .style("stroke", color)
          .style("fill", "white")
          .attr("r", obj.radius)
          .attr("cx", obj.x)
          .attr("cy", obj.y)
          .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
          .on("mouseout",  function(){d3.select(this).style("fill", "white");});
       var circleCount = this.model.get("circleCount") + 1;
       $("#circleCountReadout").val(circleCount);
       this.model.set("circleCount", circleCount);
       this.touch();
       },


    render: function() {
       console.log("--- Circles.js render");
       console.log("     this:");
       console.log(this);
       this.$el.append(this.createDiv());
       this.listenTo(this.model, 'change:newCircleRequest', this.newCircleRequested, this);
       var circleView = this;
       function delayCanvasCreationUntilDivExists(){ 
            // would be better to trigger on DOM div creation. not knowing how to do that, 
            // this setTimeout hack will have to suffice.
          console.log("===  about to call circleView.createCanvas()");
          console.log("     this:");
          console.log(this);
          circleView.createCanvas()
          }
       setTimeout(delayCanvasCreationUntilDivExists, 0);
       },

    newCircleRequested: function() {
       var newCircle = this.model.get("newCircleRequest")[0];
       console.log("--- newCircleRequested:")
       console.log(newCircle);
       //this.circles.push(newCircle);
       this.drawCircle(newCircle, "red");
       },

    value_changed: function() {
       this.el.textContent = this.model.get('value');
       }
    });

module.exports = {
   CircleModel: CircleModel,
   CircleView:  CircleView
   };
