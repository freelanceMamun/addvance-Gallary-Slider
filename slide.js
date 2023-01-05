const lightbox = document.querySelector(".gallery-lightbox");
const galleryBox = lightbox.querySelectorAll(".gallery-lightbox__box");


const lightboxPopup = document.querySelector(".gallery-lightbox__popup");
const OptitionHedar = document.querySelector(".gallery-lightbox__popup--option");
const OptionLinks = Array.from(OptitionHedar.querySelectorAll(".option-link"));
const fullScreen = document.querySelector(".fullscreen");
const downloadOption = document.querySelector(".dowload");
const zoomIn = document.querySelector(".zoom-in");
const zoomOut =  document.querySelector(".zoom-out");
let zoomLavel = 1,
      zoominc = 0.05;
 const  fullViewContainer =  document.querySelector(".gallery-lightbox-content");
 const fullView = document.querySelector(".fullview img");
 const fullscreeBox = document.querySelector(".fullview");
 const closeLightbox = document.querySelector(".cloaseLightbox");
 let  nextGallery, prevGallery, galleryDirection, index;

 

///// Light box Start
window.onload = ()=>{
    for(let i = 0 ; i < galleryBox.length; i ++){
         let newIndex = i ;
           galleryBox[i].onclick = ()=>{ 

             function preview(){
              let imageSrcUrl = galleryBox[newIndex].querySelector("img").src;
                fullView.src = imageSrcUrl ;
                downloadOption.href = imageSrcUrl ;

                fullscreeBox.style.width = "";
                fullscreeBox.classList.remove("ZoomFullScreen"); 
                fullscreeBox.style.transition = 'all 1s ease-in';
                fullscreeBox.style.transform = "";
                
             }

            preview();



            const leftArrow = document.querySelector(".arrow-left");
            const RightArro = document.querySelector(".arrow-right");
         
            leftArrow.addEventListener("click",function(e){
                e.preventDefault();
                newIndex--;
                if(newIndex < 0 ) newIndex = galleryBox.length -1 ;

                 if(newIndex == 0){
                    preview();
                     leftArrow.style.display = "block"
                 }else{
                    preview();
                    RightArro.style.display = "block";
                 }
            })

//// right arrow click funciton 
             RightArro.addEventListener("click",function(e){
                 e.preventDefault();
                 newIndex++;
                 if(newIndex >= galleryBox.length) newIndex = 0 ;

                 if(newIndex >= galleryBox.length - 1){
                     preview();
                     RightArro.style.display= "block";

                 }else{
                     preview();
                     leftArrow.style.display = "block";
                   
                 }

             })


            lightboxPopup.classList.add("active");
            closeLightbox.addEventListener("click",function(e){
              e.preventDefault();
              lightboxPopup.classList.remove("active");
            })
           }
         

    }

} 
////// Option links fullscreen and zoomIn and zoom out function


OptionLinks.forEach((Links)=>{
   Links.addEventListener("click",function(e){
   e.preventDefault();

   })
});

///// fullScreen content

fullScreen.addEventListener("click",function(){
   const fullscreeBox = document.querySelector(".fullview");
   fullscreeBox.classList.toggle("ZoomFullScreen");
    if(fullscreeBox.classList.contains("ZoomFullScreen")){
        fullscreeBox.style.width = "100%"

    }else{
        fullscreeBox.style.width = "";
        fullscreeBox.style.transition = ' all 1s ease-in';
    }
   

})

///// zoom in  image function

zoomIn.addEventListener("click",function(){
    zoomLavel += zoominc 
    if(zoomLavel >= 1.5){
        zoomLavel = zoomLavel - 0.1;
        this.classList.add("disabled")
        return ;
    }

    this.setAttribute("data-zoom" , zoomLavel);
    zoomOut.setAttribute("data-zoom",zoomLavel);
    zoomOut.classList.remove("disabled");
    fullscreeBox.style.transform = `scale(${zoomLavel})`;

})


/////  zoom Out function 

zoomOut.addEventListener("click",function(){
    zoomLavel -= zoominc ;
     if(zoomLavel < 0.6 ){
         zoomLavel = zoomLavel + 0.1 ;
         this.classList.add("disabled");
         return;
     }   

     this.setAttribute("data-zoom",zoomLavel);
     zoomIn.setAttribute("data-zoom",zoomLavel);
     zoomIn.classList.remove("disabled");
     fullscreeBox.style.transform = `scale(${zoomLavel})`;


})