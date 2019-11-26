/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
// Add the mouth openness signal to the watch view
const FaceTracking = require('FaceTracking');

Diagnostics.watch("Mouth Openness - ", FaceTracking.face(0).mouth.openness);
//const plane0 = Scene.root.find('plane0');

// Get the value of mouth openness when this line of code is executed
const mouthOpennessValue = FaceTracking.face(0).mouth.openness.pinLastValue();
Diagnostics.log(mouthOpennessValue);// Log the value


//Not working
//Diagnostics.log('plane0.Properties.x is ');
//Diagnostics.log(plane0.transform.x);

// Avoidable use of subscribe 
FaceTracking.face(0).mouth.openness.monitor().subscribe(function(event) {
    if(event.newValue > 0.5) {
        //plane0.hidden = true;
    } else {
        //plane0.hidden = false;
    }
  });

// How to access class properties (uncomment line below to activate)
// const directionalLightIntensity = directionalLight.intensity;

const TouchGestures = require('TouchGestures');

// Subscribe to tap gestures
var subscription = TouchGestures.onTap().subscribe(function (gesture) {
    // Log a message to the console when a tap is detected
    Diagnostics.log('tap gesture detected');
});
// Unsubscribe from tap gestures
//subscription.unsubscribe();

// How to log messages to the console (uncomment line below to activate)
Diagnostics.log('Console message logged from the script.');
