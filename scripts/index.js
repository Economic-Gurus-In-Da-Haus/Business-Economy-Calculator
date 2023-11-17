let balance = {
    "anläggnings-tillgångar": { value: 100 },
    "omsättnings-tillgångar": { value: 100 },
    "summa-tillgångar": { value: 0 },
    "eget-kapital": { value: 1000 },
    "långsiktiga-skulder": { value: -200 },
    "kortfristiga-skulder": { value: -100 },
    "summa-skulder-kapital": { value: 0 },
};

let sectionEl = document.querySelector("section");

function reload() {
    sectionEl.innerHTML = "<h1>Balansräkning</h1>";
    
    balance["summa-tillgångar"].value = balance["anläggnings-tillgångar"].value + balance["omsättnings-tillgångar"].value;
    balance["summa-skulder-kapital"].value = balance["eget-kapital"].value + balance["långsiktiga-skulder"].value + balance["kortfristiga-skulder"].value;
    
    for (let key in balance) {
        let inputEl = document.createElement("input");
        let labelEl = document.createElement("label");
        sectionEl.append(inputEl);
        sectionEl.append(labelEl);

        inputEl.setAttribute("id", key);
        inputEl.setAttribute("type", "number");
        inputEl.setAttribute("value", balance[key].value);
        if (key.includes("summa")) {
            inputEl.setAttribute("disabled", "");
        } else {
            inputEl.addEventListener("change", (event) => {
                balance[event.target.id].value = Number(event.target.value);
                reload();
            });
        }

        labelEl.innerText = key;
    }
}

reload();