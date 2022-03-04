const Pool = require('pg').Pool
const path = require('path')
require("dotenv").config({path: path.resolve(__dirname, '../.env')});


const devConfig = {
    user: process.env.pg_user,
    host: process.env.pg_host,
    database: process.env.pg_database,
    password: process.env.pg_password,
    port: process.env.pg_port,
};

const herokuConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  };

const pool = new Pool(process.env.NODE_ENV === "production" ? herokuConfig : devConfig);
// const pool = new Pool(herokuConfig);

const generateId = () => {
    
    let id = []
    for (let i = 0; i < 30; i++){
        let x = Math.floor(Math.random()*10)
        id.push(x);
    }
    let y = id[1]*2;
    if (y > 9){y-=10}
    id.splice(7,1,y);
    id.splice(12,1,y);
    id.splice(17,1,id[1]);
    
    return String(id.join(''));
}

const generateIdAdmin = (str) => {
    let z = 1
    if (str === "admin"){
        z = 9
    }
    if (str === "staff"){
        z = 5
    }
    let id = []
    for (let i = 0; i < 40; i++){
        let x = Math.floor(Math.random()*10)
        id.push(x);
    }
    let x = id[2];
    let y = id[2]*2;
    if (y > 9){y-=10}
    id.splice(7,1,y);
    id.splice(10,1,y);
    id.splice(13,1,x);
    id.splice(19,1,5);
    id.splice(22,1,z);  // indicator for elevation type
    
    return String(id.join(''));
}

const checkId = (id) => {
    let x = id[1]
    let y = x*2;
    if (y > 9){y -= 10}

    if (y % 2 != 0){
        return false
    }
    if (id[7] == y && id[12] == y && id[17] == x ){
        return true
    }
    else {return false}
}

const checkIdAdmin = (id) => {  
    let x = id[2]
    let y = x*2;
    if (y > 9){y -= 10}

    if (y % 2 != 0){
        return false
    }
    if (id[7] == y && id[10] == y && id[13] == x && id[19] == 5){
        return true
    }
    else {return false}
}


module.exports = {
    pool,
    generateId,
    checkId,
    generateIdAdmin,
    checkIdAdmin
}

