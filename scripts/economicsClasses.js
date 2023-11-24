export class BalanceObject {
    // "first" part
    propertyAssets = { name: "Anläggningstillgångar", value: 100 };
    revenueAssets = { name: "Omsättningstillgångar", value: 100 };
    assetsSum = { name: "Summa av alla tillgångar", value: 0 };
    // "second" part
    ownCapital = { name: "Eget kapital", value: 1000 };
    longtermDebt = { name: "Långsiktiga skulder", value: -200 };
    shorttermDebt = { name: "Kortfristiga skulder", value: -100 };
    debtSum = { name: "Summa; skulder och kapital", value: 0 };
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
    newIssue = { name: "Nyemission", value: 0 };
    newLoans = { name: "Nya banklån", value: 0 };
};

export function generateNewBalanceObject(balanceObj, resultObj) {
        
}