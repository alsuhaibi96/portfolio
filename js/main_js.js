function animate(){
    var element001 =document.getElementById("CV");
    element001.setAttribute('style','color: red');
  
  
  }
    function changeTheme() {
       var element = document.body;
       element.classList.toggle("theme-mode");
       var element2=document.getElementById("nav-link-id");
       var element3=document.getElementById("nav-link-about-id");
       var element4=document.getElementById("nav-link-services-id");
       var element5=document.getElementById("nav-link-resume-id");
       var element6=document.getElementById("changeLanguageBtn") ;
       var element7=document.getElementById("nav-link-projects-id");

    
      //  var element6=document.getElementsByTagName("i");
  
       var x = document.getElementById("iconsDivId");
  var y = x.getElementsByTagName("i");
  var i;
  
  
       if (document.getElementById('switch-btn').checked) {
      
        for (i = 0; i < y.length; i++) {
    y[i].style.color = "white";
  } 
        element2.setAttribute('style','color: white');
        element3.setAttribute('style','color: white');
        element4.setAttribute('style','color: white');
        element5.setAttribute('style','color: white');
        element6.setAttribute('style','color: white');
        element7.setAttribute('style','color: white');

  
          } else {
            for (i = 0; i < y.length; i++) {
    y[i].style.color = "black";
  } 
            element2.setAttribute('style','color: black');
            element3.setAttribute('style','color: black');
            element4.setAttribute('style','color: black');
        element5.setAttribute('style','color: black');
        element6.setAttribute('style','color: black');
        element7.setAttribute('style','color: black');

          }
  
   
    }
   function load(){
  
    document.getElementById("switch-btn").checked=true;
   }
  
  
  
  
  var langs = ['en', 'ar'];
  var current_lang_index = 0;
  var current_lang = langs[current_lang_index];
  
  window.change_lang = function() {
  
    current_lang_index = ++current_lang_index % 2;
      current_lang = langs[current_lang_index];
     
     
   if(current_lang_index==1){
     
  var middleContnet=document.getElementById("about-me");
  
  middleContnet.setAttribute('style','margin-right: 5%;');
  
  // document.getElementById("home").style.textAlign="right";
  // document.body.style.direction = "rtl";
  document.getElementById("nav-id").style.direction="rtl";
  document.getElementById("myInfoDiv").style.textAlign = "right";
    document.getElementById("iconsDivId").style.textAlign="right"
    document.getElementById("modal-header-id").style.direction="rtl";
    document.getElementById("iconsDivId").style.direction="rtl";
  document.getElementById("about-me").style.direction="rtl";
  document.getElementById("about-me").style.textAlign = "right";
  
  }
  if(current_lang_index==0){
    document.getElementById("nav-id").style.direction="ltr";
    document.getElementById("myInfoDiv").style.textAlign = "left";
    document.getElementById("iconsDivId").style.textAlign="right"
    document.getElementById("iconsDivId").style.direction="ltr";

    document.getElementById("about-me").style.direction="ltr";
  document.getElementById("about-me").style.textAlign = "left";
  document.getElementById("modal-header-id").style.direction="ltr";
  
   }
   translate();
  
    
  }
  
  function translate() {
   
      $("[data-translate]").each(function(){
          var key = $(this).data('translate');
          $(this).html(dictionary[key][current_lang] || "N/A");
      });
  }
  
  translate();
  
  
  $(window).on('scroll load',function () {
  
      $('.Profilephoto-animation ,.introduction-animation,.about-content-animation')
      .each(function () {
          var imagePos = $(this).offset().top;
          var imageHeight = $(this).height();
          var topOfWindow = $(window).scrollTop();
  
          if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
              $(this).addClass("Profile-animation intro-animation about-content-animate");
          } else {
              $(this).removeClass("Profile-animation intro-animation about-content-animate");
          }
      })
      
      ;
  });
  
  

  
  function changeThemeProject() {
    var element = document.body;
    element.classList.toggle("theme-mode");
    var element2=document.getElementById("nav-link-id");
    var element3=document.getElementById("nav-link-about-id");
    var element4=document.getElementById("nav-link-projects-id");
    var element5=document.getElementById("nav-link-resume-id");
    var element6=document.getElementById("changeLanguageBtn") ;
    var element7=document.getElementById("nav-link-projects-id");

    const whiteTexts=document.querySelectorAll('.text-white');
    const blackTexts=document.querySelectorAll('.text-black-100');

    whiteTexts.forEach(element=>{
element.classList.remove('text-white');
element.classList.add('text-black-100');

    });

    blackTexts.forEach(element=>{
      element.classList.remove('text-black-100');
      element.classList.add('text-white');
      
          });

 


    if (document.getElementById('switch-btn').checked) {
   
     element2.setAttribute('style','color: white');
     element3.setAttribute('style','color: white');
     element4.setAttribute('style','color: white');
     element5.setAttribute('style','color: white');
     element6.setAttribute('style','color: white');
     element7.setAttribute('style','color: white');


       } else {
         element2.setAttribute('style','color: black');
         element3.setAttribute('style','color: black');
         element4.setAttribute('style','color: black');
     element5.setAttribute('style','color: black');
     element6.setAttribute('style','color: black');
     element7.setAttribute('style','color: black');

       }


 }