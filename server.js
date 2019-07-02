const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000 

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res){
     res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 