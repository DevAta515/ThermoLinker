var select1=(document.querySelector("#unitFrom"));
var select2=(document.querySelector("#unitTo"));
btn=document.querySelector(".btn");
ans=document.getElementById("btn1");
inp=document.getElementById("input");
sign=document.getElementById("sign");
inter=document.getElementById("change");
unitFrom.onclick=function getOut(){
    // alert("it has clicked");
    if(select1.options[0].value=='cel1'){
        select1.options[0].remove();
    }
    unitFrom=select1.value;
    // console.log(unitFrom);  
unitTo.onclick=function(){
    if(select2.options[0].value=='cel1'){
        select2.options[0].remove();
    }
    unitTo=select2.value;
}
inter.onclick=function(){
            inter.classList.add("fa-bounce");
            setInterval(()=>{
                inter.classList.remove("fa-bounce");
            },700);
            select1.value=unitTo;
            select2.value=unitFrom
        }
    btn.onclick=function(){
        sign.classList.add("fa-spin");
        setInterval(()=>{
            sign.classList.remove("fa-spin");
        },1000)
        fin=0.0;
        console.log(typeof(fin))
        console.log(typeof(inp.value));   
        val=parseFloat((inp.value)); 
        unitFrom=select1.value;
        unitTo=select2.value;    
        if(unitFrom=="cel"){
            fin=(unitTo=='kel')?(val+273.15):(unitTo=='frht')?(val*9/5+32):"ERROR";
            console.log("hello");
        }
        if(unitFrom=="kel"){
            fin=(unitTo=='cel')?(val-273.15):(unitTo=='frht')?((val-273.15)*9/5+32):"ERROR";
            console.log("hello");
        }
        if(unitFrom=="frht"){
            fin=(unitTo=='cel')?((val-32)*5/9):(unitTo=='kel')?((val-32)*5/9+273.15):"ERROR";
            console.log("hello");
        }
        if(unitTo==unitFrom){
            alert("Units can't be same");
            fin="ERROR";
        }
        ans.innerText=fin;
    }   
}
btn.onclick=function(){
    if(select1.value!=select2.value){
        sign.classList.add("fa-spin");
        setInterval(()=>{
            sign.classList.remove("fa-spin");
        },1000)
    }
    }