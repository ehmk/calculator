// Add functionality for negative numbers.
// Test thoroughly. Keep an eye out for bugs.

let operationsCount = 0;
let newOperation = false;
let currentOperation;
let lastInput;
let lastOperation;
let currentTotal = 0;
let lockedValue = 0;
let currentValue = 0;

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
    addition: function() {
        newOperation = true;
        currentOperation = 'addition';
        if (lastInput === 'subtraction' || lastInput === 'multiplication' || lastInput === 'division') {
            operationsCount = 0;
            currentValue = lockedValue;
            lockedValue = 0;
        }
        if (lastInput === 'addition') {
            return;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else if (operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate('addition', lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            this.lockCurrentValue();
            operationsCount++;
        }
        lastInput = 'addition';
        lastOperation = 'addition';
    },
    subtraction: function() {
        newOperation = true;
        currentOperation = 'subtraction';
        if (lastInput === 'addition' || lastInput === 'multiplication' || lastInput === 'division') {
            operationsCount = 0;
            currentValue = lockedValue;
            lockedValue = 0;
        }
        if (lastInput === 'subtraction') {
            return;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else if (operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate('subtraction', lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            this.lockCurrentValue();
            operationsCount++;
        }
        lastInput = 'subtraction';
        lastOperation = 'subtraction';
    },
    multiplication: function() {
        newOperation = true;
        currentOperation = 'multiplication';
        if (lastInput === 'addition' || lastInput === 'subtraction' || lastInput === 'division') {
            operationsCount = 0;
            currentValue = lockedValue;
            lockedValue = 0;
        }
        if (lastInput === 'equality') {
            currentValue = 1;
        }
        if (lastInput === 'multiplication') {
            return;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else if (operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate('multiplication', lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            this.lockCurrentValue();
            operationsCount++;
        }
        lastInput = 'multiplication';
        lastOperation = 'multiplication';
    },
    division: function() {
        newOperation = true;
        currentOperation = 'division';
        if (lastInput === 'addition' || lastInput === 'subtraction' || lastInput === 'multiplication') {
            operationsCount = 0;
            currentValue = lockedValue;
            lockedValue = 0;
        }
        if (lastInput === 'equality') {
            currentValue = 1;
        }
        if (lastInput === 'division') {
            return;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else if (operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate('division', lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            this.lockCurrentValue();
            operationsCount++;
        }
        lastInput = 'division';
        lastOperation = 'division';
    },
    equality: function() {
        newOperation = true;
        if (lastInput === 'equality') {
            return;
        } else {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        }
        lastOperation = currentOperation;
        lastInput = 'equality';
    },
    appendNum: function(num) {
        if (num === '-') {
            currentValue = '-';
            return;
        }
        currentValue += num; 
        if (num !== '.') {
            lockedValue = parseFloat(lockedValue);
            currentValue = parseFloat(currentValue);
        }
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
        currentValue = 0;
    },
    lockCurrentTotal: function() {
        lockedValue = currentTotal;
        currentValue = 0;
    },
    clearValues: function() {
        lockedValue = 0;
        currentValue = 0;
    },
    resetAll: function() {
        domOperations.setScreenText('');
        operationsCount = 0;
        currentTotal = 0;
        currentOperation = '';
        lockedValue = 0; 
        currentValue = 0;
        lastInput = 'all clear';
        lastOperation = '';
        newOperation = false;
    },
    clearScreen: function() {
        domOperations.setScreenText('');
        currentValue = 0;
        lastInput = 'clear';
    },
    appendDecimal: function() {
        if(this.screenValue.textContent.includes(".") || newOperation === true) {
            return;
        } else {
            domOperations.appendScreenText('.');
            this.appendNum('.');
        }
        lastInput = 'decimal';
    },
    toggleNegative: function() {
        if (lastInput === 'equality') {
            if (lockedValue < 0) {
                lockedValue = Math.abs(lockedValue);
                currentTotal = lockedValue;
                domOperations.setScreenText(lockedValue);
                return;
            } else {
                lockedValue = -Math.abs(lockedValue);
                currentTotal = lockedValue;
                domOperations.setScreenText(lockedValue);
                return;
            }
        }

        if (currentValue < 0) {
            currentValue = Math.abs(currentValue);
            domOperations.setScreenText(currentValue);
        } else {
            currentValue = -Math.abs(currentValue);
            domOperations.setScreenText(currentValue);
        }
        lastInput = 'negativeToggle';
    },
    appendScreenText: function(a) {
        this.screenValue.textContent += a;
    },
    setScreenText: function(a) {
        this.screenValue.textContent = a;
    },
    screenValue: document.querySelector('#screen-value'),
};



buttons.oneButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('1');
    domOperations.setScreenText(currentValue);
    lastInput = 'one';
});
buttons.twoButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('2');
    domOperations.setScreenText(currentValue);
    lastInput = 'two';
});
buttons.threeButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('3');
    domOperations.setScreenText(currentValue);
    lastInput = 'three';
});
buttons.fourButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('4');
    domOperations.setScreenText(currentValue);
    lastInput = 'four';
});
buttons.fiveButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('5');
    domOperations.setScreenText(currentValue);
    lastInput = 'five';
});
buttons.sixButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('6');
    domOperations.setScreenText(currentValue);
    lastInput = 'six';
});
buttons.sevenButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('7');
    domOperations.setScreenText(currentValue);
    lastInput = 'seven';
});
buttons.eightButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('8');
    domOperations.setScreenText(currentValue);
    lastInput = 'eight';
});
buttons.nineButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('9');
    domOperations.setScreenText(currentValue);
    lastInput = 'nine';
});
buttons.zeroButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendNum('0');
    domOperations.setScreenText(currentValue);
    lastInput = 'zero';
});
buttons.additionButton.addEventListener('click', () => {
    domOperations.addition();
});
buttons.subtractionButton.addEventListener('click', () => {
    domOperations.subtraction();
});
buttons.multiplicationButton.addEventListener('click', () => {
    domOperations.multiplication();
});
buttons.divisionButton.addEventListener('click', () => {
    domOperations.division();
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















