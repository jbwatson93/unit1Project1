//------------------------------------------------------
//------------defined variables------------------------
//------------and arrays------------------------------
var compSequence = [];
let level = compSequence.length;
 var on = false
 var start = false;
 var tempo = 2000;
 var buttons =[$("#blue"),$("#yellow"),$("#red"),$("#green")];
 var colors = ["blue","yellow","red","green"]
 var levelCount = 0
 var sound = [document.getElementById("sound1"),document.getElementById("sound2"),document.getElementById("sound3"),document.getElementById("sound4")]
 var compTurn = true

//-----------=========------=====-----======------------
//----------function tp generate and new addition to sequence
//-------------------================------------------
function generateSeq(){
    
        compSequence.push(Math.floor(Math.random() * 4) )
    
}
generateSeq()



function playSounds(i){
sound[i].play()
}
//-------=========--------========-------------
// function to play back sequence +1///////////
//===========================================
function lightButtons(){
    if(compTurn == true){
    
  
for( levelCount =0;levelCount < compSequence.length;levelCount++){
    function loopDelay(levelCount){
    setTimeout(function (){
     sound[compSequence[levelCount]].play();
        console.log(buttons[compSequence[levelCount]])
        buttons[compSequence[levelCount]].fadeOut(50).fadeIn(60)
    }, tempo * levelCount)
} loopDelay(levelCount)

}
levelCount = 0

compTurn = false}

else{}
}
// on and off switch---------------------
//=========================================
// $("#on").on("click", onOff())
function onOff(){
    if(on == true){
        $("#on").css("justify-content", "flex-end");
        on =false
        location.reload()
    }
    else{
        on = true
    $("#on").css("justify-content", "flex-start")
   setTimeout(function(){
    lightButtons()
   }, 3000)
}
}
//------=========--------========-------=======
//-------function to light up buttons on touch
//=============================================
function lightOnTouch(i){
    buttons[i].fadeOut(50).fadeIn(60)
}
//-----------------===========================
//functions to check if the buttons were right
//---------------------------------------------
function checkBlue(){
    if(compSequence[levelCount] == 0){
       if(levelCount = compSequence.length){
        $("#level").text(level)
           levelCount = 0
           generateSeq()
           compTurn = true;
           lightButtons()
           
       }
       else{
           levelcount++
       }   
    }
    else{
        

    }
}
function checkYellow(){
    if(compSequence[levelCount] == 1){
        if(levelCount = compSequence.length){
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            compTurn = true;
            lightButtons()
            
        }
        else{
            levelcount++
        }   
        
        
    }
    else{
       level--
        
    }
}
function checkRed(){
    if(compSequence[levelCount] == 2){
        if(levelCount = compSequence.length){
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            compTurn = true;
            lightButtons()
            
        }
        else{
            levelcount++
        }   
       
    }
    else{
        levelCount --;
        
    }
}
function checkgreen(){
    if(compSequence[levelCount] == 3){
        if(levelCount = compSequence.length){
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            compTurn = true;
            lightButtons()
            
        }
        else{
            levelcount++
        }   
    }
    else{
        levelCount --;
        
    }
}

//=======================================
//----------on click events------------
//========================================
$("#blue").on("click", function (){
   if(compTurn == true){
    } 
   else{
    lightOnTouch(0);
playSounds(0)
checkBlue();


   }
})
$("#yellow").on("click", function (){
    if(compTurn == true){
    } 
   else{
    lightOnTouch(1);
    playSounds(1)
    checkYellow();
    
   }
})
$("#red").on("click", function (){
    if(compTurn == true){
    } 
   else{
    lightOnTouch(2);
    playSounds(2)
    checkRed();
    
   }
})

$("#green").on("click", function (){
    if(compTurn == true){
    } 
   else{
    lightOnTouch(3);
    playSounds(3);
    checkgreen();
    
   }
})