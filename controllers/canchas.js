const canchas = require('../data/canchas');

async function getCanchas(){
    return canchas.getCanchas();
}

module.exports = {getCanchas};