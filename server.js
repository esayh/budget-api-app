const app = require('./app')


//Configuration
require('dotenv').config()
const PORT = process.env.PORT

//Listen
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))
