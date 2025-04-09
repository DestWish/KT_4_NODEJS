displaySync = (data) => {
    setTimeout(() => console.log(data), 3000); //функция для "асинхронного" отображения данных с использованием setTimeout
}

console.log("Начало работы программы");
displaySync("Обработка данных...");
setTimeout(() => {
    console.log("Обработка данных 2...");
}, 2000); //второй вызов setTimeout для имитации асинхронной обработки данных
console.log("Завершение работы программы");