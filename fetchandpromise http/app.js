class Request {
    get(url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE',
            })
            .then(data=>data.json())
            .then(response=>resolve("veri silme işlemi başarılı"))
            .catch(err=>reject(err));
        })
    }

}

const request = new Request();
// GET
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums=>console.log(albums))
// .catch(err=>console.log(err));

// POST
// request.post("https://jsonplaceholder.typicode.com/albums",{userId:3,title:"ben data"})
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err));

// PUT
// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"tarkan karma"})
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err));

// DELETE
request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message=>console.log(message))
.catch(err=>console.log(err));