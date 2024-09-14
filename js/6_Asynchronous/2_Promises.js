// 2. Promises

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched with Promise');
        }, 2000);
    });
}

console.log('Start');
fetchDataWithPromise()
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
console.log('End');

