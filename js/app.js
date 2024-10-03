// Получаем элементы страницы
const welcomePage = document.getElementsByClassName("welcome-page-wrap")[0];
const mainPage = document.getElementsByClassName("main-page")[0];
const nextButton = document.getElementsByClassName("welcome-page__button")[0];
const usernameInput = document.getElementsByClassName(
  "welcome-page__input-username"
)[0];
const greeting = document.getElementsByClassName("greeting")[0];

// Обработка клика по кнопке "Далее"
nextButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();

  // Проверяем, что имя не пустое
  if (username) {
    // Скрываем страницу приветствия и показываем основную страницу
    welcomePage.style.display = "none";
    mainPage.style.display = "block";

    // Отображаем приветствие с именем пользователя
    greeting.textContent = `Привет, ${username}!`;
  } else {
    alert("Пожалуйста, введите ваше имя.");
  }
});
