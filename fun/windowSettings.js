

window.addEventListener("resize",lol);
function lol(){
    console.log(window.innerHeight);
    //70%
    if(window.innerHeight>=400){
        HIGHT = 400*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 
    }if(window.innerHeight>=450){
        HIGHT = 450*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 
    }if(window.innerHeight>=500){
        HIGHT = 500*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 
    }if(window.innerHeight>=550){
        HIGHT = 550*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 
    }

    if(window.innerHeight>=600){
        HIGHT = 600*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 
    }
    if(window.innerHeight>=650){
        HIGHT = 650*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 

    }
    if(window.innerHeight>=700){
        HIGHT = 700*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 

    }
    if(window.innerHeight>=750){
        HIGHT = 750*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 

    }
    if(window.innerHeight>=800){
        HIGHT = 800*0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 
    }
    if(window.innerHeight>=850){
        HIGHT = 850 * 0.7;
        WIDTH = HIGHT/2;
        canvas.style.height=(HIGHT-1)+"px";
        canvas.style.width=(WIDTH-1)+"px"; 

    } 
   
    
  
    
   
}



function isTouchDevice() {
    if(window.matchMedia("(pointer: coarse)").matches) {
        return alert(true)
    }
    return alert(false)
  }
  var platform =  'ontouchstart' in window || navigator.maxTouchPoints;
//   alert("is"+platform)
  
