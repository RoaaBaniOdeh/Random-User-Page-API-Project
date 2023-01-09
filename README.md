# Random-User-Page-API-Project

Random-User-Page-Generator
It's essentially somthing like a Facebook profile page, filled with content taken from APIs and generated with different data at the click of a button.
request data from APIs ,jQuery, use Handlebars.js to render data on a page , and of course creating it all in OOP. 
Let's go through each part of the project 

Renderer.js:
Renderer is a class which contains each of the methods to render each section of the user page through Handlebars.

HTML file:
Each of the Renderer methods have a corresponding Handlebars template script filled in here.

APIManager.js:
API Manager is a class with methods to  make all the API requests

main.js 
Here I Create the instances of the classes I'll be using .
Define the loadData and renderData functions
and Use the instances with MVC principles .


![Screenshot (92)](https://user-images.githubusercontent.com/102085800/211426988-ba7dee74-84d1-415e-a3f5-79bef6030ff7.png)
