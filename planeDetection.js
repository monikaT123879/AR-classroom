AFRAME.registerComponent('detect-plane', {
  init: function () {
    console.log("Plane Detection Component Loaded");

    const scene = document.querySelector('a-scene');

    const plane = document.createElement('a-plane');
    plane.setAttribute('rotation', '-90 0 0');
    plane.setAttribute('width', '5');
    plane.setAttribute('height', '5');
    plane.setAttribute('position', '0 0 -3');
    plane.setAttribute(
      'material',
      'color: white; opacity: 0.3; wireframe: true'
    );

    scene.appendChild(plane);

    // Show message
    const msg = document.getElementById("planeMsg");
    msg.style.display = "block";

    console.log("Plane detected & message shown");
  }
});