AFRAME.registerComponent('rotate-on-tap', {
  init: function () {
    this.el.addEventListener('click', () => {
      let rot = this.el.getAttribute('rotation');
      this.el.setAttribute('rotation', {
        x: rot.x,
        y: rot.y + 45,
        z: rot.z
      });
    });
  }
});