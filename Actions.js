var engine
var sceneToShow;
var scenes;
var solutions;
var colorMode = "Produit";
function GeneratePlan() {
  var JSONSolutions = $("#solutions").val();
  if (JSONSolutions != "") {
    ClearItems();
    solutions = JSON.parse(JSONSolutions);
    var canvas = document.getElementById("renderCanvas");
    engine = new BABYLON.Engine(canvas, true);
    for (var i = 0; i < solutions.length; i++) {
      MakeHeader(i);
      scenes.push(CreateScene(solutions[i], canvas, engine));
    }
    SetStats(0);
    setTimeout(function () {
      engine.stopRenderLoop();

      engine.runRenderLoop(function () {
        scenes[sceneToShow].render();
        GetCamera(sceneToShow).attachControl(canvas, true);
      });
    }, 500);
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }
  else {
    alert('JSON vide');
  }
}

function ClearItems(){
  if(engine != null){
    engine.stopRenderLoop();
    engine.dispose();
    engine = null;
  }
  scenes = [];
  solutions = [];
  sceneToShow = 0;
  $("#tabHeader").html("");
}

function MakeHeader(id) {
  $("#tabHeader").append(NewHeaderButton(id));
}

var NewHeaderButton = function (id) {
  var html = "";
  html += '<button onclick="SeeSolution(' + id + ')" class="tablinks">Solution ' + (id + 1) + '</button>';
  return html;
}

function SeeSolution(id) {
  sceneToShow = id;
  SetStats(id);
}

function ColorModeChanged(value) {
  colorMode = value;
}

var GetColorMode = function () {
  return colorMode;
}

function SetStats(id) {
  $("#TotWeight").html(solutions[id].totalWeight + " lbs");
  $("#FulWeight").html(solutions[id].weightFulfilment + " %");
  $("#TotVolume").html(solutions[id].totalVolume + " p3");
  $("#FulVolume").html(solutions[id].volumeFulfilment + " %");
  $("#BundlesOnDeck").html(solutions[id].bundleCountOnDeck);
  $("#MissingCount").html(solutions[id].missingBundleCount);
  $("#BundleCount").html(solutions[id].bundleCount);
}

function NewCapture() {
  BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine, GetCamera(sceneToShow), 800);
}