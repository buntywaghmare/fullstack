// 5. Promise.race

function fetchDataFast() {
    return new Promise(resolve => setTimeout(() => resolve('Fast Data'), 1000));
}

function fetchDataSlow() {
    return new Promise(resolve => setTimeout(() => resolve('Slow Data'), 3000));
}

Promise.race([fetchDataFast(), fetchDataSlow()])
    .then(data => console.log('First to complete:', data));

