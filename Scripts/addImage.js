class image {  
  #src; 
  #effect; 
  constructor (src, effect) { 
    this.#src = src; 
    this.#effect = effect; 
  } 

  get src() { 
    return this.#src;  
  } 
  get effect() { 
    return this.#effect; 
  }
}  

var imgList = [new image("Images/Even edit viboe.jpg", false)];  
function imageChange() { 
    if (imgList[textIndex].effect != false) { 
      console.log("test"); 
    } 
    $("img").src = imgList[textIndex].src; 
} 
