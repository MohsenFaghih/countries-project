export function retrunCurrencies (obj: {}): string {
    const objectValues = Object.values(obj);

    let data = '';
    objectValues.map((currency: any) => data += ` ${currency.name},`)

    return data.slice(0, data.length-1)
}