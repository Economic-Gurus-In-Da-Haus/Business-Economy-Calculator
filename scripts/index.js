import { EconomyObject } from "../scripts/economicsClasses.js"

const testYear = new EconomyObject();

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

    Object.entries(testYear).forEach(entry => {
        const [key, value] = entry;

        const inputElement = document.createElement("input");
        const labelElement = document.createElement("label");
        sectionElement.append(inputElement);
        sectionElement.append(labelElement);


        inputElement.setAttribute("name", key);
        inputElement.setAttribute("type", "number");
        inputElement.setAttribute("value", value.value);

        if (key.includes("Sum")) {
            inputElement.setAttribute("disabled", "");
        } else {
            inputElement.addEventListener("change", (event) => {
                testYear[event.target.name].value = Number(event.target.value);
                reload();
            });
        }

        labelElement.innerText = value.name;
    });
}

reload();