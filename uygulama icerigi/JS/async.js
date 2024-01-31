// custom async function

// function myAsyncFunction(time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("İşlem tamamlandı"); // işlem başarılıysa "resolve" kullanılır.
//       reject("Bir hata oluştu"); // işlemde hata varsa "reject" kullanılır
//     }, time);
//   });
// }

// myAsyncFunction(2000)
//   .then((response) => {
//     console.log(response); //2 saniye sonra "İşlem tamamladı!" mesajı konsolda görüntülenir.
//   })
//   .catch((error) => {
//     console.log(error); // Eğer reject ile bir hata dönerse burası çalışır.
//   });

const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/posts";
const getReq = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        cb(null, response);
      } else {
        cb("Hata: " + xhr.status, null);
      }
    }
  };
  xhr.send();
};

// callback hell

// getReq(`${jsonplaceholderURL}/1`, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//     getReq(`${jsonplaceholderURL}/2`, (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(res);
//         getReq(`${jsonplaceholderURL}/3`, (err, res) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(res);
//             getReq(`${jsonplaceholderURL}/4`, (err, res) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log(res);
//                 getReq(`${jsonplaceholderURL}/5`, (err, res) => {
//                   if (err) {
//                     console.log(err);
//                   } else {
//                     console.log(res);
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// Promise

const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          reject(`${xhr.status} - Hata!`);
        }
      }
    };
    xhr.send();
  });
};

// getRequest(`${jsonplaceholderURL}/1`)
//   .then((res) => {
//     console.log(res);
//     return getRequest(`${jsonplaceholderURL}/2`);
//   })
//   .then((res) => {
//     console.log(res);
//     return getRequest(`${jsonplaceholderURL}/3`);
//   })
//   .then((res) => {
//     console.log(res);
//     return getRequest(`${jsonplaceholderURL}/4`);
//   })
//   .then((res) => {
//     console.log(res);
//     return getRequest(`${jsonplaceholderURL}/5`);
//   }).then(res => console.log(res))

// fetch
//get request
// fetch(`${jsonplaceholderURL}/1`)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => console.log(data));

// post request

const newData = {
  name: "Lorem Ipsum",
  email: "loram@ipsumdolor.com",
  body: "lorem ipsum dolor sit amet non elit",
};

// fetch(jsonplaceholderURL, {
//   method: "POST",
//   headers: { "Content-Type": `application/json` },
//   body: JSON.stringify(newData),
// })
//   .then((res) => {
//     console.log(res.status);
//     return res.json();
//   })
//   .then((data) => console.log(data));

// async / await

const getPostByID = async (postId) => {
  console.log("inner 1");
  console.log("inner 2");

  const res = await fetch(`${jsonplaceholderURL}/${postId}`);
  const data = await res.json();

  console.log("inner 3");
  console.log("inner 4");
  return data;
};

console.log("outer 1");
console.log("outer 2");
getPostByID(9).then(res => console.log(res))
console.log("outer 3");
console.log("outer 4");
