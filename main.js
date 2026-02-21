const generateBtn = document.getElementById('generate-btn');
const numberContainer = document.querySelector('.number-container');
const historyList = document.getElementById('history-list');
const themeToggle = document.getElementById('theme-toggle');

// Theme toggle logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '라이트 모드';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggle.textContent = '라이트 모드';
    } else {
        themeToggle.textContent = '다크 모드';
    }
    localStorage.setItem('theme', theme);
});

generateBtn.addEventListener('click', async () => {
    // UI Feedback: Disable button and show "Thinking"
    generateBtn.disabled = true;
    const originalText = generateBtn.textContent;
    generateBtn.textContent = '번호 생성 중...';
    generateBtn.classList.add('glow');
    
    numberContainer.innerHTML = '';
    
    // Simulate AI "Thinking" time
    await new Promise(resolve => setTimeout(resolve, 800));

    for (let s = 0; s < 5; s++) {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        const setDiv = document.createElement('div');
        setDiv.classList.add('lotto-set');
        numberContainer.appendChild(setDiv);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const circle = document.createElement('div');
                circle.classList.add('number');
                circle.textContent = number;
                setDiv.appendChild(circle);
                
                // If it's the last number of the last set, restore the button
                if (s === 4 && index === sortedNumbers.length - 1) {
                    generateBtn.disabled = false;
                    generateBtn.textContent = originalText;
                    generateBtn.classList.remove('glow');
                }
            }, (s * 600) + (index * 100)); // Staggered entry animation across sets
        });

        const historyItem = document.createElement('li');
        historyItem.textContent = `세트 ${s + 1}: ${sortedNumbers.join(', ')}`;
        historyList.prepend(historyItem);
    }
});
