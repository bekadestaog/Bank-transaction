let balance = 1000;

const balanceText = document.getElementById("balance");
const history = document.getElementById("history");

function updateBalance(){
    balanceText.innerHTML = balance.toFixed(2);
}

function deposit(){

    let amount = Number(document.getElementById("amount").value);

    if(amount <=0){
        alert("Enter a valid amount");
        return;
    }

    balance += amount;

    history.innerHTML += `<li style="color:green;">+ $${amount} Deposited</li>`;

    updateBalance();

    document.getElementById("amount").value="";
}

function withdraw(){

    let amount = Number(document.getElementById("amount").value);

    if(amount<=0){
        alert("Enter a valid amount");
        return;
    }

    if(amount>balance){
        alert("Insufficient Balance");
        return;
    }

    balance -= amount;

    history.innerHTML += `<li style="color:red;">- $${amount} Withdrawn</li>`;

    updateBalance();

    document.getElementById("amount").value="";
}

updateBalance();