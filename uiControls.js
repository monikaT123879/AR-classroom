// ===============================
// UI CONTROLS – AR CHEMISTRY LAB
// ===============================

// Currently selected object
let selectedObject = null;

// Register A-Frame component (for confirmation & future use)
AFRAME.registerComponent('ui-controls', {
  init: function () {
    console.log("UI Controls Loaded Successfully");
  }
});

// Function called when UI button is clicked
function selectObject(objectName) {
  selectedObject = objectName;

  
  console.log("Selected Object:", selectedObject);

  // Optional user feedback
  alert(objectName.toUpperCase() + " selected.\nTap on the detected plane to place it.");
}

// Helper function to get selected object (used by modelPlacement.js)
function getSelectedObject() {
  return selectedObject;
}

// Optional: Reset selection
function clearSelection() {
  selectedObject = null;
  alert("Selection cleared");
}