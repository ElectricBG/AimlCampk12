function setup() {
  var div = createDiv(" ");
  div.id("myPlot")
  div.position(0,0);
var months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
var number = [100,150,179,200,184,208,310,149,463,200,315,234];
var data = [{
  x: months,
  y: number,
  modes:"lines"
}];
var layout = {
  xaxis: {title: "Months"},
  yaxis: {title: "Number of cars sold"},
  title: "Car sales in 2021"
};
Plotly.newPlot("myPlot", data, layout);
}