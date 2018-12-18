//------------------------------------------------------
//------------defined variables------------------------
//------------and arrays------------------------------
//---================================================
var compSequence = [];
var level = compSequence.length;
var on = false;
var start = false;
var tempo = 2000;
var buttons =[$("#blue"),$("#yellow"),$("#red"),$("#green")];
var colors = ["blue","yellow","red","green"];
var levelCount = 0;
var sound = [document.getElementById("sound1"),document.getElementById("sound2"),document.getElementById("sound3"),document.getElementById("sound4")];
var compTurn = true;

//-----------=========------=====-----======------------
//----------function tp generate and new addition to sequence
//-------------------================------------------
function generateSeq(){
    
    compSequence.push(Math.floor(Math.random() * 4) )
    
}




function playSounds(i){
    sound[i].play()
    sound[i].currentTime =0
}
//-------=========--------========-------------
// function to play back sequence +1///////////
//===========================================
function lightButtons(){
    if(compTurn == true){
        
  
for( let i =0;i < compSequence.length;i++){
    function loopDelay(i){
        setTimeout(function (){
            sound[compSequence[i]].play()
            sound[compSequence[i]].currentTime =0
             // console.log(buttons[compSequence[i]])
            buttons[compSequence[i]].fadeOut(50).fadeIn(60)
            if(i === compSequence.length-1){
                compTurn = false
                levelCount = 0
                changeTurn()
            
            }
        }, tempo * i)
    } loopDelay(i)

}



}


}

// on and off switch---------------------
//=========================================
// $("#on").on("click", onOff())
function onOff(){
    if(on == true){
        $("#on").css("justify-content", "flex-end");
        on =false
        compSequence = []
        level = compSequence.length
        $("#level").text(level)
        compTurn = true
    }
    else{
        on = true
    $("#on").css("justify-content", "flex-start");
    generateSeq();
    setTimeout(function(){
    lightButtons()
    }, 2000)
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
       
       if(levelCount == compSequence.length-1){
        level = compSequence.length
        // console.log(compSequence.length)
        $("#level").text(level);
           levelCount = 0;
           generateSeq();
           compTurn = true;
           changeTurn();
           changeTempo()
           setTimeout(function (){
           
            lightButtons()
        },2000)
        
           
       }
       else{
           levelCount++
        //    console.log(levelCount)
       }   
    }
    else{
        failSound()

    }
}
function checkYellow(){
    if(compSequence[levelCount] == 1){
        
        if(levelCount == compSequence.length-1){
            level = compSequence.length
            $("#level").text(level);
            levelCount = 0;
            generateSeq();
            compTurn = true;
            changeTurn()
            changeTempo()
            setTimeout(function (){
                
                lightButtons()
            },2000)
            
        }
        else{
            levelCount++
            // console.log(levelCount)
        }   
        
        
    }
    else{
        failSound()
        
    }
}
function checkRed(){
    if(compSequence[levelCount] == 2){
        
        if(levelCount == compSequence.length-1){
            level = compSequence.length
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            compTurn = true
            changeTurn()
            changeTempo()
            setTimeout(function (){
                
                lightButtons()
            },2000)
            
        }
        else{
            levelCount++
            // console.log(levelCount)
        }   
       
    }
    else{
        failSound()
    }
}
function checkgreen(){
    if(compSequence[levelCount] == 3){
       
        if(levelCount == compSequence.length-1){
            level = compSequence.length
            $("#level").text(level)
            levelCount = 0
            generateSeq()
            compTurn = true;
            changeTurn()
            changeTempo()
            setTimeout(function (){
                
                lightButtons()
            },2000)
            
        }
        else{
            levelCount++
            // console.log(levelCount)
        }   
    }
    else{
        failSound()
        
        
    }
}
//========================================
//-----------fail--Sound------------------
//========================================
function failSound(){
    document.getElementById("failSound").play()
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

function changeTempo(){
    if(compSequence.length > 4){
        tempo = 1000
    }
    else if( compSequence.length > 8){
        tempo = 500
    }
}