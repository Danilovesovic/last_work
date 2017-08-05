
// // function info(){
// // alert("Radi");


// // }



// // var player1 = document.getElementsByClassName('player1')[0];


// // // player1.onclick = info;

// // // player1.onclick = display;


// // function display(){

// // 	console.log("radi")
// // }

// // player1.addEventListener('click', function(){

// // 	alert("Radi");
// // })
// // window.addEventListener( 'keypress', function(){
// // 	console.log("Radi")
// // // })


// // var lista = document.getElementsByTagName('li');

// // for(var i=0; i<lista.length; i++){

// // lista[i].addEventListener('click',function(){ 

// // if(this.style.background == 'orange'){
// // 	this.style.background = 'white';
// // }else{
// // 	this.style.background = 'orange';
// // }
// // })
// // }

// // window.addEventListener('keypress', info );


// // function info(e){

// // console.log(e);

// // }






// // function info(){ 
// // console.log(this);

// // }

// // info();

// // var xxx = {
// // //  info:function(){
// // //  	console.log(this)
// // //  }  

// // }

// // xxx.info();






// // pokupljena kocka, napravljena tabla, i pokupljeno svako polje
// var kocka = document.getElementById('wrapp');
// createTable();
// var box = document.getElementsByClassName('box');

// var lines = [

// [box[0],box[1],box[2]],
// [box[3],box[4],box[5]],
// [box[6],box[7],box[8]],
// [box[0],box[3],box[6]],
// [box[1],box[4],box[7]],
// [box[2],box[5],box[8]],
// [box[0],box[4],box[8]],
// [box[2],box[4],box[6]]


// ];







// // dodata antena za svako polje
// for(var i=0; i<box.length; i++){
// 	box[i].addEventListener('click', game)
// }

// // kreiraana linija za pobedu.
// var line = document.createElement('div');
// line.id = 'linija'
// kocka.appendChild(line);




// // upotreblenja varijabla this koja pita ko poziva ovu funkciju(poziva je box[i]), odnosno polje na koje smo kliknuli
// var simbol = 'o';
// function game(){
//   this.removeEventListener('click', game);
//   this.style.background = "tomato";
//    // var simbol = 'o'; // pravi se uslov za da se menjaju x i o.
//    if(simbol == 'x'){
//     simbol = 'o';

//    }else {
//     simbol = 'x';
//    }

//    this.innerHTML = simbol;
     
//    checkLines()         


// // funkcija za pravljenje tabele

           
// }





              

// function createTable(){
  
//                 var text = '';
//                 for(var i=0; i<9; i++){
//                 text+='<div class="box"></div>';

//                  }

//                 kocka.innerHTML = text;

//           }

// function checkLines (){
   
//    for(var i=0; i<lines.length; i++){
//      var f = lines[i][0].innerHTML
//      var s =lines[i][1].innerHTML
//      var t = lines[i][2].innerHTML

//      if(f == s && f== t && f !==''){
//         console.log('pogodak')
//         lines[i][0].style.background = 'green'
//         lines[i][1].style.background = 'green'
//         lines[i][2].style.background = 'green'
//      }

//    }


// }



// var box = document.getElementById('box');

// box.addEventListener('click', function(){
    
//     if(event.altKey == true){

//      this.style.background = 'green';

//     }else{

//       this.style.background = 'tomato';

//     }




// 	});

// window.addEventListener('click', function(event){

// var div = document.createElement('div');
// div.className = 'krug';
// div.style.left = (event.clientX-50) +'px';
// div.style.top = (event.clientY-50) + 'px';


// document.body.appendChild(div);


// console.log(event)



// })


var sub = document.querySelector('input[type="submit"]')

sub.addEventListener('click',function(e){
	// console.log('radi')
	e.preventDefault()

	setTimeout(function(){
		document.querySelector('form').submit();

	},3000);


})