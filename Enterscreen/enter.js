const validCodes = [
  "FX29XK18V5Z93QJ", "T7M5E8LZ2X91VKD", "R9QP3W2A7DJ0XMN",
  "TE43WBDHFN9L0ER", "D0-NOT-D0-1T", "Y3333T36465757",
  "@$&*15253!8375", "HAUNTEDHUNT3EER", "WOWIMHAPPY234", "WO0O0O0909O0W",
  "HELLO2374658475", "7564756R!!/;=+-;:", "MAG1C32R&56R775", "VAN1SHEDX920DK3",
  "TR4C3LESS559KAD", "9XW8VZT26QJU45L", "L0STGAT3Z198K5T", "F1NALEX1T994PZW",
  "GHOSTNODE712FEK", "ECHO-D3EP4B5526", "ZQ71PAK39LY09TR", "J9KR6UV28MXP1QZ",
  "TK13DJ72NX74WDQ", "NORETRYFAD378XZ", "CRYPTDOOR1QX984", "QU1ETZONE953KL1",
  "TOMBW1RE6667ZFD", "S1LEN7SYNT4X002", "DEATHP1NG78VCSD", "ABSENCEKEY9381ZF"
];

const jumpscareCode = "NECR0CLASH666";

function checkCode() {
  const input = document.getElementById('codeInput').value.trim().toUpperCase();

  if (input === jumpscareCode) {
    // SCP jumpscare
    document.getElementById('jumpscare').style.display = 'flex';
    document.getElementById('scream').play();
    return;
  }

  if (validCodes.includes(input)) {
    // Cloak tab and redirect
    const newWin = window.open("about:blank", "_blank");
    newWin.document.write("<script>location.href='homepage.html'</script>");
    window.close();
  } else {
    document.getElementById('errorMsg').innerText = "404 - found-a-lier.";
    // Optional: play error sound or flicker screen
  }
}
