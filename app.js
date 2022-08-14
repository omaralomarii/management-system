function employee(id,name,dep,level,img){
this.id=id;
this.fullname=name;
this.dep=dep;
this.level=level;
this.img=img;
this.salary=calc(level);

function calc(lev){
    switch(lev){
        case"junior":
        return Math.round(Math.random()*500 +500);
        break;
        case"mid senior":
        return Math.round(Math.random()*500+1000);
        break;
        case"senior":
        return Math.round(Math.random()*500+1500);
        break;

    }
}
this.fullname=name;

this.say =function(){
    return `Iam ${this.fullname} my salary is ${this.salary} `;
}



}





let employees = [
    
    new employee(1000,"ghazy samer","administration","senior"),
    new  employee(1001,"lana ali","finance","senior"),
    new  employee(1002,"tamara ayoub","markiting","senior"),
    new employee(1003,"safi waleed","administration","junior"),
    new  employee(1004,"omar zaid","develobment","senior"),
    new employee(1005,"rana saleh","develobment","senior"),
    new employee(1006,"hadi ahmad","finance","senior"),
    
];

for( let i=0;i<employees.length;i++){
    console.log(employees[i].say());
}


















