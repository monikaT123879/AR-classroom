AFRAME.registerComponent('pour-cuso4', {
  init: function () {
    this.el.addEventListener('click', () => {

      // Tilt powder
      this.el.setAttribute('animation__tilt', {
        property: 'rotation',
        to: '0 0 -60',
        dur: 800
      });

      // Move down
      this.el.setAttribute('animation__move', {
        property: 'position',
        to: '0 -0.7 -1',
        dur: 1000,
        delay: 800
      });

      // Disappear
      setTimeout(() => {
        this.el.setAttribute('visible', 'false');
      }, 1800);
    });
  }
});