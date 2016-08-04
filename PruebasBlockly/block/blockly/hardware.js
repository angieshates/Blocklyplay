/*scripts para el primer nievel*/
    /*var image;*/
    //las variables generales se pasaron a moves.js
      //la variable de positionObj se paso a moves.js
      //el objeto de solutionObj se paso a moves.js
    function begin1(){
      canvas = document.getElementById('canvas1');
      canvas.style.border='1px solid black';
      canvas.style.margin='0px 0px 0px 10px';
      ctx = canvas.getContext('2d');
      ancho = document.getElementById('divCanvas').offsetWidth;
      alto = document.getElementById('divCanvas').offsetHeight;
      canvas.width= ancho;
      canvas.height = alto;
      stepsizeX=canvas.width/30 ;
      stepsizeY=canvas.height/22;
      X = stepsizeX*12;
      Y = stepsizeY*12;
      positionObj.objX=X;
      positionObj.objY=Y;
      positionObj.objZ=0;
      Xaux = positionObj.objX;
      Yaux= positionObj.objY;
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),4096,'forward',5));
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),4096,'forward',5));
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),4096,'forward',5));
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),4096,'backward',7));
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),4096,'backward',7));
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),2048,'forward',2));
      solucion.push(new motorObj(Math.round10((stepsizeX*12),2),Math.round10((stepsizeY*12),2),2048,'backward',5));
      panel1();
    }
    //la funcion de stopTimer se paso al archivo de controlFunctions.js
    function panel1(){
      var imgback = new Image();
              imgback.src = "media/airplane.jpg";
       imgback.onload = function() {
        ctx.drawImage(imgback, 0,0,canvas.width,canvas.height);
          while(initX<canvas.width-stepsizeX){
            initX=initX+stepsizeX;
              while(initY<canvas.height-stepsizeY){
                initY=initY+stepsizeY;
                ctx.beginPath();
                ctx.fillStyle = "yellow";
                ctx.arc(initX,initY,1.5,0,2*Math.PI);
                ctx.fill();
              }
              initY=0;
          }
          initX=0;
          Avatar1();
        }
    }
    //Drawing avatar
    function Avatar1(){
      acabo=1;
      var img = new Image();//se debe de crear siempre el objeto para que siempre lo carge, sino se queda en el cache y no corre bien en safari
      var positionX, positionY;
      img.id = 'imagen';
      img.onload = function() {
        ctx.save();
        ctx.translate(positionObj.objX,positionObj.objY);
        ctx.rotate(positionObj.objZ * (Math.PI/180));
        ctx.globalAlpha=1;
        ctx.drawImage(img,stepsizeX*-4,stepsizeY*-4,stepsizeX*8,stepsizeY*8); 
        ctx.restore();
      }
      img.src = 'media/turbina2.png';//el img.src se pone despues del onload para asegurar su carga
    }  
    //Compara si las paradas que hizo el niño estuvieron bien
      function check1(){
        alert('Termino la ejecucion del codigo')
      }