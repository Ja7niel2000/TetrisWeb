const update = () =>{
    ctx.clearRect(0,0,1000,1000);
    draw();
}

const draw =()=>{
    for(y=0;y<matrixY;y++) {
        for(x=0;x<matrixX;x++)
        {
            if(matrix[y][x] == 0){
                ctx.strokeStyle="rgb(100,100,100)";
                ctx.strokeRect(x*tile,y*tile,tile,tile);

                ctx.fillStyle = "rgb(20,20,20)";
                ctx.fillRect(x*tile+1, y*tile+1,tile-2,tile-2);
            }

            if(matrix[y][x]==1){
                ctx.strokeStyle="rgb(100,100,100)";
                ctx.strokeRect(x*tile,y*tile,tile,tile);

                ctx.fillStyle = "rgb(250,00,00)";
                ctx.fillRect(x*tile+1, y*tile+1,tile-2,tile-2);

            }
        }
    }

}

matrix[0][0]=1;
matrix[0][1]=1;
matrix[0][2]=1;
matrix[1][2]=1;
matrix[2][2]=1;
matrix[3][2]=1;

setInterval(update,1000);