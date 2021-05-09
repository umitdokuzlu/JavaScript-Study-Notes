// function getData(data){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(typeof data==="string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("hata yapıyorsunuz.."))
//             }
//         },5000);
//     });
// }
// getData("selam ben data")
// .then(function(response){console.log("gelen değer:" + response)})
// .catch(function(err){console.error(err)});

function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data === "number"){
                resolve(data + 2);
            }
            else{
                reject("hata yapıyorsunuz");
            }
        },5000);
    });
}

getData(10).then(function(response){
    console.log(response);
    return response + 2;
}).then(function(response2){
    console.log(response2);
}).catch(function(err){
    console.error(err);
});