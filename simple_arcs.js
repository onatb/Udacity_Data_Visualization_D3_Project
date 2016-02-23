var svg = d3.select("body")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200)
    .append("g")
    .attr("transform", "translate(100,100)");

var arc1 = d3.svg.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(0)
    .endAngle(Math.PI);

var arc2 = d3.svg.arc()
    .innerRadius(50)
    .outerRadius(70)
    .startAngle(Math.PI)
    .endAngle(2 * Math.PI);

var i1 = 0,
    i2 = 0;

//First half of the arc
svg.append("path")
    .attr("class", "arc1")
    .attr("id", "1")
    .on("click", function(d) {
        if(i1 % 2 === 0) {
            d3.select(this).style("fill", "lightblue")
            i1++;
        } else {
            d3.select(this).style("fill", "grey")
            i1++;
        }
    })
    .attr("d", arc1);
    
svg.append("text")
    .attr("class", "arcText")
    //Move the text from the start angle of the arc
    .attr("x", 90)
    //Move the text down
    .attr("dy", 18) 
    .append("textPath")
    .attr("xlink:href","#1")
    .text("onat");

//Other half of the arc   
svg.append("path")
    .attr("class", "arc2")
    .attr("id", "2")
    .on("click", function(d) {
        if(i2 % 2 === 0) {
            d3.select(this).style("fill", "red")
            i2++;
        } else {
            d3.select(this).style("fill", "grey")
            i2++;
        }
    })
    .attr("d", arc2);
    
svg.append("text")
    .attr("class", "arcText")
    //Move the text from the start angle of the arc
    .attr("x", 90)
    //Move the text down
    .attr("dy", 18) 
    .append("textPath")
    .attr("xlink:href","#2")
    .text("balta"); 