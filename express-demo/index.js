const  express=require('express')
const  app=express()

const course=[
    {id:1, name:'english'},
    {id:2, name:'math'},
    {id:3, name:'igbo'},
    {id:4, name:'health'},

]

app.get('/', (request, response)=>{
    response.send('Hello!')
})

app.get('/api/courses', (request, response)=>{
    response.send(course)
})

app.get('/api/courses/:id', (request, response)=>{
    const course1 =course.find(c=>c.id===parseInt(request.params.id))
    if (!course1)response.status(404).send('course with the given id is not found')
    response.send(course1)
})

app.listen(5000, ()=>console.log('listening'))

