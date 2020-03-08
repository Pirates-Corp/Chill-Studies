const KNN = require('ml-knn');
const csv = require('csvtojson');

exports.getType = (input) => {

    let knn;
    const csvFilePath = 'dataset.csv'; // Data
    const names = ['ABC_%','D_%','C_%','AAC_%','A_%','V_%','ABC_T','D_T','C_T','AAC_T','A_T','LS'];
    let data = [], X = [], Y = [];

    csv({noheader: true, headers: names})
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        data.push(jsonObj); 
    })
    .on('done', (error) => {
    

    let types = new Set(); 

    data.forEach((row) => {
        types.add(row.LS);
    });

    typesArray = [...types]; 

    console.log(typesArray)

    data.forEach((row) => {

        let rowArray, typeNumber;

        rowArray = Object.values(row).map(key => parseFloat(key)).slice(0,11)

        typeNumber = typesArray.indexOf(row.LS); 

        X.push(rowArray);
        Y.push(typeNumber);
    });

    knn = new KNN(X, Y, {k: 1});

    console.log(knn.predict(input));

    });
}