// Получаем элементы страницы
const welcomePage = document.getElementById('welcome-page');
const mainPage = document.getElementById('main-page');
const nextButton = document.getElementById('next-btn');
const usernameInput = document.getElementById('username');
const greeting = document.getElementById('greeting');

// Обработка клика по кнопке "Далее"
nextButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    // Проверяем, что имя не пустое
    if (username) {
        // Скрываем страницу приветствия и показываем основную страницу
        welcomePage.style.display = 'none';
        mainPage.style.display = 'block';

        // Отображаем приветствие с именем пользователя
        greeting.textContent = `Привет, ${username}!`;
    } else {
        alert("Пожалуйста, введите ваше имя.");
    }
});
