var shownScene;
var advancedTexture;
var cameras = [];
var CreateScene = function(solution, canvas, engine) {
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4.FromHexString("#FFFFFF");
  var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 60, BABYLON.Vector3.Zero(), scene);
  cameras.push(camera);
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 0.25;
  var light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(0, -1, 0), scene);
  light2.intensity = 0.25;
  var light3 = new BABYLON.HemisphericLight("light3", new BABYLON.Vector3(0, 0, 1), scene);
  light3.intensity = 0.25;
  var light4 = new BABYLON.HemisphericLight("light4", new BABYLON.Vector3(0, 0, -1), scene);
  light4.intensity = 0.25;
  var trailer = CreateTrailer(scene, solution.vehicle);
  var boxes =  CreateBoxes(scene, trailer, solution.solutionItems, solution.loadType);
  return scene;
};

var GetCamera = function (id) {
  return cameras[id];
}