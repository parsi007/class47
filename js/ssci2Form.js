class ssci2Form {
    constructor(){
    this.button1 = createButton('videos') ;
    this.button2 = createButton('question') ;
    this.button = createButton('back') ;
    }

    display(){
        this.button1.position(100,50);
        this.button2.position(100,100);
        this.button.position(50,50); 
    }
}
