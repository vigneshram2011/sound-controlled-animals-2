function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    console.log("ML5 version:", ml5.version);
    classifier = ml5.soundClassifier("", modelReady);

    function modelReady() {
        console.log("Model Ready!");
        classifier.classify(getUserMedia, gotResult);
    }

    function gotResult(error, result) {

    }
}