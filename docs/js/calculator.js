let operationsCount = 0;
let newOperation = false;
let currentOperation;
let lastInput;
let lastOperation;
let currentTotal = 0;
let lockedValue = 0;
let currentValue = 0;

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
    
    additionButton: document.querySelector('#addition-button'),
    subtractionButton: document.querySelector('#subtraction-button'),
    multiplicationButton: document.querySelector('#multiplication-button'),
    divisionButton: document.querySelector('#division-button'),
    equalityButton: document.querySelector('#equality-button'),
    operateButton: document.querySelector('#operate-button'),
    clearButton: document.querySelector('#clear-button'),
    decimalButton: document.querySelector('#decimal-button'),
    allClearButton: document.querySelector('#all-clear-button'),
    
    screenValue: document.querySelector('#screen-value'),
    setScreenText: function(a) {
        this.screenValue.textContent = a;
    },
    appendScreenText: function(a) {
        this.screenValue.textContent += a;
    },
    getScreenValue: function() {
        return parseFloat(this.screenValue.textContent);
    },
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

dom.oneButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(1);
    appendNum('1');
    lastInput = 'one';
});
dom.twoButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(2);
    appendNum('2');
    lastInput = 'two';
});
dom.threeButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(3);
    appendNum('3');
    lastInput = 'three';
});
dom.fourButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(4);
    appendNum('4');
    lastInput = 'four';
});
dom.fiveButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(5);
    appendNum('5');
    lastInput = 'five';
});
dom.sixButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(6);
    appendNum('6');
    lastInput = 'six';
});
dom.sevenButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(7);
    appendNum('7');
    lastInput = 'seven';
});
dom.eightButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(8);
    appendNum('8');
    lastInput = 'eight';
});
dom.nineButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(9);
    appendNum('9');
    lastInput = 'nine';
});
dom.zeroButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(0);
    appendNum('0');
    lastInput = 'zero';
});


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
            lockCurrentTotal()
            displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('addition', currentTotal, currentValue);
            displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            lockedValue = currentTotal;
            currentValue = 0;
            displayCurrentTotal();
            operationsCount++;
        } else {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('addition', lockedValue, currentValue);
            lockCurrentTotal();
            displayCurrentTotal();
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
            lockCurrentTotal()
            displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('subtraction', currentTotal, currentValue);
            displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            lockCurrentTotal();
            displayCurrentTotal();
            operationsCount++;
        } else {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('subtraction', lockedValue, currentValue);
            displayCurrentTotal();
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
            lockCurrentTotal()
            displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('multiplication', currentTotal, currentValue);
            displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            lockCurrentTotal()
            displayCurrentTotal();
            operationsCount++;
        } else {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('multiplication', lockedValue, currentValue);
            displayCurrentTotal();
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
            lockCurrentTotal()
            displayCurrentTotal();
            operationsCount++;
        } else if (lastOperation === 'equality') {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('division', currentTotal, currentValue);
            displayCurrentTotal();
            operationsCount++;
        } else if (currentOperation !== lastOperation && operationsCount >= 1) {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            lockCurrentTotal()
            displayCurrentTotal();
            operationsCount++;
        } else {
            lockCurrentValue();
            currentTotal = lowLevelOperations.operate('division', lockedValue, currentValue);
            displayCurrentTotal();
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
            displayCurrentTotal();
            operationsCount++;
        }
        lastInput = 'equals';
        lastOperation = 'equality';
    },
}; 

dom.additionButton.addEventListener('click', () => {
    domOperations.addition();
});
dom.subtractionButton.addEventListener('click', () => {
    domOperations.subtraction();
});
dom.multiplicationButton.addEventListener('click', () => {
    domOperations.multiplication();
});
dom.divisionButton.addEventListener('click', () => {
    domOperations.division();
});
dom.equalityButton.addEventListener('click', () => {
    domOperations.equality();
});
dom.operateButton.addEventListener('click', () => {
    newOperation = true;
    lastInput = 'operate';
});
dom.clearButton.addEventListener('click', () => {
    dom.setScreenText('');
    currentValue = 0;
    lastInput = 'clear';
});
dom.allClearButton.addEventListener('click', () => {
    dom.setScreenText('');
    operationsCount = 0;
    currentTotal = 0;
    currentOperation = '';
    lockedValue = 0; 
    currentValue = 0;
    lastInput = 'all clear';
    lastOperation = '';
});
dom.decimalButton.addEventListener('click', () => {
    if(dom.screenValue.textContent.includes(".")) {
        return;
    } else {
        dom.appendScreenText('.');
        appendNum('.');
    }
    lastInput = 'decimal';
});

// function setNum(num) {
//     if (operationsCount === 0) {
//         lockedValue = num;
//     } else {
//         currentValue = num;
//     } 
// }

function appendNum(num) {
    currentValue += num; 
    if (num !== '.') {
        lockedValue = parseFloat(lockedValue);
        currentValue = parseFloat(currentValue);
    }
}

function displayCurrentTotal() {
    if (operationsCount >= 1) {
        dom.setScreenText(currentTotal);
    } else {
        return;
    }
}

function lockCurrentValue() {
    lockedValue = currentValue;
    currentValue = 0;
}

function lockCurrentTotal() {
    lockedValue = currentTotal;
    currentValue = 0;
}













