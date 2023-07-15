class register2Form {
    constructor(){
        this.input= createInput('display name');
         this.button1 = createButton("create account");

    }

    display(){

            this.input.position(100,35);
            this.button1.position(100,85);
            
            this.button1.mousePressed(()=>{
              this.input.hide();
              this.button1.hide();
              login3form.display();
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

