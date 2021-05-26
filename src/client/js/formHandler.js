function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    console.log("Form text is " + formText)

    callAPI(formText)
    .then(function (res) {
        console.log("URL is now ")
        console.log(res)
        res => res.json()
        console.log(res)
    })


    // fetch('http://localhost:8081/getAPIData')
    // .then( function(res) {
    //     console.log("API key");
    //     console.log(res)
    //     console.log(res.apiKey)
    //     res => res.json()
    // })
    // .then(function(res) {
    //     // document.getElementById('results').innerHTML = res.message
    // })
}

async function callAPI(formText) {
    console.log(formText)
    response = await fetch('http://localhost:8081/getAPIData', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8000/',
        },
        mode: 'cors',
        credentials: 'same-origin', 
        body: JSON.stringify({text: formText}),
       });
    }

export { handleSubmit }