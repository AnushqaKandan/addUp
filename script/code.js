function calculate() {
    const numberInputs = document.querySelectorAll('.num');
    const numbers = Array.from(numberInputs).map(input => parseFloat(input.value));
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    
    document.getElementById('sum-of').innerText = sum;
}
