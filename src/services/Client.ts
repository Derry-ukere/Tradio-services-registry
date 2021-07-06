import Client from '../entity/client';

//loookup user

export default  class UserService {
  static async lookUpClient ( data : {email : string, password : string}) {
    const {email,password} = data;
    if(!(email ||  password)){
      throw new Error ('user not found, specify user name o=and password');
    }
    try{
      const client = await Client.findOne({email});
      return client;
    }catch (error){
      throw {
        ...error
      };
    }
  }
}
