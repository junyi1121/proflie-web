// 🎯 목표 날짜 설정 (예: 2026년 1월 1일)
const targetDate = new Date("2026-02-18");

function updateDDay() {
  const today = new Date();
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const dDayText = document.getElementById("dDayText");

  if (diffDays > 0) {
    dDayText.innerText = `D-${diffDays}`;
  } else if (diffDays === 0) {
    dDayText.innerText = "D-DAY 🎉";
  } else {
    dDayText.innerText = `D+${Math.abs(diffDays)}`;
  }
}

updateDDay();

const celebrateBtn = document.getElementById("celebrateBtn");
const celebrateMsg = document.getElementById("celebrateMsg");

celebrateBtn.addEventListener("click", () => {
  celebrateMsg.style.display = "block";
  celebrateBtn.textContent = "💙 고마워요!";
  celebrateBtn.disabled = true;
});

