class sub2Form {
    constructor(){
      this.button1 = createButton('math') ;
      this.button2 = createButton('english') ;
      this.button3 = createButton('social science') ;
      this.button4 = createButton('science');
      this.button = createButton('back') ;
      //this.SrNoCount = 0;
      //this.grade = 2;
      //this.level= "Easy";
      //this.question="";
      //this.answer="";
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
        math2form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
  
      this.button3.mousePressed(()=>{
        ssci2form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
  
      this.button2.mousePressed(()=>{
        eng2form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })
  
  
      this.button4.mousePressed(()=>{
        sci2form.display();
        this.button1.hide();
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button.hide();
      })

    }
  
    //getSrNoCount(){
    //var SrNoCountRef = database.ref('SrNo');
    //SrNoCountRef.on("value",(data)=>{
    // SrNoCount = data.val();
     // })
   // }
  
    //update(SrNoCount1, grade1,level1,question1,answer1){
     // var questionsIndex = "questions/SrNo" + this.index
      //database.ref(questionsIndex).set({
        
       // grade:1,
       // level:this.level,
      //  question:this.question,
       // answer:this.answer,
        
     //}
     //);
    //}
  

  }