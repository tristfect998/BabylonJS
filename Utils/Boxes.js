var materials = [];
var boxes = 0;
var loadType; //0 = longueur, 1 = largeur

var CreateBoxes = function (scene, trailer, items, pLoadType) {
  loadType = pLoadType;
  var boxList = [];
  for (var i = 0; i < items.length; i++) {
    var prod = items[i].product;
    var pos = items[i].position;
    var rot = items[i].rotated;
    materialExists(prod, scene);
    var name = "box" + (boxes + 1);
    var newBox = createBox(scene, trailer, name, prod.height, prod.width, prod.length, new BABYLON.Vector3(pos.x, pos.y, pos.z), getMaterial(prod), rot, prod.name);
    boxList.push(newBox);
    boxes += 1;
  }
  return boxList;
}

var createBox = function (pScene, trailer, pName, pHeight, pWidth, pLength, pPosition, mat, rotated, name) {
  var drawWidth = getWidth(pLength, pWidth, rotated);
  drawWidth -= 0.1;
  var drawDepth = getDepth(pLength, pWidth, rotated);
  drawDepth -= 0.1;
  pHeight -= 0.1;
  var box = BABYLON.MeshBuilder.CreateBox(pName, { height: pHeight, width: drawWidth, depth: drawDepth }, pScene);
  box.setPivotMatrix(BABYLON.Matrix.Translation(-trailer.length / 2 + drawWidth / 2, -trailer.height / 2 + pHeight / 2, -trailer.width / 2 + drawDepth / 2), false);
  box.parent = trailer.object;
  box.position = pPosition;
  box.material = mat;
  WriteTextOnBox(box, name, pScene);
  return box;
}

var getWidth = function (pLength, pWidth, rotated) {
  var width;
  if (loadType == 0) { //LENGHT
    if (rotated) {
      width = pWidth;
    }
    else {
      width = pLength;
    }
  }
  else if (loadType == 1) { //WIDTH
    if (rotated) {
      width = pLength;
    }
    else {
      width = pWidth;
    }
  }
  return width;
}

var getDepth = function (pLength, pWidth, rotated) {
  var depth;
  if (loadType == 0) { //LENGHT
    if (rotated) {
      depth = pLength;
    }
    else {
      depth = pWidth;
    }
  }
  else if (loadType == 1) { //WIDTH
    if (rotated) {
      depth = pWidth;
    }
    else {
      depth = pLength;
    }
  }
  return depth;
}