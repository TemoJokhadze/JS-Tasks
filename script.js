// const getDatas = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => console.log(users[0].name))
//     .catch(error => console.error('Error:', error))

/////////

// const getTitles = fetch('https://jsonplaceholder.typicode.com/posts')
//                   .then(response => response.json())
//                   .then(posts => {
//                     for (let i = 0; i < 5; i++) {
//                         const element = console.log(posts[i].title);
//                     }
//                   })
//                   .catch(error => console.error('Error:', error))

/////////

// fetch('https://jsonplaceholder.typicode.com/invalidurl')
//     .then(response => {
//         if(!response.ok) throw new Error('network error');
//         return response.json()
//     })
//     .then(datas => console.log(datas)
//     )
//     .catch(error => console.error('შეცდომა', error))

/////////

// const url1 = 'https://jsonplaceholder.typicode.com/users'
// const url2 = 'https://jsonplaceholder.typicode.com/posts'

// Promise.all([
//     fetch(url1).then(response => response.json()),
//     fetch(url2).then(response => response.json())
// ])
// .then(([users,posts]) => {
    
//     console.log(users[0].name);
//     console.log(posts[0].title);
    
// })

// .catch(error => console.error('Error:', error))

//////////

