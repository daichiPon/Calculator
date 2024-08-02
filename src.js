function get_calc(obj) {
    var display = document.querySelector('.display');
    if (display) {
        if (obj.value === "C") {
            display.value = "";
        }
        else if (obj.value === "=") {
            try {
                display.value = eval(display.value);
            }
            catch (e) {
                display.value = "Error";
            }
        }
        else {
            display.value += obj.value;
        }
    }
}
