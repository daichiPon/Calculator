function get_calc(obj: HTMLInputElement) {
    const display = document.querySelector('.display') as HTMLInputElement;

    if (display) {
        if (obj.value === "C") {
            display.value = "";
        } 
        else if (obj.value === "=") {
            try {
                display.value = eval(display.value);
            } catch (e) {
            display.value = "Error";
            }
        } else {
        display.value += obj.value;
        }
    }
}  
