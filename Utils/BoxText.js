function WriteTextOnBox(box, name, scene) {
    var span = box.getBoundingInfo().boundingBox.extendSize;
    var boundingbox = box.getBoundingInfo().boundingBox;
    var x = 2 * boundingbox.extendSize.x;
    var y = 2 * boundingbox.extendSize.y;
    var plane1 = BABYLON.MeshBuilder.CreatePlane("plane", { width: x, height: y }, scene);
    plane1.parent = box;
    plane1.position = new BABYLON.Vector3(0, 0, -span.z - .01);
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane1, 700, 700);
    var rectangle = new BABYLON.GUI.Rectangle("rect");
    rectangle.width = "700px";
    rectangle.height = "700px";
    advancedTexture.addControl(rectangle);
    var text1 = new BABYLON.GUI.TextBlock("text1");
    text1.fontFamily = "Arial";
    text1.textWrapping = true;
    text1.text = name;
    text1.color = "black";
    text1.fontSize = "140px";
    rectangle.addControl(text1);
    for (var i = 0; i <= 4; ++i) {
        var newInstance = plane1.createInstance("index: " + i);
        newInstance.parent = box;
        switch (i) {
            case 0:
                newInstance.position = new BABYLON.Vector3(0, 0, span.z + 0.01);
                newInstance.rotate(BABYLON.Axis.Y, Math.PI)
                break;
            case 1:
                //newInstance.position = new BABYLON.Vector3(-span.x - 0.01, 0, 0);
                //newInstance.rotate(BABYLON.Axis.Y, 90 * Math.PI / 180);
                break;
            case 2:
                //newInstance.position = new BABYLON.Vector3(span.x + 0.01, 0, 0);
                //newInstance.rotate(BABYLON.Axis.Y, 270 * Math.PI / 180);
                break;
            case 3:
                newInstance.position = new BABYLON.Vector3(0, span.y + 0.01, 0);
                newInstance.rotate(BABYLON.Axis.X, 90 * Math.PI / 180);
                break;
            case 4:
                newInstance.position = new BABYLON.Vector3(0, -span.y - 0.01, 0);
                newInstance.rotate(BABYLON.Axis.X, 270 * Math.PI / 180)
                break;
        }
    }
}