



function taxCalC(name,salary){
    name = document.getElementById("name").value;
    salary =document.getElementById("salary").value;

    if(salary<=300000){
        document.getElementById("ded1").value = "0";
        document.getElementById("ded2").value = "0";
        document.getElementById("totalDed").value = "0";
        document.getElementById("result").value = `${name}! you are tax free.. `
    }
    else if(salary < 600000){
        ded1 = 0;
        ded2 = (salary-300000)*0.1;
        totaldeduction = ded1+ded2;
        document.getElementById("ded1").value = ded1;
        document.getElementById("ded2").value = ded2;
        document.getElementById("totalDed").value = totaldeduction;
        document.getElementById("result").value = `${name}! Your tax amount : ${totaldeduction}`;
    }
    else if(salary > 600000){
        ded1 = 30000;
        ded2 = (salary-600000)*0.2;
        totaldeduction = ded1+ded2;
        document.getElementById("ded1").value = ded1;
        document.getElementById("ded2").value = ded2;
        document.getElementById("totalDed").value = totaldeduction;
        document.getElementById("result").value = `${name}! Your tax amount : ${totaldeduction}`;
    }
}