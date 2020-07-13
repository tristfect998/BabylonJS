var trailers = 0;
var CreateTrailer = function (scene, vehicle) {
  var name = "trailer" + (trailer + 1);
  var trailer = createTrailerObject(scene, name, vehicle.height, vehicle.width, vehicle.length);
  var returnTrailer = new Trailer(vehicle.height, vehicle.width, vehicle.length, trailer);
  trailers += 1;
  return returnTrailer;
}

var createTrailerObject = function (pScene, pName, pHeight, pWidth, pLength) {
  var box = BABYLON.MeshBuilder.CreateBox(pName, { height: pHeight, width: pLength, depth: pWidth }, pScene);
  box.position = new BABYLON.Vector3(0, 0, 0);
  var mat = new BABYLON.StandardMaterial("trailerMat", pScene);
  mat.alpha = 0.3;
  box.material = mat;
  return box;
}

class Trailer {
  constructor(height, width, length, object) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.object = object;
  }
}
