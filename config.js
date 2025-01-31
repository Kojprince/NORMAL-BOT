const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWZOqOBj9L3nFvsomYlVXDe0Goqgt4jJ1H0IIGFkNYbPL/z6F3V23H+be6eEpBeTk5CzfG0hSkmMTN2D4BjJKSshwu2RNhsEQvBS+jynoAA8yCIYgnytBsiiCFQozZ4f00F7BpX5ivIpW4WF2HulxfbP6VeYYz+DeAVnhRgT9AbB2cDaRyaapX6Rzdy9fBDLIY4UV/dpjFbIN6qzmUY2rQ/AM7i0iJJQkwSQ74xhTGJm4WUNCv0cfzpA0FTZ6TVEAG7Ebh+FlRI2oxIZNpuPu4jCQ0EiIFef4Pfrb6NVRSKNX8dGqTUXd+nUpHiSz9G18YsjjrfVlkupltKve6eckSLBneDhhhDXf1j20/LOlTp2bN2UDPGaiH10X/ZdFv7SXlStwyFPn3b5xvYnoe8Sl1VmTJ6YgnDcLbq5nMIvkNS3mqi7vbitdL1EtTEv+tK7Tr8TX9DMr4f/Rfbl08sV8lPs9olKHH58K2qw9oUeUVZVd+iUf2qlxHi8lffdN+hdf2KeJqkvQRDe7vBku702jxOlGjU8szmzsrlTousN/oQ9ZQf/E8uU1LQk3HtgJEzcHXVZ7bHZTRM19OcAqxpacbnrVHC19SRH3XZceouMLrmZORNV8gPHAeH0NesZBm4YIcY6dwbxyxsHz40YhbgwPDPl7B1AckJxRyEiaPN7xfAdAr9xiRDF7yAu2WXLinFwfubt56GQ7t/8qrJztduNvJMaTmbQ1XWcR7gzaewYdkNEU4TzHnk5yltJmifMcBjgHw79/dkCCa/ZuXHucyHeAT2jOdkmRRSn0Pl39/AgRSouEbZsEjdoFpmDY+/UaM0aSIG91LBJI0ZmUeHSGLAdDH0Y5vneAh0uCcIsHfHJcGmHp2UfzutvPF8dTFapVS/mcJu+/QMFDEnbdJ+RK/SdJRf6Ti3v8E1JFT+gNVCghFXQA+ehMu+e3Fo438iVrHLOoXydFL4O2Gt6kfj7Qp/nDhnftMcUeGDJa4A5wIQqLzE5DnPwBd+A0R75udAsbN5wrcbPlVzZ3CBVL+4L77ikYvv2aU6PUa/GmqtbXleMEdED8iCBpby6IoiyJMs8P5P5Q+Sv/UbU6wiz7kWDWwn5o3m7wMIMkysEQjFYczzOkTxYXeaBUs5k2CbRRoIFfHn2G/T1MtuUM4sNBXiqzZbG5JtLF4hJ0oKrWxLsrv9BPpDYWfC3sNs//AgKGIFp4V3epM3d5ETWJM/dG7dXmvsZWuR8XuyBfdzUyCU9Mwusw2fP9itMHjeMsxkuTVvbcO/QVeWYVpeQEqBn04ylfPZrxmZWvhx2sqVDhMba350Wix1tuH0nplfNQnGhZD5Xdy6Y3PtNkjgMtWKsGpN7V4qLeebWr6WTsTdeT0dwcy/OFP4dXunfp5jLavNfwMQaij/FLHgV5+0iWT/BjmiWwdeg/vPma8d698wXiYzz+bsTsbo4/j3jOXtWXRWhmnHHzM3Ha726WWWSybS0c8+1IRV40Aff7zw7IIsj8lMZtURKPpsQDHRDBnGm/amqTGOcMxhkY8oo4ECVeVsQOiBsty7YMss92A619rI0C7v8A8lJ7pfkHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





