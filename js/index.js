// Your code goes here


const busPicture = document.querySelector('img');
console.group(busPicture);

busPicture.addEventListener('mouseover', ()=> {
    alert("over")
})

 
const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
        console.log( `${e.code}`)
})



 window.addEventListener('load', function() {
    console.log("window has loaded successfully")
 });


  const btns = document.querySelector('.btn');

  btns.addEventListener('dblclick', function() {
            btns.textContent = "clicked"
            btns.style.color = "orange";
            btns.style.backgroundColor = "blue"; 
  })

//   const p = document.querySelector('p');

//   console.log(p)
//   p.addEventListener('select', function() {
//       p.style.color = "gray";
//       p.textContent = "I was changed"
//   })
