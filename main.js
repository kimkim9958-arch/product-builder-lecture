const generateBtn = document.getElementById('generate-btn');
const numberContainer = document.querySelector('.number-container');
const historyList = document.getElementById('history-list');

generateBtn.addEventListener('click', () => {
    numberContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        numberContainer.appendChild(circle);
    });

    const historyItem = document.createElement('li');
    historyItem.textContent = sortedNumbers.join(', ');
    historyList.appendChild(historyItem);
});
