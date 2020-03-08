const KNN = require('ml-knn');
const fs = require('fs')


function csvJSON(csv){

    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].trim().split(",");

    console.log(headers)
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].trim().split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];

            if(currentline[0] === '') {
                console.log(currentline)
            }
        }
  
        result.push(obj);
  
    }
    
    //return result; //JavaScript object
    return JSON.parse(JSON.stringify(result)); //JSON
  }

exports.getType = async (input) => {

    let knn;
    let type;
    const csvFilePath = __dirname+'/dataset.csv'; // Data
    const names = ['ABC_%','D_%','C_%','AAC_%','A_%','V_%','ABC_T','D_T','C_T','AAC_T','A_T','LS'];
    let data = [], X = [], Y = [];

    const csv = fs.readFileSync(csvFilePath,'utf-8')

    data = csvJSON(csv)

    let types = new Set(); 

    data.forEach((row) => {
        if(row.LS === undefined) console.log(row)
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

    type = knn.predict(input);


    return type
}