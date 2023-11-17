export class EconomyObject {
    // "first" part
    propertyAssets = { name: "Anläggningstillgångar", value: 100 };
    revenueAssets = { name: "Omsättningstillgångar", value: 100 };
    assetsSum = { name: "Summa av alla tillgångar", value: 0 };
    // "second" part
    ownCapital = { name: "Eget kapital", value: 1000 };
    longtermDebt = { name: "Långsiktiga skulder", value: -200 };
    shorttermDebt = { name: "Kortfristiga skulder", value: -100 };
    debtSum = { name: "Summa; skulder och kapital", value: 0 };
}