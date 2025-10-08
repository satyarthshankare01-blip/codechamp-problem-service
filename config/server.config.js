process.loadEnvFile('.env');
const PORT  = process.env.PORT;
const  ATLAS_DB_URL = process.env.ATLAS_DB_URL;


export {PORT , ATLAS_DB_URL};


