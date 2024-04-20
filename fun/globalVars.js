let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let HIGHT = 600;
let WIDTH = HIGHT/2;
let tile = 30;


let matrixX=WIDTH/tile;
let matrixY= HIGHT/tile;
let isAFilledRow
let gameSpeed = 1000; //ms
const initBoard=()=>{
    let setMatrix=[];
    for(i=0;i<matrixY;i++){
        setMatrix.push(Array());
        for(z=0;z<matrixX;z++) setMatrix[i].push(0)
    }
    return setMatrix
}
let matrix = initBoard();
let mainTetro = null;
let interval = null;
let rowsDeleted=0;
let score=0;






