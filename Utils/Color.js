function materialExists(prod, pScene) {
  var colorMode = GetColorMode();
  var exists = false;
  if(colorMode == "Produit"){
    for (var i = 0; i < materials.length; i++) {
      if (materials[i].product == prod.name) {
        exists = true;
      }
    }
    if (!exists) {
      createTexture(pScene, prod.name);
    } 
  }
  else if(colorMode == "Drop"){
    for (var i = 0; i < materials.length; i++) {
      if (materials[i].product == prod.dropNumber) {
        exists = true;
      }
    }
    if (!exists) {
      createTexture(pScene, prod.dropNumber);
    } 
  }
}

var getMaterial = function (prod) {
  var colorMode = GetColorMode();
  var mat;
  if(colorMode == "Produit"){
    for (var i = 0; i < materials.length; i++) {
      if (materials[i].product == prod.name) {
        mat = materials[i];
      }
    }
  }
  else if(colorMode == "Drop"){
    for (var i = 0; i < materials.length; i++) {
      if (materials[i].product == prod.dropNumber) {
        mat = materials[i];
      }
    }
  }
  return mat.mat;
}

var createTexture = function (pScene, pName) {
  var mat = new BABYLON.StandardMaterial(pName, pScene);
  mat.diffuseColor = new BABYLON.Color3(Math.random(), Math.random(), Math.random());
  materials.push(new Material(pName, mat));
  return mat;
}

class Material {
  constructor(product, mat) {
    this.product = product;
    this.mat = mat;
  }
}