process.loadEnvFile('.env');
const PORT  = process.env.PORT;
const ATLAS_DB_URL = process.env.ATLAS_DB_URL;
const NODE_ENV = process.env.NODE_ENV;



export {PORT , ATLAS_DB_URL , NODE_ENV } 

