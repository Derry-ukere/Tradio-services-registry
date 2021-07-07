import { ClientRegistrationDto,ClientDto } from '../interfaces/IClient';
import Client from '../entity/client';
import { Logger } from '../helpers';
import ClientServices from './Client';
import  bcrypt from 'bcrypt';

// import * as uuidv4 from 'uuidv4';

export default class AuthServices {
  static  async createClient (clientData : ClientRegistrationDto){
    try {
      const {username, email, password} = clientData;
      console.log('username', username);
      console.log('email', email);
      console.log('password', password);
      const clientExist = await Client.findOne({email});
      if (clientExist){
        throw new Error ('user already exist');
      }
      const registeredClient = await Client.create({
        username,
        email,
        password,
      });
      if(registeredClient){
        Logger.info('user created', registeredClient._id);
        return {
          message : 'User created sucessfully',
          status: 'tested'
        };
      }
     
    } catch (error) {
      Logger.error(' user was not created',error);
      throw new Error ('unable to create user');
    }
  }

  static async authenticateUser (data : {email : string, password : string}){
    let user! :  ClientDto;
    try{
      user  =  await ClientServices.lookUpClient(data);
      if (user){
        const matched =  await bcrypt.compare(data.password, user.password);
        if(!matched){
          throw new Error('invalid password');
        }
      }
      return user;

    }catch(error){
      Logger.error(' user was not created', error);
      throw new Error('user not found');
    }
  }
}

