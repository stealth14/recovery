var MongoClient = require('mongodb').MongoClient;

const urlMongoDb = 'mongodb+srv://sales_prod:W9Xjd5cPrbZADHP9z6SMFpJ2q3aR8rb3@msuserscluster0-vvmvg.mongodb.net/<dbname>?retryWrites=true&w=majority'

let users = []

const fs = require('fs');

fs.readFile('./genericUsers.json', 'utf8', async (error, data) => {
    if(error){
        console.log(error);
        return;
    }
    var objectJSON = JSON.parse(data)
    
    for (const user of objectJSON.genericUsers) {
        MongoClient.connect(urlMongoDb, async (err, client) => {
            // const lead = await client.db('MSSalesVAProd').collection('LeadPerson').findOne({"email":`${user.email}`});
            // console.log(lead)
            const users = await fs.promises.readFile('./users.json','utf8')
            // console.log(users)

        })
    }
})

// fs.writeFile(

//     './updated-users.json',

//     JSON.stringify(myArray),

//     function (err) {
//         if (err) {
//             console.error('Crap happens');
//         }
//     }
// );