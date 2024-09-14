// 3. async/await

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched with async/await');
        }, 2000);
    });
}

async function processData() {
    console.log('Start');
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
    console.log('End');
}

processData();


