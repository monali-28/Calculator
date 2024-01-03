let buttons=document.querySelectorAll('button');
let inputBox=document.getElementById('inputBox');
let string="";
let arr=Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(btn) =>{
        if(btn.target.innerHTML == "="){
            try {
                if ( string.endsWith ("/0") ) {
                   throw( "Divide by zero error." )
                } else {
                    string=eval(string);
                    inputBox.value=string;
                }
             }
             catch ( e ) {
                alert("Error: " + e );
             }
          }else if(btn.target.innerHTML == 'AC'){
            string="";
            inputBox.value=string;
        }else if(btn.target.innerHTML == 'DEL'){
            string=string.slice(0,-1);
            inputBox.value=string;
        }
        else{
            string += btn.target.innerHTML;
            inputBox.value=string;
        }
        
    })
})
