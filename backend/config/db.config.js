 import {connect} from "mongoose"
 
export default  async function connection(){
    await connect(process.env.connection_string)
    .then(()=>{
        console.log("connected successfully !");
        
    })
 }