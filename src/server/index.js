var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const cors = require('cors');
const fetch = require("node-fetch");
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(express.static('dist')) 
app.use(bodyParser.json())

dotenv.config();

const apiKey = process.env.API_KEY

console.log(`API key is ${apiKey}`)

// var textapi = new meaningCloud({
    // application_key: process.env.API_KEY
// })

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/getAPIData', function (req, res) {
    console.log("Received body from formHandler")
    console.log(req.body)

    getDataFromMeaningCloud(createAPIUrl(apiKey, req.body.text))
    .then(function (result) {
        res.send(result)
        // console.log("Response from API")
        // console.log(res)
    })

    // console.log("Made it to API Key endpoint. Sending: ");
    // apiData = {
    //     apiKey: process.env.API_KEY
    // }

    // console.log(apiData)
    // res.send(apiData)
})


async function getDataFromMeaningCloud (path) {
    console.log("Calling API with url: " + path)
    const response = await fetch(path);

    try {
        const data = await response.json();
        console.log("API Response is ");
        console.log(data);

        const apiResponse = {
            model: data.model,
            score_tag: data.score_tag,
            agreement: data.agreement,
            subjectivity: data.subjectivity,
            confidence: data.confidence,
            irony: data.irony,
            sentence_list: data.sentence_list,
            sentimented_entity_list: data.sentimented_entity_list,
            sentimented_concept_list: data.sentimented_concept_list
        }
        return apiResponse;
    }

    catch(error) {
        console.log("error", error);
    }
}

function createAPIUrl(apiKey, text) {
    return "https://api.meaningcloud.com/sentiment-2.1?lang=en&key=" + apiKey + "&txt=" + text;
}

