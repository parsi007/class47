var canvas, backgroundImage , sub2form ,sub3form,sub4form,math9form,math10form;
var sub5form,sub6form,sub8form,sub9form,sub10form,math6form,math7form,math8form;
var sub11form,sub12form,tsubform,tsub2form,tsub3form,tsub4form,math3form;
var tsub5form,tsub6form , tsub7form,tsub8form,tsub9form,math5form,math11form;
var tsub10form,tsub11form,tsub12form , sub77form , math1form,math4form ;
var eng1form,sci1form,ssci1form, eng2form,sci2form,ssci2form,math2form;
var math12form,eng3form,eng4form,eng5form,eng6form,eng7form,eng8form;
var eng9form,eng10form,eng11form,eng12form,sci3form,subform ,loginform;
//var gameState = 0;
//var SrNoCount;
//var allPlayers;
//var distance = 0;
var database;
var  registerform, login2form ,login3form , register2form , webform,sci4form;
//var barbie_image, monster_image;
//var gameover,gameover_image;
var sci5form,sci6form,sci7form,sci8form,sci9form,sci10form,sci11form;
var sci12form,ssci3form,ssci4form,ssci5form,ssci6form,ssci7form,ssci8form;
var ssci9form,ssci10form,ssci11form , ssci12form,category11com,category11arts;
var category11medical,category11non,category12arts,category12com;
var category12non,category12medical;
function preload(){
  monster_image = loadImage("../images/capture.png");
  barbie_image = loadImage("../images/happy b.png");
  gameover_image = loadImage("../images/over.png");
}

function setup(){
  canvas = createCanvas(800, 800);
  database = firebase.database();

 registerform = new registerForm();
 loginform = new loginForm();
 login3form = new login3Form ();
 login2form = new login2Form ();
 webform = new webForm();
 subform = new subForm();
 math2form = new math2Form();
 sci2form = new sci2Form();
 ssci2form = new ssci2Form();
 register2form = new register2Form();
 sci1form = new sci1Form();
 eng2form = new eng2Form();
 ssci1form = new ssci1Form();
 eng1form = new eng1Form();
 sub2form = new sub2Form();
 math1form = new math1Form ();
 sub3form = new sub3Form();
 sub12form = new sub12Form();
 sub4form = new sub4Form();
 sub5form = new sub5Form();
 sub6form = new sub6Form();
 sub8form = new sub8Form();
 sub9form = new sub9Form();
 sub10form = new sub10Form();
 sub11form = new sub11Form();
 tsub3form = new tsub3Form();
 tsub2form = new tsub2Form();
 tsub4form = new tsub4Form();
tsub5form = new tsub5Form();
 tsubform = new tsubForm();
 tsub6form = new tsub6Form();
 tsub7form = new tsub7Form();
 sub77form = new sub77Form();
tsub8form = new tsub8Form();
 tsub9form = new tsub9Form();
 tsub10form = new tsub10Form();
 tsub11form = new tsub11Form();
 tsub12form = new tsub12Form();
 math3form = new math3Form ();
 math4form = new math4Form ();
 math5form = new math5Form ();
 math6form = new math6Form ();
 math7form = new math7Form ();
 math8form = new math8Form ();
 math9form = new math9Form ();
 math10form = new math10Form ();
 math11form = new math11Form ();
 math12form = new math12Form ();
 sci3form = new sci3Form();
 sci4form = new sci4Form();
 sci5form = new sci5Form();
 sci6form = new sci6Form();
 sci8form = new sci8Form();
 sci7form = new sci7Form();
 sci9form = new sci9Form();
 sci10form = new sci10Form();
 sci11form = new sci11Form();
 sci12form = new sci12Form();
 ssci3form = new ssci3Form();
 eng3form = new eng3Form();
 ssci4form = new ssci4Form();
 eng4form = new eng4Form();
 ssci5form = new ssci5Form();
 eng6form = new eng6Form();
 ssci7form = new ssci7Form();
 eng7form = new eng7Form();
 ssci8form = new ssci8Form();
 eng8form = new eng8Form();
 ssci6form = new ssci6Form();
 eng5form = new eng5Form();
 ssci9form = new ssci9Form();
 eng9form = new eng9Form();
 ssci10form = new ssci10Form();
 eng10form = new eng10Form();
 ssci12form = new ssci12Form();
 eng12form = new eng12Form();
 ssci11form = new ssci11Form();
 eng11form = new eng11Form();
 category11com = new category11Com();
 category12com = new category12Com();
 category11medical = new category11Medical();
 category11non = new category11Non();
 category11arts = new category11Arts();
 category12medical = new category12Medical();
 category12non = new category12Non();
 category12arts = new category12Arts();
  //game.getState();
  //game.start();
  loginform.display();
 
}

function draw(){
 // if(playerCount === 4){
 //   game.update(1);
  //}
  //if(gameState === 1){
   // clear();
    //game.play();
 // }
  //if(gameState === 2){
   // game.end();
 // }
}
