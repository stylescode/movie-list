const express = require('express');
const router = require('./routes.js');


const app = express();

// check why we need to export
module.exports.app = app;

app.set('port', 3000);

app.use(express.json());


// check how this works/why router is second argument
app.use('/home', router);

// I believe this is what connects to the mount on cllient side
app.use(express.static(__dirname, '../client'));





// const express = require('express');
// const app = express();
// const PORT = 3000 || process.env.PORT;

// app.use(express.static('client/dist'));

// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// })