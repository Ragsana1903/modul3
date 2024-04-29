let rubl = document.querySelector(".cedvel1");
let rubl1 = document.querySelector(".cedvel11");
let use = document.querySelector(".cedvel2");
let use1 = document.querySelector(".cedvel21");
let euro = document.querySelector(".cedvel3");
let euro1 = document.querySelector(".cedvel31");
let tl = document.querySelector(".cedvel4")
let tl1 = document.querySelector(".cedvel41");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let text11 = document.querySelector(".text11");
let text12 = document.querySelector(".text12");

let leftValue;
let rightValue;
let leftName = "RUB";
let rightName = "USD";


fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
    .then((res) => res.json())
    .then(a => {
        leftValue = a.data.USD / a.data.RUB
        rightValue = a.data.RUB / a.data.USD
        text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
        text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
    })

rubl.addEventListener("click", () => {
    rubl.style.backgroundColor = "#833cde"
    euro.style.backgroundColor = "white"
    tl.style.backgroundColor = "white"
    use.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "RUB";
            leftValue = a.data[rightValue] / a.data.RUB;
            rightValue = a.data.RUB / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        })
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * rightValue)
    })
})
use.addEventListener("click", () => {
    use.style.backgroundColor = "#833cde"
    rubl.style.backgroundColor = "white"
    euro.style.backgroundColor = "white"
    tl.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "USD";
            leftValue = a.data[rightName] / a.data.USD;
            rightValue = a.data.USD / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * rightValue)
    })
})

euro.addEventListener("click", (e) => {
    euro.style.backgroundColor = "#833cde"
    rubl.style.backgroundColor = "white"
    use.style.backgroundColor = "white"
    tl.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "EUR";
            leftValue = a.data[rightName] / a.data.EUR;
            rightValue = a.data.EUR / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * rightValue)
    })
})

tl.addEventListener("click", (e) => {
    tl.style.backgroundColor = "#833cde"
    rubl.style.backgroundColor = "white"
    use.style.backgroundColor = "white"
    euro.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            leftName = "TRY";
            leftValue = a.data[rightName] / a.data.TRY;
            rightValue = a.data.TRY / a.data[rightName];
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * rightValue)
    })
})

rubl1.addEventListener("click", (e) => {
    rubl1.style.backgroundColor = "#833cde"
    euro1.style.backgroundColor = "white"
    tl1.style.backgroundColor = "white"
    use1.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "RUB";
            leftValue = a.data.RUB / a.data[leftName];
            rightValue = a.data[leftName] / a.data.RUB;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * leftValue)
    })
})

use1.addEventListener("click", (e) => {
    use1.style.backgroundColor = "#833cde"
    rubl1.style.backgroundColor = "white"
    euro1.style.backgroundColor = "white"
    tl1.style.backgroundColor = "white"

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "USD";
            leftValue = a.data.USD / a.data[leftName];
            rightValue = a.data[leftName] / a.data.USD;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * rightValue)
    })
})

euro1.addEventListener("click", (e) => {
    euro1.style.backgroundColor = "#833cde"
    rubl1.style.backgroundColor = "white"
    use1.style.backgroundColor = "white"
    tl1.style.backgroundColor = "white"
    
    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "EUR";
            leftValue = a.data.EUR / a.data[leftName];
            rightValue = a.data[leftName] / a.data.USD;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        });
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * rightValue)
    })
})

tl1.addEventListener("click", (e) => {
    tl1.style.backgroundColor = "#833cde";
    rubl1.style.backgroundColor = "white";
    use1.style.backgroundColor = "white";
    euro1.style.backgroundColor = "white";

    fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ePwYxikduilkO3NGz9uUPbfAgkr1ZuKDrBDgJZAt')
        .then((res) => res.json())
        .then(a => {
            rightName = "TRY";
            leftValue = a.data.TRY / a.data[leftName];
            rightValue = a.data[leftName] / a.data.USD;
            text11.innerText = `1 ${leftName} = ${leftValue} ${rightName}`
            text12.innerText = `1 ${rightName} = ${rightValue} ${leftName}`
        })
    input1.addEventListener("keyup", (e) => {
        input2.value = Math.round(e.target.value * leftValue)
    });

    input2.addEventListener("keyup", (e) => {
        input1.value = Math.round(e.target.value * rightValue)
    })
});


input1.addEventListener("keyup", (e) => {
    input2.value = Math.round(e.target.value * leftValue)
});

input2.addEventListener("keyup", (e) => {
    input1.value = Math.round(e.target.value * rightValue)
})