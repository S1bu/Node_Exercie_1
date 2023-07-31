// ------------------
// Reading content
//-------------------
const {
    writeFile,readFile,appendFile
} = require('fs');

readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('This is an error:', err);
    } else {
        console.log(data);
    }
},
// ------------------
// Appending content
//-------------------
appendFile('./data.txt','Sibusiso Dyan Appended this data successfully',(err, data) =>{
    if(err){
        console.error('This is an error', err);
    } else{
        console.log(data)
    }
})
);

// yes it displayed underneath