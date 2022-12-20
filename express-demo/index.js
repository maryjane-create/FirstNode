const  express=require('express')
const  app=express()

app.get('/', (request, response)=>{
    response.send('Hello!')
})

app.get('/api/courses', (request, response)=>{
    response.send([1, 2, 3, 4, 5, 6, 7])
})

app.get('/api/courses/:id', (request, response)=>{
    const course =course.find(c=>c.id===parseInt(request.params.id))
    if (!course)response.status(404).send('course with the given id is not found')
    response.send(course)
})

app.listen(5000, ()=>console.log('listening'))

