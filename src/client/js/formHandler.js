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
    let response = await fetch('http://localhost:8081/getAPIData', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8000/',
        },
        mode: 'cors',
        credentials: 'same-origin', 
        body: JSON.stringify({text: formText}),
       });
    
    const data = await response.json();
   
    console.log("End Result is ");
    console.log(data);
    populateUI(data)
}

function populateUI(data) {
    document.getElementById('results').innerHTML= `
    <p>Model: ${data.model}</p>
    <p>Score_tag: ${data.score_tag}</p>
    <p>Agreement: ${data.agreement}</p>
    <p>Subjectivity: ${data.subjectivity}</p>
    <p>Confidence: ${data.confidence}</p>
    <p>Irony: ${data.irony}</p>
    <p>Sentence List: ${JSON.stringify(data.sentence_list)}</p>
    <p>Sentimentend Entity List: ${JSON.stringify(data.sentimented_entity_list)}</p>
    <p>Sentimentend Concept List: ${JSON.stringify(data.sentimented_concept_list)}</p>
    `
}
export { handleSubmit }
