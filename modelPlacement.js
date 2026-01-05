AFRAME.registerComponent('place-model', {
  init: function () {

    this.el.sceneEl.addEventListener('click', (evt) => {

      let obj = getSelectedObject();
      if (!obj) {
        alert("Select an object first");
        return;
      }

      // 👉 Tap position (raycast hit)
      let intersection = evt.detail.intersection;
      if (!intersection) {
        console.log("No surface detected");
        return;
      }

      let pos = intersection.point;

      let model = document.createElement('a-entity');

      // -------- MODEL & SCALE --------
      if (obj === 'beaker') {
        model.setAttribute('gltf-model', '#beakerModel');
        model.setAttribute('scale', '0.05 0.05 0.05');
      }

      else if (obj === 'testtube') {
        model.setAttribute('gltf-model', '#testtubeModel');
        model.setAttribute('scale', '0.02 0.08 0.02');
      }

      else if (obj === 'coppersulphate') {
        model.setAttribute('gltf-model', '#cuso4Model');
        model.setAttribute('scale', '0.02 0.01 0.02');
        model.setAttribute('pour-cuso4', '');
      }

      // -------- POSITION (tap location) --------
      model.setAttribute('position', {
        x: pos.x,
        y: pos.y,
        z: pos.z
      });

      // -------- INTERACTION --------
      model.setAttribute('rotate-on-tap', '');
      model.classList.add('placed-model');

      this.el.sceneEl.appendChild(model);
    });
  }
});