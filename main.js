function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true;  // 2 and 3 are prime numbers

    // Check for divisibility by 2 or 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check for divisibility by numbers from 5 to sqrt(num)
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

function checkPrime() {
    const number = parseInt(document.getElementById('prime').value);
    const result = document.getElementById('result');
    if (isNaN(number)) {
        result.textContent = 'Please enter a valid number.';
    } else if (isPrime(number)) {
        result.textContent = `${number} is prime!`;
    } else {
        result.textContent = `${number} is not prime.`;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('checkPrime').addEventListener('click', checkPrime);
});
