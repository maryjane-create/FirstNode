const  express=require('express')
const  app=express()
app.use(express.json())

const courses=[
    {id:1, name:'english'},
    {id:2, name:'math'},
    {id:3, name:'igbo'},
    {id:4, name:'health'},

]

app.get('/', (request, response)=>{
    response.send('Hello!')
})

app.get('/api/course1', (request, response)=>{
    response.send(courses)
})

app.get('/api/courses/:id', (request, response)=>{
    const foundCourse =courses.find(c=>c.id===parseInt(request.params.id))
    if (!foundCourse)response.status(404).send('course with the given id is not found')
    response.send(foundCourse)
})

app.post('api/courses', (request, response)=>{
    const  schema={
        name: Joi.string().min(3).required()
    }
    const result=Joi.validate(request.body, schema)
    if (result.error){
        response.status(400).send(result.error.details[0].message)
        return;
    }
    const postedCourse={
        id:courses.length+1,
        name:request.body.name
    }
    courses.push(postedCourse)
    response.send(postedCourse)
    return
})




app.listen(5000, ()=>console.log('listening'))

