let calcDisplay = document.querySelector('.calc-display');
let calcOparators = document.querySelectorAll('.calc-opatrators');
let calcNumbers = document.querySelectorAll('.calc-numbers')
let calcEqual = document.querySelector('#calc-equal');
let calcClear = document.querySelector('#calc-c');
let calcAllClear = document.querySelector('#calc-ac');
let calcPercent = document.querySelector('#calc-percent');

let oparand1 = ``;
let oparand2 = ``;
let oparator1 = ``;
let equation = ``;
let isOparatorClicked = false;
let clickedOparator;

// functions for oparator
for (let oparator of calcOparators) {
    oparator.addEventListener('click', () => {
        clickedOparator = oparator;
        clickedOparator.style.backgroundColor = 'wheat';

        // starting new calculation
        if (!isOparatorClicked) {
            oparator1 = oparator.innerText;
            isOparatorClicked = true;
        }

        // completing previous calculation and starting new calculation
        else if (oparand2 !== ``) {
            oparand1 = `${eval(oparand1 + oparator1 + oparand2)}`;
            oparand2 = ``;
            oparator1 = ``;
            calcDisplay.innerText = oparand1;
            oparator1 = oparator.innerText;
        }

        // fixing a bug for oparand1
        else if (oparand2 === ``) {
            oparator1 = oparator.innerText;
        }
    })
}

// functions for number
for (let number of calcNumbers) {
    number.addEventListener('click', () => {
        // after clicking oparator
        if (isOparatorClicked) {
            oparand2 += number.innerText;
            calcDisplay.innerText = oparand2;
        }

        // before clicking oparator
        else {
            oparand1 += number.innerText;
            calcDisplay.innerText = oparand1;
        }

        clickedOparator.style.backgroundColor = '#FFC100';
    });
}

// functions for equal button
calcEqual.addEventListener('click', () => {
    oparand1 = eval(oparand1 + oparator1 + oparand2);
    oparand1 = oparand1.toString();
    oparand2 = ``;
    oparator1 = ``;
    calcDisplay.innerText = oparand1;
});

// functions for clear button
calcClear.addEventListener('click', () => {
    if (oparand2 === ``) {
        oparand1 = oparand1.substring(0, oparand1.length-1);
        calcDisplay.innerText = oparand1;
    }
    else {
        oparand2 = oparand2.substring(0, oparand2.length-1);
        calcDisplay.innerText = oparand2;
    }
});

// functions for all clear button
calcAllClear.addEventListener('click', () => {
    oparand1 = ``;
    oparand2 = ``;
    oparator1 = ``;
    calcDisplay.innerText = 0;
    isOparatorClicked = false;
});

// functions for percent button
calcPercent.addEventListener('click', () => {
    if (oparand2 === ``) {
        oparand1 = oparand1/100;
        calcDisplay.innerText = oparand1;
    }
    else {
        oparand2 = oparand2/100;
        calcDisplay.innerText = oparand2;
    }
});
