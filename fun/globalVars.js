let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let HIGHT = 600;
let WIDTH = HIGHT/2;
let tile = HIGHT/20;


let matrixX=WIDTH/tile;
let matrixY= HIGHT/tile;
let isAFilledRow;
let gameSpeed = 1000; //ms

/**function to create the main matrix board*/
const initBoard=()=>{
    let setMatrix=[];
    for(i=0;i<matrixY;i++){
        setMatrix.push(Array());
        for(z=0;z<matrixX;z++) setMatrix[i].push(0)
    }
    return setMatrix
}

/** Inits the main matrix*/
let matrix = initBoard();

let mainTetro = null;
let interval = null;
let rowsDeleted=0;
let score=0;






