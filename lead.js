var MongoClient = require('mongodb').MongoClient;

const urlMongoDb = 'mongodb+srv://sales_prod:W9Xjd5cPrbZADHP9z6SMFpJ2q3aR8rb3@msuserscluster0-vvmvg.mongodb.net/<dbname>?retryWrites=true&w=majority'

// Delete generic users

// const fs = require('fs');

// fs.readFile('./genericUsers.json', 'utf8', (error, data) => {
//     if(error){
//         console.log(error);
//         return;
//     }
//     var objectJSON = JSON.parse(data)
//     objectJSON.genericUsers.forEach(genericUser => {
//         MongoClient.connect(urlMongoDb, (err, client) => {
//             client.db('MSSalesVAProd').collection('LeadPerson').deleteOne({"email":`${genericUser.email}`});
//             // const data = client.db('MSSales').collection('LeadPerson').find({"email":`${genericUser.email}`});
//             // data.forEach(doc => {
//             //     console.log(genericUser.email + "--" + doc._id)
//             // })
//         })
//         console.log(genericUser.email)
//     });
// })

// Delete LeadPerson users

const fs = require('fs');

fs.readFile('./users.json', 'utf8', (error, data) => {
    if(error){
        console.log(error);
        return;
    }
    var objectJSON = JSON.parse(data)
    objectJSON.users.forEach(user => {
        MongoClient.connect(urlMongoDb, (err, client) => {
            // client.db('MSSales').collection('LeadPerson').deleteOne({"email":`${user.email}`});
            // const data = client.db('MSSales').collection('LeadPerson').find({"email":`${user.email}`});
            client.db('MSSalesVAProd').collection('LeadPerson').deleteOne({"email":`${user.email}`});
            // data.forEach(doc => {
            //     console.log(user.email + "--" + doc._id)
            // })
        })
    });
})