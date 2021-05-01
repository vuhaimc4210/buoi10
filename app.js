//document.getElementById
//getElementsByClassName() --> HTML collection
//getElementsByTagName() -->HTML collection
//.querySelector("")
//.querySelectorAll("") ->> NodeList
// const app = document.getElementById("app");
// console.dir(app);
// const demo = document.getElementsByClassName("demo");
// console.log(demo);
//propertiles

//.innerHTML, .innerText, .textContent
//style
//id
// .classList --> .add(), .remove(), .toggle(), .contains()


//methods

//.appenChild()
//.remove()
//.setAttribute()
//.getAttribute()
//.removeAttribute()

//event

//click event,  submit event, keyboard event
// const btn = document.getElementById("btn");
// btn.onclick = function() {
//     alert("Hello");
// }
// btn.addEventListener('click', function(){
//     alert("Hello 2");
// })

//hủy sự kiện .removeEventListener()

//event bubbling

//Asynchronous
// const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
// data.then(function(res){
//     return res.json();
// }).then(function(data){
//     console.log(data);
    //Logic
// })
//   .then(response => response.json())
//   .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos')
.then((res) => res.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 0
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data));
const ul = document.getElementById("myUL")
let data = fetch('https://jsonplaceholder.typicode.com/todos')
data.then(function(res){
    return res.json();
}).then(function(data){
    for(let i = 0; i < 5; i++){
        let newLi = document.createElement("li");
        
        if(data[i].completed){
            newLi.classList.add("checked");
        }
        ul.appendChild(newLi);
        
        newLi.classList.add("li")
        newLi.innerHTML = data[i].title;

        let newBtn = document.createElement("button");
        newLi.appendChild(newBtn);
        newBtn.innerHTML = "X";
        newBtn.classList.add("newBtn");

        newBtn.onclick = function() {
                console.log(newLi);
                newLi.remove();
            }
    }
    console.log(data);
})


// const addBtn = document.getElementById("addBtn");
// addBtn.onclick = function() {
//     const newLi = document.createElement("li")
//     ul.appendChild(newLi);
//     newLi.innerHTML = "Đi Chơi";
// }
// const myInput = document.getElementById("myInput");
const myDIV = document.getElementById("myDIV");
myDIV.onsubmit = function(event){
    event.preventDefault();
    const input = myDIV.name.value;
    console.log(input);
    const newLi = document.createElement("li")
    ul.appendChild(newLi);
    newLi.innerHTML = input;


    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({  
            title: input,
            conpleted: 'false',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    let newBtn = document.createElement("button");
        newLi.appendChild(newBtn);
        newBtn.innerHTML = "X ";
        newBtn.classList.add("newBtn");

        ul.onclick = function(event){
            // if(event.target.classList.contains("li"))
            event.target.classList.toggle("checked");
        }
        
        newBtn.onclick = function() {
                console.log(newLi);
                newLi.remove();
            }


}
// const newLi = document.createElement("li")
// ul.appendChild(newLi);

// newLi.innerHTML = "Đi Chơi vs gái";
ul.onclick = function(event){
    console.log(event.target);
    if(event.target.classList.contains("li")){
        if(event.target.classList.toggle("checked")){
            fetch('https://jsonplaceholder.typicode.com/todos/1', {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: 'true',
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
        else{
            fetch('https://jsonplaceholder.typicode.com/todos/1', {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: 'false',
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
        
    }
}