

function orderfood() { 
  let foodorder = false; 
  return new Promise((resolve, reject) => { 
    if(foodorder){ 
      resolve("Food order placed successfully"); 
    } else { 
      reject("Failed to place food order"); 
    } 
  }); 
} // <-- This closing brace was missing

orderfood().then((message) => { 
  console.log(message); 
}).catch((error) => { 
  console.log(error); 
}); // <-- Added missing closing parenthesis for .catch()
