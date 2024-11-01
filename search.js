// Функція для підрахунку кількості слів у тексті
function countWords(text) {
    // Використовуємо регулярний вираз для пошуку слів
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
}

// Обробка події натискання на кнопку "Пошук інформації"
document.getElementById('searchBtn').onclick = function() {
    const inputText = document.getElementById('inputText').value;

    // Якщо текст введено, виконуємо пошук слів
    if (inputText.trim()) {
        const wordCount = countWords(inputText);
        document.getElementById('resultBox').innerText = `Кількість слів: ${wordCount}`;
    } else {
        document.getElementById('resultBox').innerText = 'Будь ласка, введіть текст для аналізу.';
    }
};