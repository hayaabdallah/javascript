
let nameval=document.getElementById("name");
let age=document.getElementById("age");
let description=document.getElementById("description");
let major=document.getElementById("major");
let birth=document.getElementById("birth");
let language=document.getElementById("lang")
let sibling=document.getElementById("sibling");


function submit()
{

    localStorage.setItem("name",`${nameval.value}`);
    localStorage.setItem("age",`${age.value}`);
    localStorage.setItem("des",`${description.value}`);
    localStorage.setItem("major",`${major.value}`);
    localStorage.setItem("birth",`${birth.value}`);
    localStorage.setItem("languages",`${language.value}`);
    localStorage.setItem("sibling",`${sibling.value}`);
    
    if(document.getElementsByClassName("gender")[0].value ==1){
        localStorage.setItem("gender","Male")
    }else{
        localStorage.setItem("gender","Female")
    }
    
    for(let i = 0 ; i<lang.length ; i++){
        if(lang[i].checked){
            x+=" "+lang[i].value
        }
    }
    localStorage.setItem("languge" , `${x}`)
}

document.getElementById("card").style.display=localStorage.getItem("display")
document.getElementById("cardname").innerHTML=localStorage.getItem("name")
document.getElementById("cardage").innerHTML=localStorage.getItem("age")
document.getElementById("cardselfDescription").innerHTML=localStorage.getItem("description")
document.getElementById("cardmajorUn").innerHTML=localStorage.getItem("majorun")
document.getElementById("cardbd").innerHTML=localStorage.getItem("date")
document.getElementById("cardpl").innerHTML=localStorage.getItem("languge")
document.getElementById("cardbrothers").innerHTML=localStorage.getItem("brothers")

document.getElementById("cardgender").innerHTML = localStorage.getItem("gender")

