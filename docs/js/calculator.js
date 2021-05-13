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

dom.oneButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(1);
});
dom.twoButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(2);
});
dom.threeButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(3);
});
dom.fourButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(4);
});
dom.fiveButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(5);
});
dom.sixButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(6);
});
dom.sevenButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(7);
});
dom.eightButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(8);
});
dom.nineButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(9);
});
dom.zeroButton.addEventListener('click', () => {
    if (newOperation === true) {
        dom.setScreenText('');
        newOperation = false;
    }
    dom.appendScreenText(0);
});

dom.additionButton.addEventListener('click', () => {
    currentOperation = 'add';
    newOperation = true;
    setNum(dom.getScreenValue());
    operationsCount++;
});
dom.subtractionButton.addEventListener('click', () => {
    currentOperation = 'subtract';
    newOperation = true;
    setNum(dom.getScreenValue());
    operationsCount++;
});
dom.multiplicationButton.addEventListener('click', () => {
    currentOperation = 'multiply';
    newOperation = true;
    setNum(dom.getScreenValue());
    operationsCount++;
});
dom.divisionButton.addEventListener('click', () => {
    currentOperation = 'divide';
    newOperation = true;
    setNum(dom.getScreenValue());
    operationsCount++;
});
dom.equalityButton.addEventListener('click', () => {
    newOperation = true;
    setNum(dom.getScreenValue());
    currentTotal = operations.operate(currentOperation, firstNum, secondNum);
    firstNum = currentTotal;
    operationsCount++;
    dom.setScreenText(currentTotal);
});
dom.operateButton.addEventListener('click', () => {
    newOperation = true;
});
dom.clearButton.addEventListener('click', () => {
    dom.setScreenText('');
});
dom.allClearButton.addEventListener('click', () => {
    dom.setScreenText('');
    operationsCount = 0;
    currentTotal = 0;
    firstNum = 0;
    secondNum = 0;
});
dom.decimalButton.addEventListener('click', () => {
    if(dom.screenValue.textContent.includes(".")) {
        return;
    } else {
        dom.appendScreenText('.');
    }
});

let operationsCount = 0;
let newOperation = false;
let currentOperation = '';
let currentTotal = 0;
let firstNum = 0;
let secondNum = 0;

let functionButtons = [dom.additionButton, dom.subtractionButton, dom.multiplicationButton, dom.divisionButton, dom.equalityButton, dom.operateButton, dom.clearButton, dom.decimalButton, dom.allClearButton];

function setNum(num) {
    if (operationsCount === 0) {
        firstNum = num;
    } else {
        secondNum = num;
    } 
}

function getCurrentTotal() {
    if (operationsCount >= 1) {
        return currentTotal;
    } 
}

function disableFunctionButtons() {
    for (let i = 0; i < functionButtons.length; i++) {
        functionButtons[i].disabled = true;
    }
}

function enableFunctionButtons() {
    for (let i = 0; i < functionButtons.length; i++) {
        functionButtons[i].disabled = false;
    }
}












