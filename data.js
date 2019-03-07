var buttons = document.getElementsByClassName('digit');
var input = document.getElementById('input');
var inputValue = "";

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (event) {
        event.preventDefault();
        var buttonValue = event.target.dataset.value;

        inputValue += buttonValue;
        input.value += buttonValue;

        console.log("input value=" + inputValue);


    }
}

var signs = document.getElementsByClassName('sign');
var savedValue = inputValue;
var pressedSign;
var result = "";


for (i = 0; i < signs.length; i++) {
    signs[i].onclick = function (event) {
        event.preventDefault();
        var signValue = event.target.dataset.value;

        if (result != "") {
            savedValue = result;
        } else {
            savedValue = +inputValue + +savedValue;
        }

        pressedSign = signValue;
        console.log(pressedSign);
        console.log("saved value =" + savedValue);
        input.value += signValue;
        inputValue = "";
        console.log("input value " + inputValue);

    }
}

var equal = document.getElementById('equal');
equal.onclick = function (event) {
    event.preventDefault();
    switch (pressedSign) {
        case '+':
            result = +savedValue + +inputValue;
            input.value = result;
            break;
        case '-':
            result = +savedValue - +inputValue;
            input.value = result;
            break;
        case '/':
            result = +savedValue / +inputValue;
            input.value = result;
            break;
        case '*':
            result = +savedValue * +inputValue;
            input.value = result;
            break;
    }


    console.log(result);
    console.log("saved value=" + savedValue);
    return;

}






