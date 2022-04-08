const {response} = require("express");
const express = require('express');
const app = express();
app.use(express.json());


const persons =[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})
//3.1: Phonebook backend step1//
app.get('/api/persons', (request, response) => {
  response.json(persons)
})
//3.2: Phonebook backend step2//
app.get('/info', (request, response) => {
    response.json("Phonebook has info for 4 people" + " " + new Date())
  })

  //3.3: Phonebook backend step3 http://localhost:3001/api/persons/5//
  app.get("/api/persons/:id", (request, response) => {
    const id = Number(request.params.id);
    console.log(id);
    let person = persons.find((person) => {
      console.log(person.id, typeof person.id, id, typeof id, person.id === id);
      return person.id === id;
    });
    if (person) {
      response.json(person);
    } else {
      response.status(404).end();
    }
  });
// app.get('/api/persons/id', (request, response) => {
//     if (persons) {
//         response.json(persons);
//       } else {
//         response.status(404).end();
//       }
//    response.json('id:' + request.params.id); 
// })
  
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})