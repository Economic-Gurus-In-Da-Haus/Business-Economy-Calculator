export class EonomyObject {
    // "first" part
    propertyAssets = { value: 100, name: "Anläggningstillgångar" };
    revenueAssets = { name: "Omsättningstillgångar", value: 100 };
    assetsTotal = { name: "summa-tillgångar", value: 0 };
    // "second" part
    ownCapital = { name: "eget-kapital", value: 1000 };
    longtermDebt = { name: "långsiktiga-skulder", value: -200 };
    shorttermDebt = { name: "kortfristiga-skulder", value: -100 };
    debtSum = { name: "summa-skulder-kapital", value: 0 };
}