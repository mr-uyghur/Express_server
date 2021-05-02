const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const helmet = require('helmet') //helmet dependency for security controll

app.use(cors()) //dependency
app.use(helmet()) //use helmet
app.use(express.json(), express.urlencoded({ extended:true }))

require("./server/config/mongoose.config")
// require mongoose.config
require("./server/routes/user.routes")(app);
// require routes


app.listen(port, () => console.log(`listening on port ${port}`))


