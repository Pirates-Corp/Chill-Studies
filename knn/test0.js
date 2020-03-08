
const knn = require('./knn');

 knn.getType([1,1,4,4,1,8,0,0,0,9,9])
    .then(type => console.log(type))
    .catch(err => console.log(err))



