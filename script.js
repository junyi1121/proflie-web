const button = document.getElementById("helloBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "읽어주셔서 감사합니다 😊";
});
