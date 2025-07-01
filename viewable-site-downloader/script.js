function generateDownload() {
  const url = document.getElementById('siteUrl').value.trim();
  const status = document.getElementById('status');

  if (!url || !url.startsWith('http')) {
    status.textContent = "❌ Please enter a valid URL.";
    return;
  }

  const fileContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Downloaded Site Viewer</title>
      <style>
        html, body { margin: 0; padding: 0; height: 100%; }
        iframe { width: 100%; height: 100%; border: none; }
      </style>
    </head>
    <body>
      <iframe src="${url}" allowfullscreen></iframe>
    </body>
    </html>
  `;

  const blob = new Blob([fileContent], { type: 'text/html' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "viewable-site.html";
  downloadLink.click();

  status.textContent = "✅ File downloaded. Open it in your browser or upload to GitHub.";
}
