// Определение набора символов
const CHARACTERS =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン";

// Определение класса Column
export class Column {
  constructor(x, fontSize, canvasHeight, context) {
    this.x = x;
    this.y = 0;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.context = context;
  }

  // Метод для отрисовки символа в колонне
  drowSymbol() {
    if (this.y === 0 && Math.random() < 0.98) {
      return;
    }

    // Выбор случайного символа из CHARACTERS
    const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
    const symbol = CHARACTERS[characterIndex];

    // Отрисовка символа на canvas
    this.context.fillText(symbol, this.x, this.y);

    // Обработка случая, когда символ доходит до нижней границы
    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}
