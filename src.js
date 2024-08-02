function getCalc(button) {
    var value = button.getAttribute('data-value');
    var display = document.querySelector('input[name="display"]');
    if (!display)
        return;
    if (value === 'C') {
        display.value = '';
    }
    else if (value === '=') {
        try {
            display.value = String(eval(display.value));
        }
        catch (e) {
            display.value = 'Error';
        }
    }
    else {
        display.value += value;
    }
}
window.getCalc = getCalc;
