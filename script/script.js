const arr=[];
let idn=0;


const form=document.getElementById("form");
form.addEventListener('submit',process);
    //console.log("inside")
 function process(event){
     event.preventDefault()
    const stuname=document.getElementById("name").value;
    const stuemail=document.getElementById("email").value;
    const stuGpa=document.getElementById("Gpa").value;
    const stuAge=document.getElementById("Age").value;
    const stuDegree=document.getElementById("Degree").value;
  
    let obj={
        ID:idn+1,
        name:stuname,
        email:stuemail,
        age:stuAge,
        gpa:stuGpa,
        degree:stuDegree
    }
    arr.push(obj);
   form.reset();
   idn++;
   console.log("adding data",idn);
    showdata();
}

function delte(event){
    let id=event.parentNode.parentNode.parentNode.id;
    //console.log(id);
    for(let i=0;i<arr.length;i++){
        if(arr[i].ID==id){
            arr.splice(i, 1);
        }
    }
    console.log("after delete",idn);
    console.log(" delete item id",id);
    console.log(arr);
    //console.log("inside showinform")
  showdata();

}

function showdata(){
    const tbody=document.getElementById("adddata");
    tbody.innerHTML="";
    for(let i=0;i<arr.length;i++){

    tbody.innerHTML+=`<tr  id="${arr[i].ID}"><td>${arr[i].ID}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].gpa}</td>
    <td class="degree"><div>${arr[i].degree}</div><div><a onclick="delte(this)"><img src="img/delte.svg"></a>
    <a onclick="update(this)"><img  src="img/update.svg"></a></div>
    </td></tr>`
} }

function update(e){
    let id=e.parentNode.parentNode.parentNode.id;
    console.log(id);
    let key=0;
    let indx=0;
    for(let i=0;i<arr.length;i++){
       if(arr[i].ID==id)
       { indx=i;}
    }
    document.getElementById("name").value=arr[indx].name;
    document.getElementById("email").value=arr[indx].email;
    document.getElementById("Gpa").value=arr[indx].gpa;
    document.getElementById("Age").value=arr[indx].age;
    document.getElementById("Degree").value=arr[indx].degree;
   
   
    form.removeEventListener('submit',process);
    let changeaddbtn=document.getElementById("submit");
       changeaddbtn.value='Edit Student';
       form.addEventListener('submit',updatedata);
     
    console.log("after adding new event listener updatedata")

 function updatedata(event){
     event.preventDefault()
    
    console.log("inside  updatedata")
     arr[indx].name=document.getElementById("name").value;
     arr[indx].email=document.getElementById("email").value;
         arr[indx].gpa=document.getElementById("Gpa").value;
         arr[indx].age=document.getElementById("Age").value;
         arr[indx].degree=document.getElementById("Degree").value;

     //  const form=document.getElementById("form");
     form.removeEventListener('submit',updatedata);
     let changeaddbtnv=document.getElementById("submit");
     changeaddbtnv.value='Add Student';
       form.addEventListener('submit',process);
       console.log("showing update data");
       form.reset();
       showdata();
    }
   

}


//search event
function search(){
    const tbody=document.getElementById("adddata");
   
    let key=document.getElementById("search").value;
   let get=0;
   if(key=="") {alert("no data found")
   return;}
   for(let i=0;i<arr.length;i++){
        if(arr[i].name==key || arr[i].email==key || arr[i].degree==key)
        { get=1;
            tbody.innerHTML="";
     tbody.innerHTML+=`<tr  id="${arr[i].ID}"><td>${arr[i].ID}</td>
    <td>${arr[i].name}</td>
    <td>${arr[i].email}</td>
    <td>${arr[i].age}</td>
    <td>${arr[i].gpa}</td>
    <td class="degree"><div>${arr[i].degree}</div><div><a onclick="delte(this)"><img src="img/delte.svg"></a>
    <a><img onclick="update(this)" src="img/update.svg"></a></div>
    </td></tr>`
        }
    }
    if(get==0){ 
        alert("No data found");
        showdata();}

      //showdata();
}










// const addItem = document.getElementsByClassName("add-conatiner")[0];
// const form = document.getElementById("myForm");

// // Items
// const nameVal = document.getElementById('name');
// const email = document.getElementById('email');
// const gpa = document.getElementById('gpa');
// const age = document.getElementById('age');
// const degree = document.getElementById('degree');

// // Button
// const addButton = document.getElementById('submit');
// addButton.addEventListener("click", renderData);

// var idVal = 1;
// var studentData = [];

// function renderData() {

//     studentData.push({
//         id: idVal,
//         name: nameVal.value,
//         email: email.value,
//         gpa: gpa.value,
//         age: age.value,
//         degree: degree.value
//     });

//     displayData(studentData);
//     clearInput();
//     idVal++;
// }

// function clearInput() {
//     form.reset();
// }

// function displayData(studentData) {
//     addItem.innerHTML = ""; // Clear existing table rows

//     for(let i=0;i<studentData.length;i++){
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${studentData[i].id}</td>
//             <td>${studentData[i].name}</td>
//             <td>${studentData[i].email}</td>
//             <td>${studentData[i].gpa}</td>
//             <td>${studentData[i].age}</td>
//             <td class="degreeItem"><div>${studentData[i].degree}</div><div><a onclick="update(this)"><i class="fa-solid fa-pen-to-square edit"></i></a>
//             <a onclick="delete(this)"><i class="fa-solid fa-trash delete"></i></a></div>
//             </td>
//         `;
//         row.classList.add("rowItem");
//         addItem.appendChild(row);
//     };
// }


// // update data
// function update(e){
//     let id=e.parentNode.parentNode.parentNode.id;
//     console.log(id);
//     let key=0;
//     let index=0;
//     for(let i=0;i<studentData.length;i++){
//        if(studentData[i].id==id)
//        { index=i;}
//     }
//     nameVal.value=studentData[index].name;
//     email.value=studentData[index].email;
//     gpa.value=studentData[index].gpa;
//     age.value=studentData[index].age;
//     document.getElementById("degree").value=studentData[index].degree;
   
   
//     addButton.removeEventListener('click',renderData);
//     let changeaddbtn=document.getElementById("submit");
//        changeaddbtn.value='Edit Student';
//        addButton.addEventListener('click',updatedata);
     
//     console.log("after adding new event listener updatedata")

//     function updatedata(event){
//         event.preventDefault()
    
//         console.log("inside  updatedata")
//         studentData[index].name=document.getElementById("name").value;
//         studentData[index].email=document.getElementById("email").value;
//         studentData[index].gpa=document.getElementById("gpa").value;
//         studentData[index].age=document.getElementById("age").value;
//         studentData[index].degree=document.getElementById("degree").value;

//      //  const addButton=document.getElementById("addButton");
//         addButton.removeEventListener('click',updatedata);
//         let btn=document.getElementById("submit");
//         btn.value='Add Student';
//         addButton.addEventListener('click',renderData);
//         console.log("showing update data");
//         form.reset();
//         displayData();
//     }
// }




// //filtered data
// const searchIcon = document.getElementById("search-bar");

// searchIcon.addEventListener("input", () => {
//     const val = searchIcon.value.toLowerCase();

//     const filteredData = studentData.filter(function (student) {
//         return (
//             student.name.toLowerCase().includes(val) ||
//             student.email.toLowerCase().includes(val) ||
//             student.degree.toLowerCase().includes(val)
//         );
//     });
//     displayData(filteredData);
// });