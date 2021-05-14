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
        if (lastInput === 'equality') {
            return;
        } else if (lastInput === 'addition') {
            return;
        } else if (currentOperation === lastOperation) {
            currentTotal = lowLevelOperations.operate('addition', lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            this.lockCurrentValue();
            currentTotal = lowLevelOperations.operate('addition', currentTotal, currentValue);
            this.displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            lockedValue = currentTotal;
            currentValue = 0;
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            currentTotal = lowLevelOperations.operate('addition', lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        }
        lastInput = 'addition';
        lastOperation = 'addition';
    },
    subtraction: function() {
        newOperation = true;
        currentOperation = 'subtraction';
        if (lastInput === 'equality') {
            return;
        } else if (lastInput === 'subtraction') {
            return;
        } else if (currentOperation === lastOperation) {
            currentTotal = lowLevelOperations.operate('subtraction', lockedValue, currentValue);
            this.lockCurrentTotal()
            this.displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            this.lockCurrentValue();
            currentTotal = lowLevelOperations.operate('subtraction', currentTotal, currentValue);
            this.displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            this.lockCurrentValue();
            currentTotal = lowLevelOperations.operate('subtraction', lockedValue, currentValue);
            this.displayCurrentTotal();
            operationsCount++;
        }
        lastInput = 'subtraction';
        lastOperation = 'subtraction';
    },
    multiplication: function() {
        newOperation = true;
        currentOperation = 'multiplication';
        if (lastInput === 'equality') {
            return;
        } else if (lastInput === 'multiplication') {
            return;
        } else if (currentOperation === lastOperation) {
            currentTotal = lowLevelOperations.operate('multiplication', lockedValue, currentValue);
            this.lockCurrentTotal()
            this.displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            this.lockCurrentValue();
            currentTotal = lowLevelOperations.operate('multiplication', currentTotal, currentValue);
            this.displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal()
            this.displayCurrentTotal();
            operationsCount++;
        } else {
            this.lockCurrentValue();
            currentTotal = lowLevelOperations.operate('multiplication', lockedValue, currentValue);
            this.displayCurrentTotal();
            operationsCount++;
        }
        lastInput = 'multiplication';
        lastOperation = 'multiplication';
    },
    division: function() {
        newOperation = true;
        currentOperation = 'division';
        if (lastInput === 'equality') {
            return;
        } else if (lastInput === 'division') {
            return;
        } else if (currentOperation === lastOperation) {
            currentTotal = lowLevelOperations.operate('division', lockedValue, currentValue);
            this.lockCurrentTotal()
            this.displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            this.lockCurrentValue();
            currentTotal = lowLevelOperations.operate('division', currentTotal, currentValue);
            this.displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal()
            this.displayCurrentTotal();
            operationsCount++;
        } else if (operationsCount === 0) {
            this.lockCurrentValue();
            operationsCount++;
            lastOperation = 'division';
            return;
        } else {
            this.lockCurrentValue();
            currentTotal = lowLevelOperations.operate('division', lockedValue, currentValue);
            this.displayCurrentTotal();
            operationsCount++;
        }
        lastInput = 'division';
        lastOperation = 'division';
    },
    equality: function() {
        if (lastInput === 'equals') {
            return;
        } else {
            newOperation = true;
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            lockedValue = currentTotal;
            this.displayCurrentTotal();
            operationsCount++;
        }
        lastInput = 'equals';
        lastOperation = 'equality';
    },
    appendNum: function(num) {
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
    resetAll: function() {
        domOperations.setScreenText('');
        operationsCount = 0;
        currentTotal = 0;
        currentOperation = '';
        lockedValue = 0; 
        currentValue = 0;
        lastInput = 'all clear';
        lastOperation = '';
    },
    clearScreen: function() {
        domOperations.setScreenText('');
        currentValue = 0;
        lastInput = 'clear';
    },
    appendDecimal: function() {
        if(dom.screenValue.textContent.includes(".")) {
            return;
        } else {
            domOperations.appendScreenText('.');
            this.appendNum('.');
        }
        lastInput = 'decimal';
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
    domOperations.appendScreenText(1);
    domOperations.appendNum('1');
    lastInput = 'one';
});
buttons.twoButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(2);
    domOperations.appendNum('2');
    lastInput = 'two';
});
buttons.threeButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(3);
    domOperations.appendNum('3');
    lastInput = 'three';
});
buttons.fourButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(4);
    domOperations.appendNum('4');
    lastInput = 'four';
});
buttons.fiveButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(5);
    domOperations.appendNum('5');
    lastInput = 'five';
});
buttons.sixButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(6);
    domOperations.appendNum('6');
    lastInput = 'six';
});
buttons.sevenButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(7);
    domOperations.appendNum('7');
    lastInput = 'seven';
});
buttons.eightButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(8);
    domOperations.appendNum('8');
    lastInput = 'eight';
});
buttons.nineButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(9);
    domOperations.appendNum('9');
    lastInput = 'nine';
});
buttons.zeroButton.addEventListener('click', () => {
    if (newOperation === true) {
        domOperations.setScreenText('');
        newOperation = false;
    }
    domOperations.appendScreenText(0);
    domOperations.appendNum('0');
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














