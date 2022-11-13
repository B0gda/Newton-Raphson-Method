//Author: Bogdan
//to start: node app.js
var express=require('express');
var bodyparser = require('body-parser');
var app=express();
var urlencodedParser = bodyparser.urlencoded({extended: false});


app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/JS'));

app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    //res.sendFile(__dirname+"/index.html");
    res.render('inData');
});

app.get('/result',(req,res)=>{
    //res.sendFile(__dirname+"/index.html");
    res.render('news');
});

app.post('/result', urlencodedParser ,(req,res)=>{
    let n1=req.body.num1;
    let n2=req.body.xOf0;
    let n3=req.body.accuracy;
    let strNum1 = '';
    for(var i = 0; i < n1.length; i++){
         if(n1[i] === 0){
        } else{
            strNum1 += `${n1[i]}x^${n1.length-(i+1)}, `;
        }
    }
    //console.log(strNum1);
    
    var EPSILON = n3;
    var ResStrRoot = '';


    // Function to find the root
    function newtonRaphson(x)
    {
        let h = func(x) / derivFunc(x); var stry = '';
        while (Math.abs(h) >= EPSILON)
        {
            h = func(x) / derivFunc(x);
       
            // x(i+1) = x(i) - f(x) / f'(x)
            x = x - h;
        }
        stry += `Значение корня равно : ${Math.round(x * 100.0) / 100.0}`;
        return stry;
    }
     ResStrRoot = newtonRaphson(n2);
     console.log(ResStrRoot, 'resstrroot');

    function func(x) { //Вычисление нужной функции
        var pars = n1; var a,b,c,d,e,f = 0 
        //console.log(pars);
        [a, b, c, d, e, f] = pars.toString().split(',').map(Number);
        a *= Math.pow(x,5);
        b *= Math.pow(x,4);
        c *= Math.pow(x,3);
        d *= Math.pow(x,2);
        e *= Math.pow(x,1);
        let resF = a+b+c+d+e+f; 
        
      return  resF;
    }
    function derivFunc(x) { //Вычисление функции производной
      var pars = n1; var a,b,c,d,e,f = 0;
      //console.log(pars);
      [a, b, c, d, e, f] = pars.toString().split(',').map(Number);
      a *= 5;
      b *= 4;
      c *= 3;
      d *= 2;
      e *= 1;
      a *= Math.pow(x,4);
      b *= Math.pow(x,3);
      c *= Math.pow(x,2);
      d *= Math.pow(x,1);
      let resF = a+b+c+d+e; 
      
    return  resF;
  }
  if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('news', {data: req.body, strNum1, ResStrRoot});
});


app.listen(3000,(res)=>{
    console.log('server started at 3000 port');
});