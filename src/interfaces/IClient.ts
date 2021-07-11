export interface ClientRegistrationDto  {
  isModified: (arg0: string) => any; 
  username : string;
  email : string;
  password : string;
}

export interface ClientDto  {
  username :  string
  email : string
  password : string
  token? : string
  overview: {
    name : string,
    profilePhoto : string,
    tel : string,
    balance : number,
    address : string,
    PermAddress:string,
    dob:string,
    city:string,
    postalCode:string,
    country:string,
    emailVerified : boolean,
    idProvided : boolean,
    blocked : boolean,
    justDeposited : boolean,
    bankDetailsProvided :boolean,
    cardDetailsProvided : boolean,
    idCard:string
  }
  log:{}
  cardDetails:{
    name : string,
    number : number
    cvc : number,
    expiry : number,
    postalCode : number,
  }
  bankDetails:{
    routingNumber : string
    accountNumber : number,
    fullName : string
  }
  wallet:{
    availableBtc : number,
    totalEquity: number,
    availableMargin:number,
    depositThisMonth: number,
    lastDeposit:number
  }
  maintainance:{}
  unrealizedPl:{}
  openPosition:{}
  affiliateStatus:{}
  affiliatePayout:{}

}

