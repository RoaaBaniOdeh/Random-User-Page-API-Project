//This is the class that will manage all your APIs
const displayUser = function(data) {
          let user = {
          firstName : data.results[0].name.first, 
          lastName : data.results[0].name.last,
          locationCity : data.results[0].location.city,
          locationState : data.results[0].location.state,
          PICTURE : data.results[0].picture.medium
          }
         
          let users =[]
          for (let user of data.results) {
            users.push(user.name.first + user.name.last +user.location.state +user.location.city+user.picture.medium)
          }
          console.log(users)
    }

class APIManager {
    constructor() {
        this.data = {}
    }

   
  get7User = function(){
          
      
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?results=7',
        success: displayUser,
        error: function (xhr, text, error) {
            alert(text);
        }
        }); 
  }

  getQuote = function(){
          
    $.ajax({
     method: "GET",
     url: 'https://api.kanye.rest/',
     success: function (data) {
         console.log(data["quote"]);
     },
     error: function (xhr, text, error) {
         console.log(text);
     }
     }); 
   
   }
   
   
    getpokemon = function(){
            
      $.ajax({
       method: "GET",
       url: 'https://pokeapi.co/api/v2/pokemon/?limit=1',
       success: function (data) {
           console.log(data)
       },
       error: function (xhr, text, error) {
           console.log(" ");
       }
       }); 
     
     }
  
      randomText = function(){
            
      $.ajax({
       method: "GET",
       url: 'https://baconipsum.com/api/?type=meat-and-filler',
       success: function (data) {
           console.log(data)
       },
       error: function (xhr, text, error) {
           console.log(text);
       }
       }); 
     
     }
   
}

const test = new APIManager()
test.getQuote()
test.get7User()
test.getpokemon()
