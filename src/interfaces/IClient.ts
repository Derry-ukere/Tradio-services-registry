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
  overview: {}
  log:{}
  cardDetails:{}
  bankDetails:{}
  wallet:{}
  maintainance:{}
  unrealizedPl:{}
  openPosition:{}
  affiliateStatus:{}
  affiliatePayout:{}

}
