

function imageChange() {  
    transCheck(); 
    if (imgList[textIndex].effect != false) { 
      console.log("test"); 
    } 
    $($("img")[0]).attr("src", imgList[textIndex].src); 
}  

function transCheck() {   
    if (textIndex == 7) { 
        $("#text-container").css("background-color", "blue");
        $("#text-box").css("background-color", "blue");   
        $(".ext").css("background-color", "blue");  
        $("#view").css("background-color", "white");  
        $("#text").css("color", "white"); 
    }

}
