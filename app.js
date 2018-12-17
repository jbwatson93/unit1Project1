//------------------------------------------------------
//------------defined variables------------------------
//------------and arrays------------------------------
//---================================================
var compSequence = [];
var level = compSequence.length;
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
    
  
for( let i =0;i < compSequence.length;i++){
    function loopDelay(i){
    setTimeout(function (){
     sound[compSequence[i]].play();
        console.log(buttons[compSequence[i]])
        buttons[compSequence[i]].fadeOut(50).fadeIn(60)
    }, tempo * i)
} loopDelay(i)
}
compTurn = false
changeTurn()


}

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
        level = compSequence.length
        $("#level").text(level)
           levelCount = 0
           generateSeq()
           compTurn = true;
           changeTurn()
           setTimeout(function (){
           
            lightButtons()
        },2000)
        
           
       }
       else{
           levelCount++
           console.log(levelCount)
       }   
    }
    else{
        location.reload()

    }
}
function checkYellow(){
    if(compSequence[levelCount] == 1){
        if(levelCount = compSequence.length){
            level = compSequence.length
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            compTurn = true;
            changeTurn()
            setTimeout(function (){
                
                lightButtons()
            },2000)
            
        }
        else{
            levelCount++
            console.log(levelCount)
        }   
        
        
    }
    else{
        location.reload()
        
    }
}
function checkRed(){
    if(compSequence[levelCount] == 2){
        if(levelCount = compSequence.length){
            level = compSequence.length
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            changeTurn()
            setTimeout(function (){
                
                lightButtons()
            },2000)
            
        }
        else{
            levelCount++
            console.log(levelCount)
        }   
       
    }
    else{
        location.reload()
    }
}
function checkgreen(){
    if(compSequence[levelCount] == 3){
        if(levelCount = compSequence.length){
            level = compSequence.length
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            compTurn = true;
            changeTurn()
            setTimeout(function (){
                
                lightButtons()
            },2000)
            
        }
        else{
            levelCount++
            console.log(levelCount)
        }   
    }
    else{
        location.reload()
        
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
console.log(levelCount)

   }
})
$("#yellow").on("click", function (){
    if(compTurn == true){
    } 
   else{
    lightOnTouch(1);
    playSounds(1)
    checkYellow();
    console.log(levelCount)
   }
})
$("#red").on("click", function (){
    if(compTurn == true){
    } 
   else{
    lightOnTouch(2);
    playSounds(2)
    checkRed();
    console.log(levelCount)
   }
})

$("#green").on("click", function (){
    if(compTurn == true){
    } 
   else{
    lightOnTouch(3);
    playSounds(3);
    checkgreen();
    console.log(levelCount)
   }
})

function changeTurn(){
    if(compTurn == true){
        $("#turn").text("Comp")
        $("#turn").css("background", "red")
    }
    else{
        $("#turn").text("You")
        $("#turn").css("background", "green")
    }
}