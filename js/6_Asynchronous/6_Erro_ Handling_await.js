// 6. Error Handling in async/await

async function fetchWithError() {
    throw new Error('Fetch failed');
}

async function handleErrors() {
    try {
        await fetchWithError();
    } catch (error) {
        console.error('Caught error:', error.message);
    }
}

handleErrors();

