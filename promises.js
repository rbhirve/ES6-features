// Promises in Node Js ES6

// Without promises
setTimeout(function(){
    console.log('Yay!')
}, 1000);

// With promise objects
var wait1000 =  new Promise( (resolve, reject) => {
    setTimeout(resolve, 1000)
  }).then( () => {
      console.log('Yay! I am using promises!!')
  })

