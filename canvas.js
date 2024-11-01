const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Функція для малювання осей
function drawAxes() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2); // Вісь X
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);  // Вісь Y
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Позначки X та Y
    ctx.font = "20px Arial";
    ctx.fillText("X", canvas.width - 20, canvas.height / 2 - 10);
    ctx.fillText("Y", canvas.width / 2 + 10, 20);
}

// Функція для малювання прямокутників
function drawRectangles(scale) {
    ctx.fillStyle = 'blue';

    // Лівий низ 1 (залишаємо без зміни)
    ctx.fillRect(100, 349, 100, 100);

    // Лівий низ 2 (збільшується)
    ctx.fillRect(200 * scale, 250 * scale, 100 * scale, 100 * scale);

    // Лівий верх (залишаємо без зміни)
    ctx.fillRect(200, 50, 100, 100);

    // Лівий верх біля кола (залишаємо без зміни)
    ctx.fillRect(400, 100, 200, 100);

    // Лівий низ біля кола (залишаємо без зміни)
    ctx.fillRect(440, 300, 100, 100);
    
    // Правий низ біля кола (збільшується)
    ctx.fillRect(660 * scale, 300 * scale, 100 * scale, 100 * scale);

    // Правий верх біля кола (залишаємо без зміни)
    ctx.fillRect(660, 100, 100, 100);
}

// Функція для малювання кола
function drawCircles(scale) {
    ctx.fillStyle = 'red';
    
    // Ліве коло (залишаємо без зміни)
    ctx.beginPath();
    ctx.arc(200, 150, 100, 0, Math.PI * 2);
    ctx.fill();

    // Праве велике коло (збільшується)
    ctx.beginPath();
    ctx.arc(600 * scale, 250 * scale, 150 * scale, 0, Math.PI * 2);
    ctx.fill();
}

// Функція для малювання еліпса (залишаємо без зміни)
function drawEllipse() {
    ctx.fillStyle = 'blue';
    
    // Овал
    ctx.beginPath();
    ctx.ellipse(300, 400, 100, 50, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Змінні для анімації
let moveOffset = 0;
let scale = 1;
let scaleDirection = 1;  // Напрямок зміни розміру (1 - збільшення, -1 - зменшення)

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawAxes();
    
    // Анімація переміщення фігур і зміни їх розміру
    ctx.save();
    ctx.translate(moveOffset, 0);  // Рухаємо фігури вправо
    
    // Малюємо прямокутники з частковим збільшенням
    drawRectangles(scale);
    
    // Малюємо кола з частковим збільшенням
    drawCircles(scale);
    
    // Малюємо еліпс без збільшення
    drawEllipse();
    
    ctx.restore();

    // Збільшуємо або зменшуємо розмір фігур
    scale += 0.004 * scaleDirection;

    // Якщо досягли певного розміру, змінюємо напрямок
    if (scale > 1.5 || scale < 0.5) {
        scaleDirection *= -1;
    }

    moveOffset += 2;  // Крок руху

    if (moveOffset > canvas.width / 2) {
        moveOffset = 0;  // Починаємо з початку
    }

    requestAnimationFrame(animate);
}

// Початкова побудова осей та фігур
drawAxes();
drawRectangles(1);
drawCircles(1);
drawEllipse();

// Запуск анімації
animate();
