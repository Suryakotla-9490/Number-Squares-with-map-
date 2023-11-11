const numbers = [1, 2, 3, 4, 5];

document.addEventListener('DOMContentLoaded', () => {
    renderNumbers();
});

function renderNumbers() {
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = '';

    numbers.map(num => {
        const listItem = document.createElement('li');
        listItem.textContent = num * num;
        numberList.appendChild(listItem);
    });
}
