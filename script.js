// Импорт класса Column из файла column.js
import { Column } from "./column.js";

// Получение элементов canvas и context
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Установка размеров canvas равными размерам окна
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Установка размера шрифта
const FONT_SIZE = 16;

// Создание массива колонн
const columns = [];
const columnsCount = canvas.width / FONT_SIZE;

// Инициализация массива колонн
for (let i = 0; i < columnsCount; i++) {
  columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
}

// Установка стиля шрифта
context.font = `bold ${FONT_SIZE}px monospace`;

// Создание объекта Column для демонстрации
const column = new Column(100, FONT_SIZE, canvas.height, context);

// Функция для анимации
function animate() {
  // Затемнение фона
  context.fillStyle = "rgba(0,0,0,0.05";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Установка цвета для символов
  context.fillStyle = "green";

  // Отрисовка символов в каждой колонне
  columns.forEach((column) => column.drowSymbol());

  // Запуск следующей анимации через 50 миллисекунд
  setTimeout(() => requestAnimationFrame(animate), 50);
}

// Запуск анимации
animate();
