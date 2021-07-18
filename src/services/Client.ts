/* eslint-disable no-unused-vars */
import Client from '../entity/client';
import {ClientDto} from '../interfaces/IClient';


export default  class UserService {
  static async lookUpClient ( data : {email : string, password : string}) {
    const {email,password} = data;
    if(!(email &&  password)){
      throw new Error ('user not found, specify user name and password');
    }
    try{
      const client = await Client.findOne({email});
      if(!client){
        throw new Error ('user not found');
      }
      return client;
    }catch (error){
      throw {
        ...error
      };
    }
  }

  static async deleteClient (id : string) {
    try{
      const client = await Client.findByIdAndDelete(id);
      return client;
    }catch (error){
      throw {
        ...error
      };
    }
  }

  static async lookUpClientWithEmail (email : string) {
    if(!email){
      throw new Error ('user not found, specify email address');
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
  static async lookUpAllClient ( ) {
    try{
      const clients = await Client.find();
      return clients;
    }catch (error){
      throw {
        ...error
      };
    }
  }

  static async updateAccontBalnce ( id: string, amount : number) {
    try{
      const options = {
        'wallet.availableBtc': amount,
        'overview.justDeposited': true,
      };
      const client:ClientDto = await Client.findByIdAndUpdate(id , {$set: options}, (err, doc) =>{
        if (err) throw new Error('An Error occured while updating payment');
        return doc;
      });
      return client;          
    }catch (error){
      throw {
        ...error
      };
    }
  }

  
  static async updatePersonalDetail ( obj:any, name:string,dob:string, image:string ,address:string,permAdress:string,city :string,postalCode:number, country:string) {
    try{
      const id = obj.id;
      const options = {
        'overview.name': name,
        'overview.address': address,
        'overview.dob': dob,
        'overview.PermAddress': permAdress,
        'overview.profilePhoto': image,
        'overview.city': city,
        'overview.postalCode': postalCode,
        'overview.country': country,
        'overview.emailVerified': true,
      };
      const user =  await Client.findByIdAndUpdate(id, {$set: options}, (err, doc) =>{
        if (err) {
          console.log('err',err);
          throw new Error('An Error occured while updating user info');
        }
        return {
          message: 'User created sucessfully'
        };
      });
      return user;
    }catch (error){
      throw {
        ...error
      };
    }
  }

  static async updateId ( id: string, idPath : string) {
    try{
      const options = {
        'overview.idCard': idPath,
        'overview.cardDetailsProvided': true,
      };
      const client:ClientDto = await Client.findByIdAndUpdate(id , {$set: options}, (err, doc) =>{
        if (err) throw new Error('An Error occured while updating id card');
        return doc;
      });
      return client;          
    }catch (error){
      throw {
        ...error
      };
    }
  }

  static async updateEmailAndPassword ( id: string, email : string, password : string) {
    try{
      const options = {
        'email': email,
        'password': password,
      };
      const client:ClientDto = await Client.findByIdAndUpdate(id , {$set: options}, (err, doc) =>{
        if (err) throw new Error('An Error occured while updating email and password');
        return doc;
      });
      return client;          
    }catch (error){
      throw {
        ...error
      };
    }
  }
  static async updateEmailAndTel ( id: string, email : string, tel : number) {
    try{
      const options = {
        'email': email,
        'overview.tel': tel,
      };
      const client:ClientDto = await Client.findByIdAndUpdate(id , {$set: options}, (err, doc) =>{
        if (err) throw new Error('An Error occured while updating email and phone number');
        return doc;
      });
      return client;          
    }catch (error){
      throw {
        ...error
      };
    }
  }


  static async updateBankDetails ( id: string, fullName : string, accountNumber : number, routingNumber : number) {
    try{
      const options = {
        'bankDetails.routingNumber': routingNumber,
        'bankDetails.accountNumber': accountNumber,
        'bankDetails.fullName': fullName,
        'overview.bankDetailsProvided':true

      };
      const client:ClientDto = await Client.findByIdAndUpdate(id , {$set: options}, (err, doc) =>{
        if (err) throw new Error('unable to update bank details');
        return doc;
      });
      return client;          
    }catch (error){
      throw {
        ...error
      };
    }
    
  }


  
  static async updateCardDetails ( id: string, name : string, number : number, cvc : number,expiry : number,postalCode : number,) {
    try{
      console.log('from services');
      const options = {
        'cardDetails.name': name,
        'cardDetails.number': number,
        'cardDetails.cvc': cvc,
        'cardDetails.expiry': expiry,
        'cardDetails.postalCode': postalCode,
        'overview.cardDetailsProvided':true
      };
      const client:ClientDto = await Client.findByIdAndUpdate(id , {$set: options}, (err, doc) =>{
        if (err) console.log(err);
        return doc;
      });
      return client;          
    }catch (error){
      throw {
        ...error
      };
    }
  }

  static async resetPassword ( obj:any, password:string) {
    try{
      const id = obj.id;
      const options = {
        'password': password,
      };
      const user =  await Client.findByIdAndUpdate(id, {$set: options}, (err, doc) =>{
        if (err) {
          console.log('err',err);
          throw new Error('An Error occured while updating user info');
        }
        return {
          message: 'User created sucessfully'
        };
      });
      return user;
    }catch (error){
      throw {
        ...error
      };
    }
  }
}

