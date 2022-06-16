const conexion = require('./conexion');
const DATABASE = 'reservacanchas';
const CANCHAS = 'canchas';
//const objectId = require('mongodb').objectId

async function getCanchas(){
    const conndb = await conexion.getConnection();
    const canchas = await conndb
                          .db(DATABASE)
                          .collection(CANCHAS)
                          .find()
                          .toArray();

    return canchas;
}


module.exports = {getCanchas};