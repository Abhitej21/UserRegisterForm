let sub = document.getElementById("submitBtn");
let phn = document.getElementById("phone");
let inp1 = document.getElementById("inp1");
let mail = document.getElementById("Email");
let pass = document.getElementById("passWord");
let cpass = document.getElementById("ConfirmPassword");
let email = document.getElementById("Email");
let phnMsg = document.getElementById("phnMsg");
let passMsg = document.getElementById("passMsg");
let cpassMsg = document.getElementById("cpassMsg");
let mailMsg = document.getElementById("mailMsg");
let cancel = document.getElementById("cancelBtn");
let pw = /^[A-Za-z0-9]{4,10}$/;
let num = /^[0-9]+$/;
let re = /(?=.*[a-zA-Z].{4,10})(?=.*\d)/;
function call(){
    let phnNumber = phn.value;
    phnMsg.textContent = "";
    passMsg.textContent = "";
    cpassMsg.textContent = "";
    mailMsg.textContent = "";
    if(!(!(isNaN(phnNumber)) && phnNumber.length===11)){
       phnMsg.textContent = "Incorrect mobile phone number";
       phnMsg.style.color="red";
       phnMsg.style.marginTop="8px";
       return;
    }
    let passInp = pass.value;
    if(!passInp.match(re)){
        passMsg.textContent = "The password must contain 4 to 10 letters and numbers";
        passMsg.style.color="red";
        passMsg.style.marginTop="8px";
        return;
    }
    if(!(cpass.value===pass.value)){
        cpassMsg.textContent = "The two entered passwords must be same";
        cpassMsg.style.color="red";
        cpassMsg.style.marginTop = "8px";
        return;
    }
    let mailId = mail.value;
    let domain = mailId.split(".").slice(-1)[0];
    if(!((/^\d/.test(mailId)) || (/^[a-zA-Z]/).test(mailId)) || mailId.endsWith("_") || mailId.endsWith(".") || mailId.endsWith("-") || domain.length>20){
        mailMsg.textContent = "Email format error";
        mailMsg.style.color = "red";
        mailMsg.style.marginTop = "8px";
        return;
    }
    alert("Success");
    
}
function can(){
   let choice = confirm("All information will be cleared after the reset. Are you sure about the reset?");
   if(choice===true){
        phn.value = "";
        phnMsg.textContent = "";
        pass.value = "";
        passMsg.textContent = "";
        cpass.value = "";
        cpassMsg.textContent = "";
        mail.value = "";
        mailMsg.textContent = "";
   }
}
sub.addEventListener("click",call);
cancel.addEventListener("click",can);

console.log("Abhiteja hii");
console.log("Hi Mr.Abhitej Samudrala");