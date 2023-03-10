//Global Declarations
let data;
let nn;
let t1Sel, t2Sel, t1Form, t2Form;
let predBtn, trainBtn;
let team1, team2, form1, form2;

let teamList = ['Royal Challengers Bangalore', 'Chennai Super Kings', 'Punjab Kings', 'Delhi Capitals', 'Kolkata Knight Riders', 'Mumbai Indians', 'Sunrisers Hyderabad', 'Rajasthan Royals'];

let teamForms = ["0", "1", "2", "3", "4", "5"];

//Options for the Neural Network
const options = {
  task: 'classification',
  inputs: 4,
  outputs: 2,
  debug: true
}

function setup() {
  //loading the csv file
  data = loadTable('ipl_forms.csv', 'csv', 'header', dataLoaded);
  //Initializing the neural network
  nn = ml5.neuralNetwork(options);
  
  //UI
  trainBtn = createButton('Train');
  trainBtn.mousePressed(() => trainData());

  createP("Select Team 1");
  t1Sel = createSelect();
  teamList.forEach(team => t1Sel.option(team));

  createP("Select Team 2");
  t2Sel = createSelect();
  teamList.forEach(team => t2Sel.option(team));

  createP("Select Team 1 Form");
  t1Form = createSelect();
  teamForms.forEach(team => t1Form.option(team));

  createP("Select Team 2 Form");
  t2Form = createSelect();
  teamForms.forEach(city => t2Form.option(city));

  createP("Click on the Predict Button");
  predBtn = createButton('Predict');
  predBtn.mousePressed(() => {
    team1 = t1Sel.value();
    team2 = t2Sel.value();
    form1 = t1Form.value();
    form2 = t2Form.value();
    nn.classify([team1, team2, form1, form2], gotResults);
    return;
  });

}

//Conformation of loading and Adding the data to the Neural Network
function dataLoaded() {
  console.log('Data Loaded!');
  addData();
}

function addData() {
  let xs;
  let ys;
  for (let i = 0; i < data.getRowCount(); i++) {
    xs = data.getRow(i).arr;
//This checks whether the winning team is team 1 or team 2. Also xs.pop() removes the winning team from each row and enters the reamining values in the Neural Network.
    if (xs[4] == xs[0]) {
      ys = 'team1'
    } else {
      ys = 'team2'
    }
    xs.pop();
    nn.addData(xs, [ys]);
  }
  console.log('Data Pushed!');
}

//Setting up training options
const trainingOptions = {
  batchSize: 24,
  epochs: 100,
}

//Training the Neural Network
function trainData() {
  nn.normalizeData();
  nn.train(trainingOptions, () => {
    console.log("Finished Training!!");
  });
}

//Obtaining the result
function gotResults(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  console.log("The probability of " + result[0].label + " winning is " + result[0].confidence);
}