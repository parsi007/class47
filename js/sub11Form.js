class sub11Form {
    constructor(){
      this.button1 = createButton(' Medical') ;
      this.button2 = createButton('Non medical') ;
      this.button3 = createButton('Commerce') ;
      this.button4 = createButton('Arts') ;
      this.button = createButton('back') ;
    }
  
    display(){
      this.button1.position(100,50);
      this.button2.position(100,100);
      this.button3.position(100,150);
      this.button4.position(100,200);
      this.button.position(50,50);  
  
  
      this.button.mousePressed(()=>{
        login3form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })

      this.button1.mousePressed(()=>{
        category11medical.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
      this.button2.mousePressed(()=>{
        category11non.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })

      this.button3.mousePressed(()=>{
        category11com.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })

      this.button4.mousePressed(()=>{
        category11arts.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
    }
    
    
  
  }
    