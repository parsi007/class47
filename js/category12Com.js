class category12Com {
    constructor(){
    this.button1 = createButton('business studies') ;
    this.button2 = createButton('math') ;
    this.button3 = createButton('economics') ;
    this.button4 = createButton('eng') ;

        
    this.button = createButton('accoutancy') ;
    }

    display(){
        this.button1.position(100,50);
        this.button2.position(100,100);
        this.button3.position(100,150);
        this.button4.position(100,200);
        this.button.position(50,50); 
    }
}
