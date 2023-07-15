class webForm {
    constructor (){
     this.button1 = createButton('teacher') ;
     this.button2 = createButton('students') ;
    }
    display() {
     
      this.button1.position(400,400);
     this.button2.position(400,450);
     
     this.button1.mousePressed(()=>{
      registerform.display();
      this.button1.hide();
      this.button2.hide();
   })
     
   this.button2.mousePressed(()=>{
      register2form.display();
      this.button1.hide();
      this.button2.hide();
   })
     
    }
 }