const {
    NODE_ENV,
 } = process.env;
 
 const {
   SECRET,
   PORT
 } = (
   NODE_ENV === 'development'
     ? require('dotenv').config().parsed
     : process.env
 );
 
 const envVars = {
   SECRET,
   PORT: PORT || '3001'
 }
 
 export default envVars;