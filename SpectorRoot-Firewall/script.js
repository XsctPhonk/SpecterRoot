// Escape Combo Feature
function setupEscapeCombo() {
  let escapeUrl = '';
  const input = document.getElementById('escape-url');
  input.addEventListener('input', (e) => {
    escapeUrl = e.target.value;
  });
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '`' && escapeUrl) {
      window.location.href = escapeUrl;
    }
  });
}

// Proxy Search Engine Feature
function setupProxySearch() {
  window.doProxySearch = function () {
    const base = document.getElementById('proxy-url').value;
    const query = document.getElementById('search-query').value;
    if (base && query) {
      const finalUrl = `${base}/search?q=${encodeURIComponent(query)}`;
      window.open(finalUrl, '_blank');
    }
  }
}

// Tab Cloaker Feature
function setupTabCloaker() {
  window.cloakTab = function () {
    const title = document.getElementById('tab-title').value;
    const icon = document.getElementById('tab-icon').value;
    if (title) document.title = title;
    if (icon) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = icon;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }
}

// Breach Mode Feature
function setupBreachMode() {
  window.launchBreach = function () {
    const url = document.getElementById('breach-url').value;
    if (url) {
      document.getElementById('breach-frame').innerHTML = `<iframe src="${url}" frameborder="0"></iframe>`;
    }
  }
}

// Initialize All Features
window.onload = () => {
  setupEscapeCombo();
  setupProxySearch();
  setupTabCloaker();
  setupBreachMode();
};
