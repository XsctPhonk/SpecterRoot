const validCodes = [
  "274816492748165", "839102748394102", "192837465564738",
  "550201293847110", "476382910374655", "998877665544321",
  "183746382910374", "812374650192837", "999888777666555",
  "111222333444555", "726381920384756", "847362910293847",
  "302948576293847", "128374650293847", "555444333222111"
];

const jumpscareCode = "000000000000000"; // Enter your real jumpscare code

function checkCode() {
  const input = document.getElementById("codeInput").value.trim();
  const feedback = document.getElementById("errorMessage");

  if (input === jumpscareCode) {
    // Display the jumpscare image directly
    document.body.innerHTML = `
      <style>
        body {
          margin: 0;
          background: black;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        img {
          width: 100%;
          max-width: 1000px;
          animation: flash 0.15s alternate infinite;
        }
        @keyframes flash {
          from { filter: brightness(1); }
          to { filter: brightness(4); }
        }
      </style>
      <img src="jumpscare.png" alt="JUMPSCARE">
    `;
  } else if (validCodes.includes(input)) {
    window.location.href = "../Homescreen/index.html";
  } else {
    feedback.textContent = "❌ 404 - Found a liar.";
  }
}

// Button click
document.getElementById("submitBtn").addEventListener("click", checkCode);

// Enter key
document.getElementById("codeInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") checkCode();
});

