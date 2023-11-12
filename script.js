function isPrime(num) {
    if (num <= 1 || !Number.isInteger(num)) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes() {
    const userInput = document.getElementById('userInput').value;
    const resultElement = document.getElementById('result');

    const inputNumber = parseFloat(userInput);
    if (isNaN(inputNumber) || inputNumber < 2 || !Number.isInteger(inputNumber)) {
        resultElement.innerHTML = '適切な整数を入力してください（2以上の整数）。';
        return;
    }

    if (isPrime(inputNumber)) {
        resultElement.innerHTML = `${inputNumber} は素数です。`;
    } else {
        let smallerPrime = Math.floor(inputNumber) - 1;
        while (!isPrime(smallerPrime) && smallerPrime > 1) {
            smallerPrime--;
        }

        let largerPrime = Math.ceil(inputNumber) + 1;
        while (!isPrime(largerPrime)) {
            largerPrime++;
        }

        resultElement.innerHTML = `${inputNumber} は素数ではありません。<br>(${smallerPrime}) と (${largerPrime}) の間の合成数です。`;
    }
}
