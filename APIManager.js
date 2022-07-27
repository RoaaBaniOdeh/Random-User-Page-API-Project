//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
		this.newPokemon=1
		this.pokemonUrl=""
    }

   
  get7User = function(){
    let api=this 
    $.ajax({
        method: "GET",
        url: 'https://randomuser.me/api/?results=7',
        success:  function(data) {
          let user = {
          firstName : data.results[0].name.first, 
          lastName : data.results[0].name.last,
          locationCity : data.results[0].location.city,
          locationState : data.results[0].location.state,
          PICTURE : data.results[0].picture.medium
          }
         
          let users =[]
          for (let user of data.results) {
          users.push({'firstName': user.name.first ,'lastName':user.name.last})
          }
		  api.data.user=user
		  api.data.users=users
     //     console.log(users)
    },
        error: function (xhr, text, error) {
            alert(text);
        }
        }); 
  }

  getQuote = function(){
    let api =this

    $.ajax({
     method: "GET",
     url: 'https://api.kanye.rest/',
     success: function (data) {
         api.data.quote=data["quote"];
     },
     error: function (xhr, text, error) {
         console.log(text);
     }
     }); 
   
   }
   
   
    getnewPokemon=function()
    {
    let api=this
        $.ajax(
            {
                method: "GET",
                
                url:  `https://pokeapi.co/api/v2/pokemon/?offset=${api.newPokemon++}&limit=1`,
                success: function (data) {
					      api.getPokemon()
                     api.data.pokemon={}
                    api.data.pokemon.name=data.results[0].name 
                     api.data.pokemonUrl=data.results[0].url 
                   //  api.getPokemon()
                },
                error: function (xhr, text, error) {
                    console.log(text)
                }
            })
        
    }
    //4 PIC
    getPokemon=function()
    {
    let api=this.data
        $.ajax(
            {
                method: "GET",
                
                url: api.pokemonUrl,
                success: function (data) {
                  api.pokemon.img=data.sprites.back_default  
                },
                error: function (xhr, text, error) {
                    console.log(text)
                }
            })
        
    }
  
      randomText = function(){
        let  api=this  
      $.ajax({
       method: "GET",
       url: 'https://baconipsum.com/api/?type=meat-and-filler',
       success: function (data) {
		   api.data.aboutme=[]
		   api.data.aboutme=data
           console.log(data)
       },
       error: function (xhr, text, error) {
           console.log(text);
       }
       }); 
     
     }
   
}



/*const test = new APIManager()
test.getQuote()
test.get7User()
test.getpokemon()*/
