class registerForm {
  constructor(){
    this.input= createInput('display name');

    this.button1 = createButton("create account");
  }
  //hide(){
    //this.input5.hide();
    //this.input6.hide();
   // this.greeting.hide();
    //this.title.hide();
    //this.button.hide();
 // }

  display(){

    this.input.position(100,35);

    this.button1.position(100,85);
    
    this.button1.mousePressed(()=>{
      this.input.hide();
      
      this.button1.hide();
      login2form.display();
     // player.name = this.input.value();
      //playerCount+=1;
      //player.index = playerCount;
      //player.update();
     // player.updateCount(playerCount);
     // this.greeting.html("Hello " + player.name)
     // this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    
  });



}
}
