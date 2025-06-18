//------------------------log
// const logger = require('./logger');
// const log = require('./logger')

// logger.log('hello message')
// console.log(module)
// log('new message')
//---------------------------- os 
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log(`Total Memory: ${totalMemory}`)
// console.log(`Free Memory: ${freeMemory}`)


//-------------------- fs
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files)

// fs.readdir('./', function(err,files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files)
// })

//--------------------- events
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// register a listener
// emitter.on('messageLogged', (arg)=>{
//     console.log('Listener called', arg)
// })

// const Logger = require('./logger')
// const logger = new Logger();

// logger.on('messageLogged', (arg)=> {
//     console.log('Listener called', arg)
// })

// logger.log('message will print')

// Raise an event
// emitter.emit('messageLogged',{id: 1, url:'http://'});

// Raise: logging (data:message)


//----------------- http
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Hello world')
        res.end()
    }
    if(req.url === '/test'){
        res.write('Can you see test')
        res.end()
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]))
        res.end();
    }

});


server.listen(3000);

console.log('Listening on port 3000...')