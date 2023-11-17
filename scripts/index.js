import { EconomyObject } from "../scripts/economicsClasses.js"

const testYear = new EconomyObject();
console.log(testYear);

function reload() {
    const sectionElement = document.querySelector("section");
    sectionElement.innerHTML = "<h1>Balansräkning</h1>";

    // Assets total/sum = property assets + revenue assets
    testYear.assetsSum.value =
        testYear.propertyAssets.value
        + testYear.revenueAssets.value;

    // Debt total/sum = own capital + long term debt + short term debt
    testYear.debtSum.value =
        testYear.ownCapital.value
        + testYear.longtermDebt.value
        + testYear.shorttermDebt.value;


    for (const key in testYear) {
        const inputEl = document.createElement("input");
        const labelEl = document.createElement("label");
        sectionElement.append(inputEl);
        sectionElement.append(labelEl);

        inputEl.setAttribute("name", key);
        inputEl.setAttribute("type", "number");
        inputEl.setAttribute("value", testYear[key].value);
        if (key.includes("Sum")) {
            inputEl.setAttribute("disabled", "");
        } else {
            inputEl.addEventListener("change", (event) => {
                testYear[event.target.name].value = Number(event.target.value);
                reload();
            });
        }

        labelEl.innerText = testYear[key].name;
    }
}

reload();