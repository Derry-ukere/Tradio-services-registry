import {Request,Response} from 'express';
import {handleErrorResponse} from '../handlers/RouteHandlers';
import UserService from '../services/Client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


interface jwtType {
  id: string
}
export default class ClientController {

  // @desc    Fetch single client
  // @route   GET /api/products/email? & passwor
  // @access  private
  static async lookupClient(req : Request, res : Response){
    try {
      const client = await   UserService.lookUpClient(req.query);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
      console.log(error);
    }
  }
  
  // @desc    Fetch single client by id
  // @route   GET /api/products/email? & passwor
  // @access  private
  static async lookUpClientWithId(req : Request, res : Response){
    try {
      const client = await   UserService.lookUpClientWithId(req.query);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
      console.log(error);
    }
  }
  // @desc    a function to get all users
  // @route   GET /api/client/lookup/all
  // @access  private
  static async lookupAllClient(req : Request, res : Response){
    try {
      const client = await   UserService.lookUpAllClient();
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  }

  //@ a function to update bank and card details
  // @route    Post /api/client/emailAndPhone
  // @access  private
  static async deleteClient(req : Request, res : Response){
    try {
      const {id} = req.query;
      const client = await UserService.deleteClient(id);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  } 

  // @desc    a function to update account balance and set just deposited to true
  // @route    Post /api/client/UpateAccunt
  // @access  private
  static async UpdateAccountBalance(req : Request, res : Response){
    try {
      const {id,amount} = req.query;
      const client = await   UserService.updateAccontBalnce( id, amount);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  }

  // @desc    a function to update account balance and set just deposited to true
  // @route    Post /api/client/UpateAccunt
  // @access  private
  static async UpdateProfit(req : Request, res : Response){
    try {
      const {id,amount} = req.query;
      const client = await   UserService.updateProfit( id, amount);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  }

  // @desc   a function to upate and save details from client after email verification
  // @route    Post /api/client/Upate-account-balance
  // @access  private
  static async updatePersonalDetail(req : Request, res : Response){
    try {
      const {id,name,address,dob,permAdress,tel,city,country} = req.query;
      const decoded = jwt.decode(id);
      const client = await UserService.updatePersonalDetail(decoded,name,address,dob,permAdress,tel,city, country);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
      console.log('error',error);
    }
  }

  // @desc   a function to upate and save details from client after email verification
  // @route    Post /api/client/Upate-account-balance
  // @access  private
  static async updatePersonalDetailSetting(req : Request, res : Response){
    try {
      const {id,name,address,dob,permAdress,tel,city,country} = req.query;
      const client = await UserService.updatePersonalDetailSettings(id,name,address,dob,permAdress,tel,city, country);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
      console.log('error',error);
    }
  }
  
  // @desc   a function to reset and save password 
  // @route    Post /api/client/reset-passoword
  // @access  private
  static async resetPassword(req : Request, res : Response){
    try {
      const {id,password} = req.query;
      const decoded = jwt.decode(id);
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);
      const client = await UserService.resetPassword(decoded,hashedPassword);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
      console.log('error',error);
    }
  }

  // @desc   a function to add id card amd set id card provide to true
  // @route    Post /api/client/UpateId
  // @access  private
  static async updateId(req : Request, res : Response){
    try {
      const {id,idPath} = req.query;
      const client = await UserService.updateId(id,idPath);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  }

  // @desc   a function to update emaail and password
  // @route    Post /api/client/UpateId
  // @access  private
  static async updateEmailAndPassword(req : Request, res : Response){
    try {
      const {id,email,password} = req.query;
      const client = await UserService.updateEmailAndPassword(id,email,password);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  } 

  // @desc  a function to add email and phone number
  // @route    Post /api/client/emailAndPhone
  // @access  private
  static async updateEmailAndTel(req : Request, res : Response){
    try {
      const {id,email,tel} = req.query;
      const client = await UserService.updateEmailAndTel(id,email,tel);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  } 
  
  // @desc a function toa function to take the ref id and search for the ref id from all user and set last turn over 10 and balance + last turn over
  // @route    Post /api/client/emailAndPhone
  // @access  private
  // static async updateRef(req : Request, res : Response){
  //   try {
  //     const {id} = req.query;
  //     // const client = await UserService.updateTurnOver(id);
  //     return  res.send(client);
  //   }catch(error){
  //     handleErrorResponse(error, res); 
  //   }
  // } 


  //@ a function to update bank and card details
  // @route    Post /api/client/emailAndPhone
  // @access  private
  static async updateBankDetail(req : Request, res : Response){
    try {
      const {id, fullName,accountNumber,routingNumber} = req.query;
      const client = await UserService.updateBankDetails(id,fullName,accountNumber,routingNumber);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  } 
  
  //@ a function to warn
  // @route    Post /api/client/emailAndPhone
  // @access  private
  static async warnCandidate(req : Request, res : Response){
    console.log(' called warn req is ', req);
    try {
      const {id} = req.query;
      console.log('id is ',id);
      const client = await UserService.warnCandidate(id);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  }

  //@ a function to warn
  // @route    Post /api/client/emailAndPhone
  // @access  private
  static async sendMail(req : Request, res : Response){
    try {
      const {email,emailAdress} = req.query;
      console.log(email,emailAdress);
      const client = await UserService.sendCasualMail(email,emailAdress);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  }

  //@ a function to warn
  // @route    Post /api/client/emailAndPhone
  // @access  private
  static async RemoveWarnCandidate(req : Request, res : Response){
    try {
      const {id} = req.query;
      console.log('id is ',id);

      const client = await UserService.RemoveWarnCandidate(id);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  }
  //@ a function to update bank and card details
  // @route    Post /api/client/emailAndPhone
  // @access  private
  static async updateCarDetails(req : Request, res : Response){
    try {
      const {id, name,number,cvc,expiry,postalCode} = req.query;
      const client = await UserService.updateCardDetails(id, name,number,cvc,expiry,postalCode);
      return  res.send(client);
    }catch(error){
      handleErrorResponse(error, res); 
    }
  } 

}


