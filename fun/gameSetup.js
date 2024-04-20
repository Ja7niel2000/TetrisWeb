const update = () =>{
    ctx.clearRect(0,0,1000,1000);
    drawBoard();
    restartMainTetromino();
    mainTetro.drawTetromino();
    mainTetro.moveDown();


}

const restartBoard =()=>{
    for(y=0;y<matrixY;y++){
        for(x=0;x<matrixX;x++){
            matrix[y][x]=0
        }
    }
}

const drawBoard =()=>{
    for(y=0;y<matrixY;y++) 
        for(x=0;x<matrixX;x++)
            drawTile(x,y,matrix[y][x]);
    
}

const dropRow = (y) =>{
        if(y>=1){
            for(x=0;x<matrixX;x++)
                matrix[y][x]=matrix[y-1][x];
            return dropRow(--y);
        }
        for(x=0;x<matrixX;x++)
            matrix[y][x]=0;

        

}

const setColor=(color)=>{
    switch (color){
        case 0:
            return "rgb(195,195,195)"; //white

        case 1:
            return "rgb(138,235,235)"; //light blue

        case 2:
            return "rgb(255,255,0)"; //yellow

        case 3:
            return "rgb(255,0,0)"; //red 

        case 4:
            return "rgb(0,255,0)"; //green

        case 5:
            return "rgb(0,0,255)"; //blue

        case 6:
            return "rgb(255,165,0)"; //orange

        case 7:
            return "rgb(160,32,240)"; //purple
}

}
    
const drawTile =(x,y,color)=>{
    let stringColor = setColor(color);
    ctx.fillStyle=stringColor;
    ctx.fillRect(x*tile,y*tile,tile,tile);

    ctx.strokeStyle="rgb(195,195,195)";
    ctx.strokeRect(x*tile,y*tile,tile,tile);
}

const setScore=(rowsDeleted)=>{
    if(rowsDeleted!=0){
        score+=Math.pow(2,rowsDeleted-1);
        document.getElementById("score").innerHTML="";
        document.getElementById("score").innerHTML=`<b>${score}</b>`;



    }
}

const gameOver =()=>{
    clearInterval(interval);
    interval = null;
    canvas.classList.remove("animRgbBorder")
    
    ctx.font="40px serif";
    ctx.textAlign="center";
    ctx.fillStyle="#000";
    ctx.fillText("Game over",WIDTH/2,HIGHT *0.2);


    console.log("juego terminad0");

}

const test =()=>{
    ctx.font="40px serif";
    ctx.textAlign="center";
    ctx.fillStyle="#fff";
    ctx.fillText("Game over",WIDTH/2,HIGHT *0.2);

}


const startGame=()=>{
    restartBoard();
    canvas.classList.add("animRgbBorder");
    interval = setInterval(update,gameSpeed);
}

document.getElementById("start").addEventListener("click",startGame);






