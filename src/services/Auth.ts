import { ClientRegistrationDto,ClientDto } from '../interfaces/IClient';
import Client from '../entity/client';
import { Logger } from '../helpers';
import ClientServices from './Client';
import  bcrypt from 'bcrypt';
import {generateToken} from '../helpers/AuthHelp';
import {sendMail} from './Notification'

// import * as uuidv4 from 'uuidv4';

export default class AuthServices {
  static  async createClient (clientData : ClientRegistrationDto){
    try {
      const {fullname, email, password} = clientData;
      const clientExist = await Client.findOne({email});
      if (clientExist){
        throw new Error ('user already exist');
      }
      const registeredClient = await Client.create({
        fullname,
        email,
        password,
      });
      if(registeredClient){
        const token = generateToken(registeredClient._id)
        sendMail(token,registeredClient.email);
        Logger.info('user created', registeredClient._id);
        return {
          message : `User created sucessfully,${registeredClient._id}`,
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

