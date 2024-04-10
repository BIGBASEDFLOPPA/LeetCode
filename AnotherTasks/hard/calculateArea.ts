// Определите класс Rectangle с конструктором, принимающим ширину и высоту.
// Добавьте метод calculateArea, который возвращает площадь прямоугольника. Используйте синтаксис ES6 классов.

class Rectangle {
    private widht: any;
    private height: any;

    constructor(width: number, height: number) {
        this.widht = width
        this.height = height
    }

    calculateArea() {
        return this.widht * this.height
    }
}

const rectangle = new Rectangle(10, 20)
console.log(rectangle.calculateArea());
