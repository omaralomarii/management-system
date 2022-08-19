function Employee(id,name,dep,level,img) {
    this.id=id;
    this.name=name;
    this.dep=dep;
    this.level=level;
    this.imgUrl=img;
    this.salary=calc();

    function calc() {
        switch(level) {
            case "Junior":
                return Math.round((Math.random()*500+500));
                break;
            case "Mid-Senior":
                return Math.round((Math.random()*500+1000));
                break;
            case "Senior":
                return Math.round((Math.random()*500+1500));
                break;
            default :
                return -1;
        }
            
    }

    this.print = function() {
        return `I'm ${this.name} my salary is ${this.salary}`;
    }

}



let employees=[];

let cards=document.getElementById("cards");

console.log(localStorage.getItem("employees"));
if(localStorage.getItem("employees")!=null) {
    employees = JSON.parse(localStorage.getItem("employees"));
    for(let i=0;i<employees.length ; i++) {
        addEmployee(employees[i]);
    }
}

let inputId= document.querySelector(`[name=id]`);
let inputName= document.querySelector(`[name=name]`);
let selectDepart= document.querySelector(`#depart`);
let selectLevel= document.querySelector(`#level`);
let imgUrl=document.querySelector(`[name=img]`);
let subButton=document.getElementById("subButton");

inputId.value=1000+employees.length;

subButton.addEventListener("click" , e => {
    if(inputName.value=="") {
        alert("Please Enter Employee Name");
    } 
    else {
        let isID=false;
        employees.forEach(el => {
            if(el.id==inputId.value) {
                isID=true;
            }
        });
        if(isID) {
            alert("ID already exist !");
        }
        else {
            let employee= new Employee(inputId.value , inputName.value , selectDepart.value , selectLevel.value , imgUrl.value);
            employees.push(employee);
            addEmployee(employee);
            localStorage.setItem("employees" , JSON.stringify(employees));
            location.reload();
}}
});

cards.style.cssText = "display:flex ; justify-content:space-around ; flex-wrap:wrap ; align-items: center"

function addEmployee(emp) {
    let card=document.createElement("div");
    card.style.cssText="border-radius:10px; margin: 10px; padding : 10px 20px ; background-color:#ddd ; width: 250px ; height: 400px ; )";

    let img = document.createElement("img");
    img.src=emp.imgUrl;
    img.style.cssText = "width :100% ; height: 65%;margin-bottom:10px ; border-radius:10%"

    let info= document.createElement("div");
    info.innerHTML=`Name : ${emp.name}  ID: ${emp.id} <br> Department: ${emp.dep}  Level: ${emp.level} <br>  ${emp.salary}$`;
    
    card.append(img);
    card.append(info);
    cards.append(card);
}

let remove= document.getElementById("clear");
let headCards=document.getElementById("headCards");

if(employees.length==0) {
    remove.style.display = "none";
    headCards.style.display = "none";
}

remove.onclick =function (){
    localStorage.clear();
    location.reload();
}


// let employees = [
    
//     new employee(1000,"ghazy samer","administration","senior"),
//     new  employee(1001,"lana ali","finance","senior"),
//     new  employee(1002,"tamara ayoub","markiting","senior"),
//     new employee(1003,"safi waleed","administration","junior"),
//     new  employee(1004,"omar zaid","develobment","senior"),
//     new employee(1005,"rana saleh","develobment","senior"),
//     new employee(1006,"hadi ahmad","finance","senior"),
    
// ];

// for( let i=0;i<employees.length;i++){
//     console.log(employees[i].say());
// }




// //\\\\\\\\\\\\\\\\\\\\



// let main = document.querySelector("main")

// const eTable = document.createElement('table');
// main.appendChild(eTable)

// const tHeader = document.createElement('thead');
// eTable.appendChild(tHeader);

// const firstData = document.createElement("th");
// tHeader.appendChild(firstData);
// firstData.textContent="ID"

// const secondData = document.createElement("th");
// tHeader.appendChild(secondData);
// secondData.textContent="FullName"

// const thirdData = document.createElement("th");
// tHeader.appendChild(thirdData);
// thirdData.textContent="Department"

// const fourthData = document.createElement("th");
// tHeader.appendChild(fourthData);
// fourthData.textContent="Level"

// const fifthData = document.createElement("th");
// tHeader.appendChild(fifthData);
// fifthData.textContent="Salary"

// //   Table header ends here

// const arr = ['id','fullname','dep','level','salary']

// for (let i = 0; i < employees.length ; i++) {

//     const employeeRow = document.createElement('tr');
//     eTable.appendChild(employeeRow);

//     for (let c = 0; c < arr.length; c++) {
//         const cell = document.createElement('td')
//         employeeRow.appendChild(cell)
//         cell.textContent= employees[i][arr[c]]
//     }

// }










