document.getElementById("btn").addEventListener("click",function(){


const xhr= new XMLHttpRequest();


xhr.onreadystatechange=function(){
    
    if(this.status==200 && this.readyState==4){
        document.getElementById("ajax").textContent=this.responseText;
    }
}

xhr.open("GET","example.txt",true);



xhr.send();




});