const langs=["Python","Java","C++"];

function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("eklendi")
        callback();
    }, 2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang)
        });
    }, 1000);
}

addLang("Javascript",getAllLangs);