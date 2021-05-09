class Request{
    constructor(){
        this.xhr=new XMLHttpRequest();
    }

    get(url,callback){

        this.xhr.open("GET",url);

        this.xhr.onload=function(){
            if (this.status==200) {
                callback(null,this.responseText)
            }
            else(
                callback("hata yaptınız",null)
            )
        }
        this.xhr.send();
    }

    post(url,data,callback){

        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("content-type","application/json");
        this.xhr.onload=function(){
            if (this.status===201) {
                callback(null,this.responseText);
            }
            else{
                callback("hata yapıyorsun arkadaşım",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }    
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("content-type","application/json");
        this.xhr.onload=function(){
            if (this.status===200) {
                callback(null,this.responseText);
            }
            else{
                callback("hata yapıyorsun arkadaşım",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){
        this.xhr.open("DELETE",url);
        this.xhr.onload=function(){
            if (this.status===200) {
                callback(null,"silme işlemi başarılı");
            }
            else{
                callback("hata yaptın arkadaşım",null);
            }
        }
        this.xhr.send();
    }
   
}

const request=new Request();
//  GET request
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err==null){
//         console.log(response)
//     }
//     else{
//         console.log(err)
//     }
// });

// POST request
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"selam"},function(err,albums){
//     if (null===err) {
//         console.log(albums);
//     }
//     else{
//         console.log(err);
//     }
// })

// PUT request
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:113,title:"merhaba"},function(err,albums){
//     if (null===err) {
//         console.log(albums);
//     }
//     else{
//         console.log(err);
//     }
// })

// DELETE request
request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if (err===null) {
        console.log(response);
    }
    else{
        console.log(err);
    }
})