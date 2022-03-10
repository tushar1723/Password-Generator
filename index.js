// function to generate password
function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword="";
    const typesCount=lower+upper+number+symbol+length;
    const typesArr=[{lower},{upper},{number},{symbol}].filter((item)=>Object.values(item)[0]);

    for(let i=0;i<length;i+=typesCount){
        typesArr.foreach((type)=>{
         const funcName=Object.keys(type)[0];
         generatedPassword+=randomFunc[funcName]();
        });
    }
    const finalPassword=generatedPassword.slice(0,length);
    return finalPassword;
}

//function to copy password
let button=document.getElementById("clipboardBtn");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    document.execCommand(
        "copy",
        false,
        document.getElementById("PasswordResult").Select()
    );
});


//event listener

const generate = document.getElementById("generateBtn");
generate.addEventListener("click",()=>{
    const length=document.getElementById("Passwordlength").value;
    const hasUpper=document.getElementById("uppercase").checked;
    const hasLower=document.getElementById("lowercase").checked;
    const hasNumber=document.getElementById("numbers").checked;
    const hasSymbol=document.getElementById("symbols").checked;
    const result=document.getElementById("PasswordResult");
    result.innerText=generatePassword(hasUpper,hasLower,hasNumber,hasSymbol,length);
});

//function to generate random numbers and letters
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

function getRandomSymbol(){
    const symbols="!@#$%^&*(){}[]=<>/,.\|~"
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const randomFunc ={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbols:getRandomSymbol,
};
