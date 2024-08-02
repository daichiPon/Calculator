function getCalc(button: HTMLButtonElement): void {
    const value = button.getAttribute('data-value');
    const display = document.querySelector<HTMLInputElement>('input[name="display"]');

    if (!display) return;

    if (value === 'C') {
        display.value = '';
    } else if (value === '=') {
        try {
            display.value = String(eval(display.value));
        } catch (e) {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}

(window as any).getCalc = getCalc;

