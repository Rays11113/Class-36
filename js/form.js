class Form {
    constructor () {
        this.input = createInput ("Name"); 
        this.button = createButton ('Play');
        this.greeting = createElement ('h3');
    }
    hide() {
        this.greeting.hide(); 
        this.button.hide();
        this.input.hide();
    }
   display()  {
       var title = createElement ('h2')
       title.html ("car racing game");
       title.position (130,0);

    
       this.input.position (130, 150);
       this.button.position (250, 200);
       this.button.mousePressed (function () {
           this.input.hide();
           this.button.hide();
           var name = input.value ();
           playerCount+=1;
           player.update (name);
           player.updateCount (playerCount);
           this.greeting.html ("hello" +name);
           this.greeting.position (130,160);
       }
       )
    }

    
}
