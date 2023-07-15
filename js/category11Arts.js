class category11Arts {
    constructor(){
    this.button1 = createButton('history') ;
    this.button2 = createButton('political sci') ;
    this.button3 = createButton('math') ;
    this.button4 = createButton('eng') ;

        
    this.button = createButton('upsc') ;
    }

    display(){
        this.button1.position(100,50);
        this.button2.position(100,100);
        this.button3.position(100,150);
        this.button4.position(100,200);
        this.button.position(100,250); 

        this.button3.mousePressed(()=>{
            math11form.display();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button.hide();
          })

          this.button4.mousePressed(()=>{
            eng11form.display();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button.hide();
          })

          this.button1.mousePressed(()=>{
            ssci11form.display();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button.hide();
          })

          this.button2.mousePressed(()=>{
            sci11form.display();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button.hide();
          })

          this.button.mousePressed(()=>{
            upscform.display();
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button.hide();
          })
    }
}
