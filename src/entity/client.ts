import mongoose from 'mongoose';
import  bcrypt from 'bcrypt';
import {ClientRegistrationDto} from '../interfaces/IClient';


const clientSchema = new mongoose.Schema({

  email : {type : String},
  password : {type : String},
  fullname: {type : String},

  overview : {
    name : {type : String}, 
    profilePhoto : {type : String},
    tel : {type : Number},
    balance : {type : Number, default : 0.0},
    address : {type : String},
    PermAddress : {type : String},
    dob : {type : String},
    city : {type : String},
    country :{type : String},
    postalCode:{type : Number},
    emailVerified : {type : Boolean, default: false},
    idProvided : {type : Boolean},
    blocked : {type : Boolean, default : false},
    justDeposited : {type : Boolean, default : false},
    bankDetailsProvided : {type : Boolean, default : false},
    cardDetailsProvided : {type : Boolean,  default : false},
    idCard : {type : String},
  },
  log : {
    totalLog : {type : Number},
    lastLog : {type : Number}
  },
  cardDetails : {
    name : {type : String, default: 'xxxx-xxxx-xxxx' },
    number : {type : Number, default : 1234},
    cvc : {type : Number , default : 123},
    expiry : {type : Number, default : 123},
    postalCode : {type : Number, default : 8887},
  },

  bankDetails : {
    routingNumber : {type : Number},
    accountNumber : {type : Number, default : 123456789},
    fullName : {type : String}
  },

  wallet : {
    availableBtc : {type : Number, default : 0.00},
    totalEquity : {type : Number, default : 0.00},
    availableMargin : {type : Number, default : 0.00},
    depositThisMonth : {type : Number, default : 0.00},
    lastDeposit : {type : Number, default : 0.00},
  },

  maintainance : {type : Number, default : 0.00},
  unrealizedPl : {type : Number, default : 0.00},
  openPosition : {type : Number, default : 0.00},
  activeOders : {type : Number, default : 0.00},
  // transactionHistory : [{id : Number, type: String, amount: Number, status: String, Balance : Number}],

  affiliateStatus : {
    index : {type : String},
    total : {type : Number, default : 0.00},
    previousDay : {type : Number, default : 0.00},
  },

  affiliatePayout : {
    Time : {type : Date},
    freePaidAmount : {type : Number, default : 0.00},
    level : {type : Number, default : 0},
    totalPayouts: {type : Number, default : 0.00},
  },
});



clientSchema.pre<ClientRegistrationDto>('save', async function (next){
  if(!this.isModified('password')){
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);
});

const Client = mongoose.model('Client',clientSchema);
export default Client;
