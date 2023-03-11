/*var videocells=document.querySelectorAll(".videocell")
var modalWindow=document.querySelector(".video")
var iFrame=document.querySelector(".video iframe")
var modalWindowClose=document.getElementById ("video-close")
var openModal=function(e){
  console.log(e)
  var url=this.getAttribute("data-url") 
  modalWindow.classList.add("video-visible")
  iFrame.setAttribute("src",url)
  console.log(url)
  
   
}
var closeModal=function(e){
   modalWindow.classList.remove("video-visible")
}
for(var x=0;x<videocells.length;x++){
  videocells[x].addEventListener("click",openModal)
}
modalWindowClose.addEventListener("click",closeModal)
preview1.addEventListener("click",)
console.log(videocells)

var studio=document.querySelector(".studio")
studio.addEventListener("click",function(e){
 console.log(e.target)
 e.currentTarget.classList.toggle("active")
})*/

 function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i=0; i<links.length; i++) {
      link = links[i];
      if (link.getAttribute("href") && link.getAttribute("rel") == "external")
      link.target = "_blank";
    }
   }
   window.onload = externalLinks;