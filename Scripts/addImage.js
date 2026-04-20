

function imageChange() { 
    if (imgList[textIndex].effect != false) { 
      console.log("test"); 
    } 
    $($("img")[0]).attr("src", imgList[textIndex].src); 
} 
