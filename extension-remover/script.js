document.getElementById('openExtensions').addEventListener('click', () => {
  alert("Opening chrome://extensions — you may need to remove extensions manually.");
  window.location.href = 'chrome://extensions';
});

// Simulated detection (real detection isn’t possible in a sandbox)
document.getElementById('status').textContent = 'Some extensions may be removable.';
