
class Renderer {
   /*$('.user-container').empty()
   $('.quote-container').empty()
   $('.pokemon-container').empty()
   $('.meat-container').empty()
   $('.friends-container').empty()*/
   userRenderer(data){
	//  console.log(data)
	  $(".user-container").empty()
      const source = $('#chosenUser-template').html();
      const template = Handlebars.compile(source);
      let newHTML = template(data.user);
      
      // append our new html to the page
      $('.user-container').append(newHTML);
      $('.friends-container').empty()
      const source2 = $('#Friends-template').html();
      const template2 = Handlebars.compile(source2);
	  let users=[]
	  users=data.users.slice(1)
      let newHTML2 = template2({ users });
        // append our new html to the page
      $('.friends-container').append(newHTML2);
      
     
       }
       
      pokemonRenderer(pokemon){
         console.log(pokemon.pokemon)

		 $(".pokemon-container").empty()
         const source = $('#Pokemon-template').html();
         const template = Handlebars.compile(source);
         const newHTML = template(pokemon);

         // append our new html to the page
         $('.pokemon-container').append(newHTML);
      
      }



         quoteRenderer(data){
		 $('.quote-container').empty();
         const source = $('#quote-template').html();
         const template = Handlebars.compile(source);
         const newHTML = template(data);
         // append our new html to the page
         $('.quote-container').append(newHTML);
         }


      aboutMeRenderer(data){
		    $('.meat-container').empty();
            const source = $('#About-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template(data);
         
            // append our new html to the page
            $('.meat-container').append(newHTML);
         
         }
      
}