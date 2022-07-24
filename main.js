const loadUserData = new APIManager()
const displayUser = new Renderer(upl)


const loadUserFunction = function (){
   loadUserData.get7User()
   loadUserData.getQuote()
   loadUserData.getpokemon()
   loadUserData.randomText()   
}

const displayUserFunction = function (){
   //displayUser.
}  
$(".buttons:first-child").on("click",loadUserFunction);
$(".buttons:last-child").on("click",displayUserFunction);