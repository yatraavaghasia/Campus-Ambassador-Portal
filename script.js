let username=document.getElementById('name');
let p=document.getElementById('pforname');
username.addEventListener('change', e =>{
    let n=e.target.value;
    let text='';
    console.log(n);
    if((n==null)||(n==''))
    {
        text='Name cannot be blank';   
    }

    //console.log(text);
    //console.log(p);
    p.innerHTML=text;
})
let button=document.getElementById('submit');
console.log(button);
button.addEventListener('click', e =>{
    console.log(username.value);
    let text="";
    if(((username.value)=='')||(username.value==null))
    {
        text='Name cannot be blank';
    }
    p.innerHTML=text;

    console.log(college.value);
    if((college.value=="")||(college.value==null))
    {
        pforcollege.innerHTML="Your college/university must be specified.";
    }

    console.log(email.value);
    if((email.value).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        console.log("email is fine");
    }
    else
    {
        pforemail.innerHTML="Email not valid!";
    }

    console.log(password.value);
    if((password.value).match(regexpass))
    {
        console.log('password is fine');
    }
    else
    {
        pforpassword.innerHTML="Password must be atleast 8 characters, with one uppercase, one lower case, atleast a symbol and a number.";
    }

    console.log(phone.value);
    if((phone.value).match(/^\d{10}$/))
    {
        console.log('phone number is fine');
    }
    else
    {
        pforphone.innerHTML="Please enter a valid phone number.";
    }
})
/*function emptyfield(e)
{
    let n=e.target.value;
    let a="";
    console.log(n);
}*/
let college=document.getElementById('college');
console.log(college);
let pforcollege=document.getElementById('pforcollege');
college.addEventListener('change', e=>{
    let v=e.target.value;
    let text="";
    console.log(v);
    if((v=="")||(v==null))
    {
        text="Your college/university must be specified."
    }
    pforcollege.innerHTML=text;
});

let mailreg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let email=document.getElementById('email');
console.log(email);
let pforemail=document.getElementById('pforemail');
email.addEventListener('change', e =>{
    let b=e.target.value;
    let text="";
    console.log(b);
    if(b.match(mailreg))
    {
        console.log('here!');
    }
    else
    {
        text="Email not valid!";
    }
    pforemail.innerHTML=text;
})

let regexpass=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let password=document.getElementById('password');
console.log(password);
let pforpassword=document.getElementById('pforpassword');
password.addEventListener('change', e =>{
    let p=e.target.value;
    let text="";
    console.log(p);
    if(p.match(regexpass))
    {
        console.log('password is fine');
    }
    else
    {
        text="Password must be atleast 8 characters, with one uppercase, one lower case, atleast a symbol and a number."
    }
    pforpassword.innerHTML=text;
})
let phone=document.getElementById('phone');
console.log(phone);
let pforphone=document.getElementById('pforphone');
phone.addEventListener('change', e =>{
    let p=e.target.value;
    let text="";
    console.log(p);
    if(p.match(/^\d{10}$/))
    {
        console.log('phone number is fine');
    }
    else
    {
        text="Please enter a valid phone number.";
    }
    pforphone.innerHTML=text;
})