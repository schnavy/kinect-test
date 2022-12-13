let kinectron = new Kinectron("77184d648920.ngrok.io");
kinectron.setKinectType("windows");
kinectron.makeConnection();

kinectron.startTrackedBodies(action);


const circle = document.querySelector("#circle")






function action(body) {
    console.log(body.joints[0].cameraZ);
    let depth = body.joints[0].cameraZ;
    let X = body.joints[0].cameraX
    circle.style.top = Math.floor(map(depth, 0, 5, 0, window.innerHeight)) + "px"
    circle.style.left = Math.floor(map(X, -1, 1, 0, window.innerWidth)) + "px"
    console.log(body.joints[0].cameraX);
}


function map(value, x1, y1, x2, y2) {
    return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
}