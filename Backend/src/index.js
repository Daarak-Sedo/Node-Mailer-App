const express =require('express') ;
const route =require('./routes/route') ;
const bodyParser = require('body-parser');
const app = express()
const cors = require("cors")

app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


app.use('/', route)

app.use((req, res) => res.status(400).send({ status: false, message: `Invalid URL` }))
app.listen(3000, () => console.log(`Express app is running on port 3000`))