// 8. Parallel vs Sequential Execution

async function sequentialFetch() {
    console.time('Sequential');
    const data1 = await fetchDataWithPromise();
    const data2 = await fetchDataWithPromise();
    console.timeEnd('Sequential');
    console.log(data1, data2);
}

async function parallelFetch() {
    console.time('Parallel');
    const [data1, data2] = await Promise.all([
        fetchDataWithPromise(),
        fetchDataWithPromise()
    ]);
    console.timeEnd('Parallel');
    console.log(data1, data2);
}

sequentialFetch();
parallelFetch();
