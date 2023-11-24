import { BalanceObject, ResultObject } from "../scripts/economicsClasses.js"

const allYears = [];

allYears.push(new BalanceObject());
allYears.push(new ResultObject());

function reloadPage() {
    allYears.forEach(year => {
        if (Object.getPrototypeOf(year) == BalanceObject.prototype) {
            console.log("test");
        } else {
            console.log("test2");
        }
    });
}

reloadPage();

const testYear = new BalanceObject();
const testResult = new ResultObject();

function reloadBalance() {
    const sectionElement = document.querySelector("section#balance");
    sectionElement.innerHTML = "<h1>Balansräkning år 0</h1>";

    // Assets total/sum = property assets + revenue assets
    testYear.assetsSum.value =
        testYear.propertyAssets.value
        + testYear.revenueAssets.value;

    // Debt total/sum = own capital + long term debt + short term debt
    testYear.debtSum.value =
        testYear.ownCapital.value
        + testYear.longtermDebt.value
        + testYear.shorttermDebt.value;

    Object.entries(testYear).forEach(entry => {
        const [key, value] = entry;

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
                testYear[event.target.name].value = Number(event.target.value);
                reloadBalance();
            });
        }

        labelElement.setAttribute("for", key);
        labelElement.innerText = value.name;
    });

    localStorage.setItem("tempBalance", JSON.stringify(testYear));
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
    localStorage.setItem("tempResult", JSON.stringify(testResult));
}

reloadBalance();
reloadResult();