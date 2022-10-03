//If it is a class the first letter should be capitalized
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course was not found');
    res.send(course);
});

//This automatically assign a new id by taking arraySize() + 1
//It then sets the new obj name according to the req.body.name
//After this it pushes it to the array courses
app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body); //This is equivalent to getting result.error
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    //Push the new object into the array
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //Check if the course exist
    //If does not exist return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course does not exist');

    //Validate
    //const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //This is equivalent to getting result.error
    if (error) return res.status(400).send(error.details[0].message);

    //Update the course and return it
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({ name: Joi.string().min(3).required() });
    return schema.validate(course);
}

app.delete('/api/courses/:id', (req, res) => {
    //Check if the course exist
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found');

    //Delete the course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the course
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));