const {
    NODE_ENV,
} = process.env;
 
 const {
    SECRET,
    PORT,
    MONGODB_URI
} = (
    NODE_ENV === 'development'
        ? require('dotenv').config().parsed
        : process.env
);
 
const envVars = {
    MONGODB_URI: MONGODB_URI || 'mongodb uri',
    SECRET,
    PORT: PORT || '3001'
}
 
export default envVars;