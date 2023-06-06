const express = require('express')
const app = express()
const port = process.env.PORT || 5550

//app.use('/api/contacts', require('./routes/contactRoutes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})