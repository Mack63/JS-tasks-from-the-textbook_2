
async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return  await response.json(); // (3)
    } else {
        throw new Error(response.status.toString());
    }

}

loadJson('no-such-user.json') // (3)
    .catch(console.log); // Error: 404