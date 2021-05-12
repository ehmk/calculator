const operations = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    operate: function(operation, a, b) {
        if(operation === 'add') {
            return this.add(a, b);
        } else if (operation === 'subtract') {
            return this.subtract(a, b);
        } else if (operation === 'multiply') {
            return this.multiply(a, b);
        } else if (operation === 'divide') {
            return this.divide(a, b);
        } else {
            return 'ERROR: Something went wrong.';
        }
    },
};


const dom = {
    oneButton: document.querySelector('#one-button'),
    twoButton: document.querySelector('#two-button'),
    threeButton: document.querySelector('#three-button'),
    fourButton: document.querySelector('#four-button'),
    fiveButton: document.querySelector('#five-button'),
    sixButton: document.querySelector('#six-button'),
    sevenButton: document.querySelector('#seven-button'),
    eightButton: document.querySelector('#eight-button'),
    nineButton: document.querySelector('#nine-button'),
    zeroButton: document.querySelector('#zero-button'),
    clearButton: document.querySelector('#clear-button'),
};

let screenValue = document.querySelector('#screen-value');

dom.oneButton.addEventListener('click', () => screenValue.textContent += '1');
dom.twoButton.addEventListener('click', () => screenValue.textContent += '2');
dom.threeButton.addEventListener('click', () => screenValue.textContent += '3');
dom.fourButton.addEventListener('click', () => screenValue.textContent += '4');
dom.fiveButton.addEventListener('click', () => screenValue.textContent += '5');
dom.sixButton.addEventListener('click', () => screenValue.textContent += '6');
dom.sevenButton.addEventListener('click', () => screenValue.textContent += '7');
dom.eightButton.addEventListener('click', () => screenValue.textContent += '8');
dom.nineButton.addEventListener('click', () => screenValue.textContent += '9');
dom.zeroButton.addEventListener('click', () => screenValue.textContent += '0');
dom.clearButton.addEventListener('click', () => screenValue.textContent = '');




