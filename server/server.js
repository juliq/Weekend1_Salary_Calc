// const express = require('./node_modules/express/index.js')
const express = require('express'); // shorthand of line above
// works when we use npm install express

const app = express();

const PORT = 5000;

app.use(express.static('server/public'));   // handles single requests--express is an object & an fcn

// app.get('/', (req,res) => {  //anonymous callback
//     res.send('hello express!');
// })

// app.get('/goodbye', (req,res) => {
//     res.send('Adios!');

// })

app.listen(PORT, () => {
    console.log('listening on port', PORT);
});