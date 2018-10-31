import config from './config'; 
// import fs from 'fs'; (without using express)
import apiRouter from './api';

import express from 'express'; 

const server = express(); 
server.get('/',(req,res)=>{
  res.render('index.ejs', {
    content: "this is a content <em>EJS</em>"
  })
});
//setting the view engine to ejs; express will look at the ejs file under the view folder
server.set('view engine', 'ejs'); 
//
server.use('/api', apiRouter); 
server.use(express.static('public'))





server.listen(config.port, ()=> {
  console.info('Express listening on port ', config.port);
});


//(without using express)
// server.get('/about.html',(req,res)=>{
//   fs.readFile('./about.html', (err,data)=>{
//     res.send(data.toString());
//   });
// });