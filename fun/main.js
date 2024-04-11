let ctx = document.getElementById("canvas").getContext("2d");
let HIGHT = 600;
let WIDTH = 300;
let tile = 30;
let matrixX=WIDTH/tile;
let matrixY= HIGHT/tile;
let matrix = [];
const setBoard=()=>{
    for(i=0;i<matrixY;i++){
        matrix.push(Array());
        for(z=0;z<matrixX;z++) matrix[i].push(0)};
}
setBoard();


