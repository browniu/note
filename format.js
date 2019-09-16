function throttle(func, wait) {
    let previous = 0;
    return function () {
        const now = Date.now();
        const context = this;
        const args = arguments;
        if (timeout) clearTimeout(timeout);
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now
        }
    }
}