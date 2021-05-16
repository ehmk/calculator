let operationsCount = 0;
let newOperation = false;
let currentOperation;
let lastInput;
let lastOperation;
let currentTotal = 0;
let lockedValue;
let currentValue;
let lockNegative = false;

const buttons = {
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
    additionButton: document.querySelector('#addition-button'),
    subtractionButton: document.querySelector('#subtraction-button'),
    multiplicationButton: document.querySelector('#multiplication-button'),
    divisionButton: document.querySelector('#division-button'),
    equalityButton: document.querySelector('#equality-button'),
    operateButton: document.querySelector('#operate-button'),
    clearButton: document.querySelector('#clear-button'),
    decimalButton: document.querySelector('#decimal-button'),
    allClearButton: document.querySelector('#all-clear-button'),
    negativeButton: document.querySelector('#negative-button'),
};

buttons.oneButton.addEventListener('click', () => {
    domOperations.press('1', 'one');
});
buttons.twoButton.addEventListener('click', () => {
    domOperations.press('2', 'two');
});
buttons.threeButton.addEventListener('click', () => {
    domOperations.press('3', 'three');
});
buttons.fourButton.addEventListener('click', () => {
    domOperations.press('4', 'four');
});
buttons.fiveButton.addEventListener('click', () => {
    domOperations.press('5', 'five');
});
buttons.sixButton.addEventListener('click', () => {
    domOperations.press('6', 'six');
});
buttons.sevenButton.addEventListener('click', () => {
    domOperations.press('7', 'seven');
});
buttons.eightButton.addEventListener('click', () => {
    domOperations.press('8', 'eight');
});
buttons.nineButton.addEventListener('click', () => {
    domOperations.press('9', 'nine');
});
buttons.zeroButton.addEventListener('click', () => {
    domOperations.press('0', 'zero');
});
buttons.additionButton.addEventListener('click', () => {
    domOperations.operate('addition');
});
buttons.subtractionButton.addEventListener('click', () => {
    domOperations.operate('subtraction');
});
buttons.multiplicationButton.addEventListener('click', () => {
    domOperations.operate('multiplication');
});
buttons.divisionButton.addEventListener('click', () => {
    domOperations.operate('division');
});
buttons.equalityButton.addEventListener('click', () => {
    domOperations.equality();
});
buttons.clearButton.addEventListener('click', () => {
    domOperations.clearScreen();
});
buttons.allClearButton.addEventListener('click', () => {
    domOperations.resetAll();
});
buttons.decimalButton.addEventListener('click', () => {
    domOperations.appendDecimal();
});
buttons.negativeButton.addEventListener('click', () => {
    domOperations.toggleNegative();
});

const lowLevelOperations = {
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
        if(operation === 'addition') {
            return this.add(a, b);
        } else if (operation === 'subtraction') {
            return this.subtract(a, b);
        } else if (operation === 'multiplication') {
            return this.multiply(a, b);
        } else if (operation === 'division') {
            return this.divide(a, b);
        } else {
            return 'ERROR: Something went wrong.';
        }
    },
};

const domOperations = {
    operate: function(operation) { // operation: addition, subtraction, multiplication, division
        newOperation = true;
        currentOperation = operation;
        currentValue = parseFloat(currentValue);
        lockedValue = parseFloat(lockedValue);
        if (lastInput === operation) {
            return;
        }
        
        if (lastOperation === 'equality') {
            this.lockCurrentTotal();
            lastOperation = operation;
            operationsCount++;
            return;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else if (operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(operation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            this.lockCurrentValue();
            operationsCount++;
        }
        lastInput = operation;
        lastOperation = operation;
        lockNegative = false;
    },
    equality: function() {
        newOperation = true;
        currentOperation = 'equality';
        currentValue = parseFloat(currentValue);
        lockedValue = parseFloat(lockedValue);
        if (lastInput === 'equality') {
            return;
        } else if (operationsCount < 1) {
            return;
        } else {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        }
        lastOperation = 'equality';
        lastInput = 'equality';
    },
    appendNum: function(num) {
        if (currentValue === undefined) {
            currentValue = num;
            return;
        }

        currentValue += num;
    },
    displayCurrentTotal: function() {
        if (operationsCount >= 1) {
            domOperations.setScreenText(currentTotal);
        } else {
            return;
        }
    },
    lockCurrentValue: function() {
        lockedValue = currentValue;
        currentValue = undefined;
    },
    lockCurrentTotal: function() {
        lockedValue = currentTotal;
        currentValue = undefined;
    },
    clearValues: function() {
        lockedValue = undefined;
        currentValue = undefined;
    },
    resetAll: function() {
        domOperations.setScreenText('');
        operationsCount = 0;
        currentTotal = 0;
        currentOperation = '';
        lockedValue = undefined; 
        currentValue = undefined;
        lastInput = 'all clear';
        lastOperation = '';
        newOperation = false;
        lockNegative = false;
    },
    clearScreen: function() {
        domOperations.setScreenText('');
        currentValue = undefined;
        lastInput = 'clear';
    },
    appendDecimal: function() {
        if (lastInput === 'equality') {
            currentValue = '0.';
            domOperations.setScreenText(currentValue);
            return;
        }
        if (currentValue === undefined) {
            currentValue = '-';
            domOperations.setScreenText(currentValue);
            return;
        }
        if(currentValue % 1 !== 0 && currentValue !== '-') {
            return;
        } else {
            domOperations.appendScreenText('.0');
            currentValue = String(currentValue);
            currentValue += '.';
        }
        lastInput = 'decimal';
    },
    toggleNegative: function() {
        if (lockNegative === true) {
            lockNegative = false;
        } else if (lockNegative === false) {
            lockNegative = true;
        }
        if (lastInput === 'equality') {
            currentValue = '-';
            domOperations.setScreenText(currentValue);
            return;
        }
        if (currentValue === undefined) {
            currentValue = '-';
            domOperations.setScreenText(currentValue);
            return;
        }

        if (lockNegative === true) {
            currentValue = -Math.abs(currentValue);
            domOperations.setScreenText(currentValue);
            return;
        } else if (lockNegative === false) {
            currentValue = Math.abs(currentValue);
            domOperations.setScreenText(currentValue);
            return;
        }
    },
    convertNumber(num) {
        if (num > 0) {
            return -Math.abs(num);
        } else if (num < 0) {
            return Math.abs(num);
        }
    },
    appendScreenText: function(a) {
        this.screenValue.textContent += a;
    },
    setScreenText: function(a) {
        this.screenValue.textContent = a;
    },
    screenValue: document.querySelector('#screen-value'),
    press: function(num, numString) {
        if (newOperation === true) {
            newOperation = false;
        }
        if (currentValue === undefined) {
            currentValue = '';        
        }
        currentValue += num;
        domOperations.setScreenText(currentValue);
        lastInput = numString;

        // if (lockNegative === true) {
        //     currentValue = -Math.abs(currentValue);
        //     domOperations.setScreenText(currentValue);
        //     return;
        // } else if (lockNegative === false) {
        //     currentValue = Math.abs(currentValue);
        //     domOperations.setScreenText(currentValue);
        //     return;
        // }
    },
};

















