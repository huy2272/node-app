const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name:'course1'},
    {id: 2, name:'course2'},
    {id: 3, name:'course3'},
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req,res)  => {
    res.send(courses);
});

//This automatically assign a new id by taking arraySize() + 1
//It then sets the new obj name according to the req.body.name
//After this it pushes it to the array courses
app.post('/api/courses', (req,res) => {
    const course = {
        id: courses.length +1,
        name: req.body.name
    };

    //Push the new object into the array
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:id', (req,res)=> {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) res.status(404).send('The course was not found');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));