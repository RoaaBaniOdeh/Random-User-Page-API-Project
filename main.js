const loadUserData = new APIManager()
const displayUsers = new Renderer()


const loadUserFunction = function (){
   loadUserData.get7User()
   loadUserData.getQuote()
   loadUserData.getnewPokemon()
   loadUserData.randomText()   
}

const displayUserFunction = function (){
   //displayUser.
   displayUsers.userRenderer(loadUserData.data)
   displayUsers.quoteRenderer(loadUserData.data)
   displayUsers.aboutMeRenderer(loadUserData.data)
   displayUsers.pokemonRenderer(loadUserData.data)
}  
$("#load").on("click",loadUserFunction);
$("#display").on("click",displayUserFunction);