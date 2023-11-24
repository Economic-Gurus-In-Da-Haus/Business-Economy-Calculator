import { BalanceObject, ResultObject, generateNewBalanceObject } from "../scripts/economicsClasses.js"

const allYears = [];

allYears.push(new BalanceObject());

//const testYear = JSON.parse(localStorage.getItem("tempBalance")) || new BalanceObject();
const testResult = new ResultObject();

function reloadBalance() {
    const parentElement = document.querySelector("section#balances");
    parentElement.innerHTML = "";

    allYears.forEach((obj, index) => {
        const sectionElement = document.createElement("section");
        parentElement.append(sectionElement);
        sectionElement.innerHTML = "<h1>Balansräkning år " + index + "</h1>";

        // Assets total/sum = property assets + revenue assets
        obj.assetsSum.value =
            obj.propertyAssets.value
            + obj.revenueAssets.value;

        // Debt total/sum = own capital + long term debt + short term debt
        obj.debtSum.value =
            obj.ownCapital.value
            + obj.longtermDebt.value
            + obj.shorttermDebt.value;

        Object.entries(obj).forEach(entry => {
            const [key, value] = entry;

            const inputElement = document.createElement("input");
            const labelElement = document.createElement("label");
            sectionElement.append(inputElement);
            sectionElement.append(labelElement);

            inputElement.setAttribute("name", key);
            inputElement.setAttribute("type", "number");
            inputElement.setAttribute("value", value.value);

            if (key.includes("Sum") || allYears.length > 1) {
                inputElement.setAttribute("disabled", "");
                labelElement.classList.add("disabled");
            } else {
                inputElement.addEventListener("change", (event) => {
                    obj[event.target.name].value = Number(event.target.value);
                    reloadBalance();
                });
            }

            labelElement.innerText = value.name;
        });

        //localStorage.setItem("tempBalance", JSON.stringify(obj));
    });
}

function reloadResult() {
    const sectionElement = document.querySelector("section#result");
    sectionElement.innerHTML = "<h1>Resultaträkning år 1</h1>";

    testResult.salesSum.value =
        testResult.salesPayments.value
        + testResult.customerFordrings.value;

    testResult.grossSum.value =
        testResult.salesSum.value
        + testResult.costSoldProducts.value;

    testResult.yearSum.value =
        testResult.grossSum.value
        + testResult.writeOffs.value
        + testResult.interestFinancialIncome.value
        + testResult.interestFinancialCosts.value
        + testResult.taxCosts.value

    Object.entries(testResult).forEach(entry => {
        const [key, value] = entry;

        if (key == "investments") {
            const h2El = document.createElement("h2");
            h2El.innerText = "Ekonomiska händelser";
            sectionElement.append(h2El);
        }

        const inputElement = document.createElement("input");
        const labelElement = document.createElement("label");
        sectionElement.append(inputElement);
        sectionElement.append(labelElement);

        inputElement.setAttribute("id", key);
        inputElement.setAttribute("name", key);
        inputElement.setAttribute("type", "number");
        inputElement.setAttribute("value", value.value);

        if (key.includes("Sum")) {
            inputElement.setAttribute("disabled", "");
            labelElement.classList.add("disabled");
        } else {
            inputElement.addEventListener("change", (event) => {
                testResult[event.target.name].value = Number(event.target.value);
                reloadResult();
            });
        }

        labelElement.setAttribute("for", key);
        labelElement.innerText = value.name;
    });

    const buttonElement = document.createElement("button");
    sectionElement.append(buttonElement);
    buttonElement.innerText = "Klicka"
    buttonElement.onclick = () => {
        allYears.push(generateNewBalanceObject(allYears[allYears.length - 1], testResult));
        reloadBalance();
    };

    //localStorage.setItem("tempResult", JSON.stringify(testResult));
}

reloadBalance();
reloadResult();