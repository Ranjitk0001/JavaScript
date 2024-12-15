var show = (a,b,c) => {  
    console.log(a + " " + b + " " + c );  
}  
show(100,200,300);  

var show = (a, b=200) => {
    console.log(a + " " + b);
    }
    show(100);

    var show = (a, b=200) => {  
        console.log(a + " " + b);  
    }  
    show(100,500);  


    var show = (a, ...args) => {  
        console.log(a + " " + args);  
    }  
    show(100,200,300,400,500,600,700,800); 
    
    
    // Arrow Function without Parentheses
    var show = x => {  
        console.log(x);  
    }  
    show("Hello World"); 

    /*
    100 200 300
100 200
100 500
100 200,300,400,500,600,700,800
Hello World
    */