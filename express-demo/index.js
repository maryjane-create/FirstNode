const  express=require('express')
const  app=express()

app.get('/', (request, response)=>{
    response.send('Hello!')
})

app.get('/api/courses', (request, response)=>{
    response.send([1, 2, 3, 4, 5, 6, 7])
})

app.get('/api/posts/:year/:month', (request, response)=>{
    response.send(request.params)
})

app.listen(5000, ()=>console.log('listening'))

