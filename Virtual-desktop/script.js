// script.js
function loadApp(app) {
  document.getElementById("appstore").style.display = "none";
  const frame = document.getElementById("vmFrame");
  const apps = {
    vpn: "https://staticgone.vercel.app",
    gamestore: "https://gx.games",
    browser: "https://www.google.com",
    youtube: "https://www.youtube.com"
  };
  frame.src = apps[app];
}

function showAppStore() {
  document.getElementById("vmFrame").src = "about:blank";
  document.getElementById("appstore").style.display = "block";
}

function promptInstall(url) {
  const choice = confirm("Install on real computer? Click 'Cancel' to install on virtual desktop.");
  if (choice) {
    window.open(url, '_blank');
  } else {
    document.getElementById("vmFrame").src = url;
  }
}
