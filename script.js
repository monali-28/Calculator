let buttons=document.querySelectorAll('button');
let inputBox=document.getElementById('inputBox');
let string="";
let arr=Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click',(btn) =>{
        if(btn.target.innerHTML == "="){
            string=eval(string);
            inputBox.value=string;
        }else if(btn.target.innerHTML == 'AC'){
            string="";
            inputBox.value=string;
        }else if(btn.target.innerHTML == 'DEL'){
            string=string.slice(0,-1);
            inputBox.value=string;
        }else{
            string += btn.target.innerHTML;
        inputBox.value=string;
        }
        
    })
})
