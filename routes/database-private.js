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

const proConfig = {
    connectionString: process.env.DATABASE_URL // comes from heroku addon
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


module.exports = {
    pool,
    generateId,
    checkId
}

