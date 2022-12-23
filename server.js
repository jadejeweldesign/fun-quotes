const express = require('express')
//make sure server has access to express
const app = express()
//create var to save express and enable use of those methods
const PORT = 8001

const authors = {
    'ai wei wei':{
        'quote': 'We had better not enjoy the moment, but create the moment.',
        'famous work': 'Forever(Bicycles',
        'year of work': '2003'
    },
    'marina abramovic':{
        'quote': 'If you experiment, you have to fail. By definition, experimenting means going to territory where you\’ve never been, where failure is very possible. How can you know you\’re going to succeed? Having the courage to face the unknown is so important."',
        'famous work': 'Fireflies on Water',
        'year of work': '2002'
    },
    'yayoi kusama':{
        'quote': 'I think I will be able to, in the end, rise above the clouds and climb the stairs to Heaven, and I will look down on my beautiful life.',
        'famous work': 'The Artist is Present',
        'year of work': '2010'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
//hear request on that route and response with html file
//request and response parameters
//start with directory and look for this file
//create index file

app.get('/api/:authorName', (request, response) =>{
    //user can ask for specific query /:word, url added is part of request, search for parameter.paramName
    const authorFullName = request.params.authorName.toLowerCase()
    if(authors[authorFullName]){
        response.json(authors[authorFullName])
    }else{
        response.json(authors['ai wei wei'])
    }
})
//transmit data in web application from server to client
//display on webpage



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})
//set up server on port
