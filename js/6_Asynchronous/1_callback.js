// 1. Callbacks

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        callback(null, 'Data fetched with callback');
    }, 2000);
}

console.log('Start');
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log(data);
    }
});
console.log('End');

