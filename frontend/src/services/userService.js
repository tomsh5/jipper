export const userService =  {
    getUser
  }
  

const USER  = 
  { 
    name: "Ochoa Hyde", 
    coins: 100, 
    moves: [] 
  }


  function getUser(){
    console.log('Getting user..');
    return USER;
  }