
const http=require('http')
const  server=http.createServer((request, response)=>{
    if (request.url==='/'){
        response.write("Hi there")
        response.end()
    }

    if (request.url==='/api/courses'){
        response.write(JSON.stringify([1, 2, 3]))
        response.end()
    }
})

server.listen(3000)