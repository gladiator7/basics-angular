export class LoggingService{
logStatusChange(status : string ){
  console.log('A server status changed, new status: ' + status);

}
}

//helps to follow DRY code
//use this service to add code which is used in multiple components
