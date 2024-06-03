//array de tetrominos para poder seleccionarlos aleatoriamente.
let tetrominos = [tetromino1,tetromino2,tetromino3,tetromino4,tetromino5,tetromino6,tetromino7];

//Función para obtener un nuevo tetromino aleatorio y asignarlo a mainTetro.
const restartMainTetromino =()=>{
    if(!mainTetro){
        console.log("cambio");
        let random = Math.floor(Math.random()*7);
        mainTetro = new Piece(tetrominos[random],random+1);
    }   
    
}

/**
 * Constructor
 * @param {*} tetromino 
 * @param {*} color 
 */
function Piece (tetromino,color){
    //Aquí se guarda el array de las 4 posibles rotaciónes del tetromino
    this.tetromino = tetromino;

    this.tetrominoR=0;
    this.activeTetromino=this.tetromino[this.tetrominoR];
    
    this.color = color;
    
    this.x=3;
    this.y=-2;
}

//Método para dibujar tetromino 
Piece.prototype.drawTetromino=function(){
    for(r=0;r<this.activeTetromino.length;r++){
        for(c=0;c<this.activeTetromino.length;c++){
            if(this.activeTetromino[r][c])
                drawTile(this.x+c,this.y+r,this.color);

        }
   

    }
}
//Método para desdibujar tetrominó
Piece.prototype.unDraw=function(){
    for(r=0;r<this.activeTetromino.length;r++){
        for(c=0;c<this.activeTetromino.length;c++){
            if(this.activeTetromino[r][c])
                drawTile(this.x+c,this.y+r,0);

            
        }

    }

}

//Método para mover el tetromino hasta el abajo.
Piece.prototype.moveBottom=function(y){
    if(mainTetro!=null){
        this.moveDown();
        this.moveBottom(y++);
    }
}

//Método para rotar a la derecha el tetromino activo.
Piece.prototype.rotateRight=function(){
    if(this.canMove(0,0,this.tetromino[(this.tetrominoR +1)%this.tetromino.length])){
        this.unDraw();
        this.tetrominoR=(this.tetrominoR +1)%this.tetromino.length;
        this.activeTetromino=this.tetromino[this.tetrominoR];
        this.drawTetromino();
    }
}

//Método para rotar a la izquierda el tetromino activo. 
Piece.prototype.rotateLeft=function(){
    if(this.canMove(0,0,this.tetromino[(this.tetrominoR +(this.tetromino.length-1))%this.tetromino.length])){
        console.log((this.tetrominoR -1)%this.tetromino.length);
        this.unDraw();
        this.tetrominoR=(this.tetrominoR +(this.tetromino.length-1))%this.tetromino.length;
        this.activeTetromino=this.tetromino[this.tetrominoR];
        this.drawTetromino();
    }

}

//Método para bajar una fila al tetromino activo
Piece.prototype.moveDown=function(){
    if(this.canMove(0,1,this.activeTetromino)){
        this.unDraw();
        this.y++;
        this.drawTetromino();
    }
    else{
        rowsDeleted=0
        for(r=0;r<this.activeTetromino.length;r++){
            isAFilledRow = true;
            for(x=0;x<matrixX;x++){

                if(x>=this.x && x<this.x+this.activeTetromino.length){
                    if(this.activeTetromino[r][x-this.x]==1){
                        if(this.y+r<0)
                            return gameOver();
                        else
                            matrix[this.y+r][x]=this.color;
                    }
                }

                if(this.y+r>=0 && this.y+r<matrixY)
                    isAFilledRow = isAFilledRow && matrix[this.y+r][x]!=0;
                else 
                    isAFilledRow = false;
            }
            if(isAFilledRow){
                rowsDeleted++;
                console.log(rowsDeleted);
                dropRow(this.y+r);
            }
        }
        setScore(rowsDeleted);
        mainTetro=null;


    }
}

Piece.prototype.moveLeft=function (){
    if(this.canMove(-1,0,this.activeTetromino)){
        this.unDraw();
        this.x--;
        this.drawTetromino();
    }
}

Piece.prototype.moveRigth=function (){
    if(this.canMove(1,0,this.activeTetromino)){
        this.unDraw();
        this.x++;
        this.drawTetromino();
    }
}


Piece.prototype.canMove =function(x,y,tetromino){
    for(r=0;r<tetromino.length;r++){
        for(c=0;c<tetromino.length;c++){
            if(tetromino[r][c]==0)continue;
            let newX = this.x+c+x;
            let newY = this.y+r+y;

            if((newX<0 || newX>matrixX) || (newY>=matrixY)) return false;
            if(newY<0)continue;
            if(matrix[newY][newX]!=0) return false;
            
        }
    }
    return true
}

function controls(event){
    if(interval!=null && mainTetro !=null){
        switch(event.keyCode){
            case 32:
                event.preventDefault();
                mainTetro.moveBottom(mainTetro.y);
                break;
            case 37:
                event.preventDefault();
                mainTetro.moveLeft();
                break;
            case 38:
                event.preventDefault();
                mainTetro.rotateRight()
                break;
            case 39:
                event.preventDefault();
                mainTetro.moveRigth();
                break;
            case 40:
                event.preventDefault();
                mainTetro.moveDown();
                break;

        }
    }
}

document.addEventListener("keydown",controls);

let downButton=document.getElementById("down");
let rigthButton=document.getElementById("->");
let leftButton=document.getElementById("<-")
let rotateRightButton=document.getElementById("rotateRight");
let rotateLeftButton=document.getElementById("rotateLeft");
let bottomButton=document.getElementById("bottom");

const setControls = ()=>{

    downButton.addEventListener("click",function(e){ if( interval!=null && mainTetro !=null){e.preventDefault();mainTetro.moveDown()}});

    rigthButton.addEventListener("click",function(e){ if(interval!=null && mainTetro !=null){e.preventDefault();mainTetro.moveRigth()}});

    leftButton.addEventListener("click",function(e){if(interval!=null && mainTetro !=null){e.preventDefault();mainTetro.moveLeft()}});

    rotateRightButton.addEventListener("click",function(e){if(interval!=null && mainTetro !=null){e.preventDefault();mainTetro.rotateRight()}});
    rotateLeftButton.addEventListener("click",function(e){if(interval!=null && mainTetro !=null){e.preventDefault();mainTetro.rotateLeft()}});

    bottomButton.addEventListener("click",function(e){if(interval!=null && mainTetro !=null){e.preventDefault();mainTetro.moveBottom()}});

}







