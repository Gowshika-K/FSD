function getResult(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result: PASS");
        }, 2000);
    });
}
async function showResult(){
    console.log("Fetching result...");
    const result = await getResult();
    console.log(result);
    console.log("Done!");
}
showResult();
console.log("This will log before the result is fetched.");