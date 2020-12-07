
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

Scene.root.findFirst('canvas0').then(function (r) {
    const canvasBounds = r.bounds;
    Patches.inputs.setScalar('bar_top_alt', canvasBounds.height.mul(.7));
    Patches.inputs.setScalar('horizontal_center', canvasBounds.width.mul(.5));
    Patches.inputs.setScalar('vertical_center', canvasBounds.height.mul(.5));
    const barWidthRatio = .2;
    Patches.inputs.setScalar('bar_width', canvasBounds.width.mul(barWidthRatio));
    Patches.inputs.setScalar('bar_height', canvasBounds.width.mul(.1));
    Patches.inputs.setScalar('offset', canvasBounds.width.mul(barWidthRatio/-2));
    Scene.root.findFirst('positionTracker').then(function (result) {
        result.worldTransform.position.x.monitor().subscribe(function (value) {
            const barLeft = value.newValue;
            Patches.inputs.setScalar('bar_left', barLeft * -1000);
        });
    });
    
    Scene.root.findFirst('verticalTracker').then(function (result) {
        result.worldTransform.position.y.monitor().subscribe(function (value) {
            const barTop = value.newValue;
            Patches.inputs.setScalar('bar_top', barTop * -1000);
        });
    });
});

// Enables async/await in JS [part 1]
(async function() {

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const [directionalLight] = await Promise.all([
//   Scene.root.findFirst('directionalLight0')
// ]);

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');

// Enables async/await in JS [part 2]
})();
