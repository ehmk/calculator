let firstOperation = true;
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
document.addEventListener('keydown', event => {
    if (event.keyCode === 49) {
        domOperations.press('1', 'one');
    }
});
buttons.twoButton.addEventListener('click', () => {
    domOperations.press('2', 'two');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 50) {
        domOperations.press('2', 'two');
    }
});
buttons.threeButton.addEventListener('click', () => {
    domOperations.press('3', 'three');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 51) {
        domOperations.press('3', 'three');
    }
});
buttons.fourButton.addEventListener('click', () => {
    domOperations.press('4', 'four');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 52) {
        domOperations.press('4', 'four');
    }
});
buttons.fiveButton.addEventListener('click', () => {
    domOperations.press('5', 'five');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 53) {
        domOperations.press('5', 'five');
    }
});
buttons.sixButton.addEventListener('click', () => {
    domOperations.press('6', 'six');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 54) {
        domOperations.press('6', 'six');
    }
});
buttons.sevenButton.addEventListener('click', () => {
    domOperations.press('7', 'seven');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 55) {
        domOperations.press('7', 'seven');
    }
});
buttons.eightButton.addEventListener('click', () => {
    domOperations.press('8', 'eight');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 56) {
        domOperations.press('8', 'eight');
    }
});
buttons.nineButton.addEventListener('click', () => {
    domOperations.press('9', 'nine');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 57) {
        domOperations.press('9', 'nine');
    }
});
buttons.zeroButton.addEventListener('click', () => {
    domOperations.press('0', 'zero');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 48) {
        domOperations.press('0', 'zero');
    }
});
buttons.additionButton.addEventListener('click', () => {
    domOperations.operate('addition');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 187) {
        domOperations.operate('addition');
    }
});
buttons.subtractionButton.addEventListener('click', () => {
    domOperations.operate('subtraction');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 189) {
        domOperations.operate('subtraction');
    }
});
buttons.multiplicationButton.addEventListener('click', event => {
    domOperations.operate('multiplication');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 219) {
        domOperations.operate('multiplication');
    }
});
buttons.divisionButton.addEventListener('click', () => {
    domOperations.operate('division');
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 221) {
        domOperations.operate('division');
    }
});
buttons.equalityButton.addEventListener('click', () => {
    domOperations.equality();
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        domOperations.operate('equality');
    }
});
buttons.clearButton.addEventListener('click', () => {
    domOperations.clearScreen();
});
buttons.allClearButton.addEventListener('click', () => {
    domOperations.resetAll();
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 8) {
        domOperations.resetAll();
    }
});
buttons.decimalButton.addEventListener('click', () => {
    domOperations.appendDecimal();
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 190) {
        domOperations.appendDecimal();
    }
});
buttons.negativeButton.addEventListener('click', () => {
    domOperations.toggleNegative();
});
document.addEventListener('keydown', event => {
    if (event.keyCode === 220) {
        domOperations.toggleNegative();
    }
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
        let operations = ['addition', 'subtraction', 'multiplication', 'division'];
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === currentOperation) {
                operations.splice(i, 1);
            }
        } 
        
        if (currentValue !== undefined) {
            currentValue = parseFloat(currentValue);
        }
        if (lockedValue !== undefined) {
            lockedValue = parseFloat(lockedValue);
        }
        if (lastInput === operation) {
            return;
        }
        if (operations.includes(lastInput)) {
            lastInput = operation;
            lastOperation = operation;
            lockNegative = false;
            return;
        }

        if (lastOperation === 'equality') {
            this.lockCurrentTotal();
            lastOperation = operation;
            firstOperation = false;
            return;
        } else if (currentOperation !== lastOperation && firstOperation === false) {
            appendHistory();
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            firstOperation = false;
        } else if (firstOperation === false) {
            appendHistory();
            currentTotal = lowLevelOperations.operate(operation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            firstOperation = false;
        } else {
            this.lockCurrentValue();
            firstOperation = false;
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
        appendHistory();
        if (lastInput === 'equality') {
            return;
        } else if (firstOperation === true) {
            return;
        } else {
            currentTotal = lowLevelOperations.operate(lastOperation, lockedValue, currentValue);
            this.lockCurrentTotal();
            this.displayCurrentTotal();
            firstOperation = false;
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
        if (firstOperation === false) {
            if (currentTotal % 1 === 0) {
                domOperations.setScreenText(currentTotal); 
            } else {
                domOperations.setScreenText(currentTotal.toFixed(4));
            }
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
        firstOperation = true;
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
        if (lastOperation === 'equality') {
            this.resetAll();
            domOperations.setScreenText('');
        }
        if (lastInput === 'equality') {
            currentValue = '0.';
            domOperations.setScreenText(currentValue);
            lastInput = 'decimal';
            return;
        }
        if (currentValue === undefined) {
            currentValue = '0.';
            domOperations.setScreenText(currentValue);
            lastInput = 'decimal';
            return;
        }
        if(currentValue % 1 !== 0 && currentValue !== '-') {
            lastInput = 'decimal';
            return;
        } else {
            domOperations.appendScreenText('.0');
            currentValue = String(currentValue);
            currentValue += '.';
        }
        lastInput = 'decimal';
    },
    toggleNegative: function() {
        let operations = ['addition', 'subtraction', 'multiplication', 'division'];
        if (lockNegative === true) {
            lockNegative = false;
        } else if (lockNegative === false) {
            lockNegative = true;
        }

        if (lastInput === 'decimal') {
            currentValue = '-' + currentValue;
            domOperations.setScreenText(currentValue);
            return;
        }
        
        if (operations.includes(currentOperation)) {
            currentValue = '-';
            domOperations.setScreenText(currentValue);
            return;
        }
        if (lastInput === 'equality') {
            if (lockedValue > 0) {
                lockedValue = -Math.abs(lockedValue);
            } else if (lockedValue < 0) {
                lockedValue = Math.abs(lockedValue);
            }
            currentTotal = lockedValue;
            domOperations.setScreenText(lockedValue);
            return;
        }
        if (currentValue === undefined) {
            currentValue = '-';
            domOperations.setScreenText(currentValue);
            return;
        } else if (lockNegative === true) {
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
        dataScreens.screenValue.textContent += a;
    },
    setScreenText: function(a) {
        dataScreens.screenValue.textContent = a;
    },
    
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
    },
};

const dataScreens = {
    screenValue: document.querySelector('#screen-value'),
    history: document.querySelector('#operation-history-list'),
};

function appendHistory() {
    let setOperationSymbol;
    let currentAnswer;

    if (lastOperation === 'addition') {
        setOperationSymbol = '+';
        currentAnswer = parseFloat(lockedValue) + parseFloat(currentValue);
    } else if (lastOperation === 'subtraction') {
        setOperationSymbol = '-';
        currentAnswer = parseFloat(lockedValue) - parseFloat(currentValue);
    } else if (lastOperation === 'multiplication') {
        setOperationSymbol = '*';
        currentAnswer = parseFloat(lockedValue) * parseFloat(currentValue);
    } else if (lastOperation === 'division') {
        setOperationSymbol = '/';
        currentAnswer = parseFloat(lockedValue) / parseFloat(currentValue);
    }

    if (dataScreens.history.childElementCount > 4) {
        dataScreens.history.removeChild(dataScreens.history.childNodes[0]);
    }

    if (currentAnswer % 1 === 0) {
        currentAnswer = parseFloat(currentAnswer);
    } else {
        currentAnswer = parseFloat(currentAnswer).toFixed(4);
    }

    if (currentValue !== undefined && lockedValue !== undefined) {
        let para = document.createElement('p');
        para.textContent = `${lockedValue} ${setOperationSymbol} ${currentValue} = ${currentAnswer}`;
        dataScreens.history.appendChild(para);
    }
}
























