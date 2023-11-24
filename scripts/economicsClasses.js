export class BalanceObject {
    // "first" part
    propertyAssets = { name: "Anläggningstillgångar", value: 100 };
    revenueAssets = { name: "Omsättningstillgångar", value: 100 }; //Current Assets
    assetsSum = { name: "Summa av alla tillgångar", value: 0 };
    // "second" part
    ownCapital = { name: "Eget kapital", value: 1000 };
    longtermDebt = { name: "Långsiktiga skulder", value: -200 };
    shorttermDebt = { name: "Kortfristiga skulder", value: -100 };
    debtSum = { name: "Summa; skulder och kapital", value: 0 };
    
    rentabilityOwnSum = { name: "Rentabilitet på eget kapital", value: 0 };
    rentabilitySysselSum = { name: "Rentabilitet på sysselsatt kapital", value: 0 };
    soliditySum = { name: "Soliditet", value: 0 };
    
};

export class ResultObject {
    salesPayments = { name: "Försäljningsinbetalningar", value: 0 };
    customerFordrings = { name: "Kundfordringar", value: 0 };
    salesSum = { name: "Totala försäljningsintäkter", value: 0 };

    costSoldProducts = { name: "Kostnad sålda varor", value: 0 };
    grossSum = { name: "Bruttoresultat", value: 0 };

    writeOffs = { name: "Avskrivningar", value: 0 };
    interestFinancialIncome = { name: "Ränte- och finansiella intäkter", value: 0 };
    interestFinancialCosts = { name: "Ränte- och finansiella kostnader", value: 0 };
    taxCosts = { name: "Skattekostnader", value: 0 };
    yearSum = { name: "Årets resultat", value: 0 };

    investments = { name: "Investeringar", value: 0 };
    allotment = { name: "Utdelning till ägare", value: 0 };
    newIssue = { name: "Nyemission", value: 0 }; //Equity issuance
    newLoans = { name: "Nya banklån", value: 0 };
    amortization = { name: "Amorteringar" , value: 0};
};

export function generateNewBalanceObject(balanceObj, resultObj) {
    const retObject = new BalanceObject();

    //MIKAEL GÖR MATTE HÄR
    retObject.propertyAssets.value = balanceObj.propertyAssets.value + resultObj.writeOffs.value + resultObj.investments.value;
    retObject.revenueAssets.value = resultObj.customerFordrings.value + balanceObj.revenueAssets.value - resultObj.amortization.value; 

    retObject.ownCapital.value = balanceObj.ownCapital.value + resultObj.yearSum.value + resultObj.newIssue.value - resultObj.allotment.value;
    retObject.longtermDebt.value = balanceObj.longtermDebt.value + resultObj.newLoans.value - resultObj.amortization.value; 
    retObject.shorttermDebt.value = 0;

    retObject.rentabilityOwnSum.value = resultObj.yearSum.value / balanceObj.ownCapital.value;
    retObject.rentabilitySysselSum.value = resultObj.yearSum.value / balanceObj.revenueAssets.value;
    retObject.soliditySum.value = balanceObj.ownCapital.value / balanceObj.debtSum.value;

    return retObject;
}