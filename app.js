displaySync = (data) => {
    setTimeout(() => console.log(data), 3000); //функция для "асинхронного" отображения данных с использованием setTimeout
}

console.log("Начало работы программы");
displaySync("Обработка данных...");
console.log("Завершение работы программы");