// async function test(data){
//     // return data;

//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("bu bir değerdir.");
//         },5000);
//     });
//     let response=await promise;
//     // console.log(response);
//     // console.log("naber");

//     return response;
// }

// // console.log(test("naber"));
// test("merhaba").then(response=>console.log(response));

// async function testData(data){
//     let promise=new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            if(typeof data==="string"){
//                resolve(data);
//            }
//            else{
//                reject("lütfen geçerli bir değer giriniz")
//            }
//        },3000); 
//     });
//     const response=await promise;
//     return response;
// }
// testData(25)
// .then(response=>console.log(response))
// .catch(err=>console.log(err));

// async function getCurrency(url){
//     const response=await fetch(url);

//     const data=await response.json();
    
//     return data;
// }
// getCurrency("https://jsonplaceholder.typicode.com/albums")
// .then(response=>console.log(response))
// .catch(err=>console.log(err));

