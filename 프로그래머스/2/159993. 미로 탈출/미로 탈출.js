function BFS(start, arr, target){
  let time = 0;
  const tranX  = [-1,1,0,0];
  const tranY = [0,0,-1,1];
  arr[start[0]][start[1]] = "X";
  let queue = [start];

  while(queue.length>0){
    let size = queue.length;
    for(let i = 0;i<size;i++){
      let [x,y] = queue.shift();
      for(let k = 0;k<4;k++){
        let nx = x + tranX[k];
        let ny = y + tranY[k];

        if(nx>=0&&ny>=0&&nx<arr.length&&ny<arr[0].length&&arr[nx][ny]!=="X"){
          if(target === arr[nx][ny]){
            return time+1;
          }

          queue.push([nx,ny]);
          arr[nx][ny] = 'X';
        }
      }
    }
    time++;
  }

  return -1;
}

function solution(maps) {

  let lCord;
  let sCord;
  let maps1 = maps.map((element)=>element.split(""));
  let maps2 = maps.map((element)=>element.split(""));
  for(let x = 0;x<maps.length;x++){
    for(let y = 0;y<maps[0].length;y++){
      if(maps[x][y] === "L"){
          lCord = [x,y];
      }

      if(maps[x][y] === "S"){
        sCord = [x,y];
      }
    }
  }

  let a = BFS(sCord,[...maps1],"L");
  let b = BFS(lCord,[...maps2],"E")

  if(a===-1||b===-1){
    return -1;
  }
 
   return a+b;
}