function debounce(fn, t) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            fn(...args);
        }, t);
    };
}

const log = () => console.log('Function executed');
const debouncedLog = debounce(log, 50);

// Simulating calls at different times
setTimeout(debouncedLog, 30);  // Cancelled
setTimeout(debouncedLog, 60);  // Cancelled
setTimeout(debouncedLog, 100); // Executed after 150ms