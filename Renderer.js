
class Renderer {
   /*$('.user-container').empty()
   $('.quote-container').empty()
   $('.pokemon-container').empty()
   $('.meat-container').empty()
   $('.friends-container').empty()*/
   userRenderer(){
      const source = $('#chosenUser-template').html();
      const template = Handlebars.compile(source);
      let newHTML = template(results[0]);
      
      // append our new html to the page
      $('.user-container').append(newHTML);
       
      const source2 = $('#Friends-template').html();
      const template2 = Handlebars.compile(source2);
      let newHTML2 = template2({ elements: results.slice(1) });
        // append our new html to the page
      $('.friends-container').append(newHTML2);
     
       }
       
      pokemonRenderer(){
         const source = $('#pokemon-template').html();
         const template = Handlebars.compile(source);
         const newHTML = template(results[0]);
      
         // append our new html to the page
         $('.pokemon-container').append(newHTML);
      
      }



         quoteRenderer(){
         const source = $('#quote-template').html();
         const template = Handlebars.compile(source);
   
         const newHTML = template(results.quote);
      
         // append our new html to the page
         $('.quote-container').append(newHTML);
         }


      aboutMeRenderer(){
            const source = $('#aboutMe-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template(results);
         
            // append our new html to the page
            $('.meat-container').append(newHTML);
         
         }
      
}