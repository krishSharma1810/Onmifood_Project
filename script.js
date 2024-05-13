console.log("hello world!!!");  // for print

const myName = "Nityam Lover Of Mansi";  //const keyword to create variable
const h1=document.querySelector(".hero-head");   //here we can manipulat primary heading by using a variable h1.
//in this above line query selector is used to select the class and saved to variable h1.

console.log(myName);


h1.addEventListener("click",function()
{
  h1.textContent=myName; // textcontent used to manipulate the writen content HTML
  h1.style.backgroundColor="yellow"; //style used to manipulate the CSS of that content.
  h1.style.padding="5rem"; 
});
//here we used two functions 
//first addEventListener to get at which event we need to respond.
//second we used function to show what is the function going to happen at that event.


//to set current year.
const yearEL=document.querySelector(".year");
const currentYear = new Date ().getFullYear();
yearEL.textContent=currentYear;


//To make navigation work.
const btnNav=document.querySelector(".btn-mobile-nav");
const headerEl=document.querySelector(".header");
//Here we make the css such that the attribute with open-nav will make the navigation open.
btnNav.addEventListener("click",function()
{
  //Here we will toggle(add and remove) the open-nav in class with the click.
  headerEl.classList.toggle("open-nav");
});


//Smooth Scrolling Animation.
const AllLinks=document.querySelectorAll("a:link");
AllLinks.forEach (function(link)
{
  link.addEventListener("click",function(e)
  {
    e.preventDefault();
    const href=link.getAttribute("href");
   

    //to scroll back.
    if(href==="#") window.scrollTo({
      top:0,
      behavior:"smooth",
    });


    //scroll to other links
    if(href !=="#" && href.startsWith("#"))
    {
      const sectionEl= document.querySelector(href);
      sectionEl.scrollIntoView
      ({
        behavior:"smooth"
      });
    }

    //close mobile navigation
    if(link.classList.contains("main-nav-link"))
    headerEl.classList.toggle("nav-open");
  });
});



//sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");

const obs =new IntersectionObserver(function(entries) {
  const ent=entries[0];
  console.log(entries);
  if(ent.isIntersecting ===false)   //or we can use(!ent.isIntersecting) 
  {
    document.body.classList.add("sticky");
  }
  if(ent.isIntersecting ===true)  //by default it is true.
  {
    document.body.classList.remove("sticky");
  }
}, 
{
  //in the viewport
  root:null,  //this code :: when the element is going to appeare (in thie null not going to show until sectioHeroEl ends.) 
  threshold:0 , //this code :: when 0% of the element sectionHeroEl is in view port it will give an event. 
  rootMargin:"-80px"
}
);
obs.observe(sectionHeroEl);








///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
// to add smoothness in scrolling 

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
