

function imageChange() {  
    transCheck(); 
    if (imgList[textIndex].effect != false) { 
      console.log("test"); 
    } 
    $($("img")[0]).attr("src", imgList[textIndex].src); 
}  

function transCheck() {   
    if (textIndex == 7) {  
        //music comes in here
        $("#text-container").css("background-color", "#748584");
        $("#text-box").css("background-color", "white");   
        $(".ext").css("background-color", "#748584");  
        $("#view").css("background-color", "white");  
        $("#text").css("color", "black");  
        $("#audio").attr("src", "Songs/School.mp3");  
        $("#audio")[0].play(); 
    } 
    if (textIndex == 39) { 
        $("#text-container").css("background-color", "#190c00");
        $("#text-box").css("background-color", "#e4d9ce");   
        $(".ext").css("background-color", "#190c00");  
        $("#view").css("background-color", "#e4d9ce");  
        $("#text").css("color", "black");  
        $("#audio").attr("src", "Songs/Parents song.mp3"); 
    } 
    if (textIndex == 58) { 
        $("#text-container").css("background-color", "#036b16");
        $("#text-box").css("background-color", "white");   
        $(".ext").css("background-color", "#036b16");  
        $("#view").css("background-color", "white");  
        $("#text").css("color", "black");  
        $("#audio").attr("src", "Songs/feild.mp3"); 
    } 
    if (textIndex == 108) { 
        $("#text-container").css("background-color", "black");
        $("#text-box").css("background-color", "black");   
        $(".ext").css("background-color", "black");  
        $("#view").css("background-color", "black");  
        $("#text").css("color", "white");  
        $("#audio")[0].pause(); 

    }

}
