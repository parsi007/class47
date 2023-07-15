class loginForm {
  constructor(){
    this.input = createInput('username');
    this.input1 = createInput('Password');
    this.button = createButton('login') ;
  }
  hide(){
    //this.button.hide();
    //this.input.hide();
    //this.input1.hide();
  }
  
  display(){
   this.input.position(100,35);
   this.input1.position(100,70);
   this.button.position(100,105);
   this.button.mousePressed(()=>{
    this.input.hide();
    this.input1.hide();
    this.button.hide();
   // this.greeting.html("Hello " + this.input);
    //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    webform.display();
 
  //barbie = createSprite(100,85);
  //barbie.addImage("barbie",barbie_image);
  })
 
 
 
 
 
  // getCount(){
   // var playerCountRef = database.ref('playerCount');
   // playerCountRef.on("value",(data)=>{
     // playerCount = data.val();
   // })
 // }

 // updateCount(count){
    //database.ref('/').update({
    //  playerCount: count
   // });
 // }

  //update(){
   // var playerIndex = "players/player" + this.index;
    //database.ref(playerIndex).set({
    //  name:this.name,
     // distance:this.distance
   // });
 // }

  //static getPlayerInfo(){
    //var playerInfoRef = database.ref('players');
    //playerInfoRef.on("value",(data)=>{
     // allPlayers = data.val();
   // })
  //}
  
}
}

