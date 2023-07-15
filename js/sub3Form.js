class sub3Form {
    constructor(){
      this.button1 = createButton('math') ;
      this.button2 = createButton('english') ;
      this.button3 = createButton('social science') ;
      this.button4 = createButton('science') ;
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
        math3form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
  
      this.button3.mousePressed(()=>{
        ssci3form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
  
      this.button2.mousePressed(()=>{
        eng3form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
  
  
      this.button4.mousePressed(()=>{
        sci3form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
    }
  
  
  }
    