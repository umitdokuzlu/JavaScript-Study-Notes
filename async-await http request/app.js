class Request{
    async get(url){
        // return new Promise((resolve,reject)=>{
        //     fetch(url)
        //     .then(response=>response.json())
        //     .then(data=>resolve(data))
        //     .catch(err=>reject(err));
        // })
        const response=await fetch(url);

        const data=await response.json();
        
        return data;
    }
    async post(url,data){
        // return new Promise((resolve,reject)=>{
        //     fetch(url,{
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //           },})
        //         .then(response=>response.text())
        //         .then(data=>resolve(data))
        //         .catch(err=>reject(err))
        // })
        const response=await fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      }
                      });
        const responseData =await response.json();
        return responseData;
    }
    async put(url,data){
        const response=await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })

        const responseData= await response.json();
        return responseData;
    }
    
    async delete(url){
        const response=await fetch(url,{
            method: 'DELETE',
          });
        // const responseData=await response.json();

        return "veriniz silindi.."
    }

}
const request =new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(response=>console.log(response))
// .catch(err=>console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:10,title:"selam"})
// .then(response=>console.log(response))
// .catch(err=>console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:10,title:"değiştir"})
// .then(response=>console.log(response))
// .catch(err=>console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/10")
.then(response=>console.log(response))
.catch(err=>console.error(err));