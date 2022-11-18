export function retrunLanguages(obj: {}): string {

    const objectValues = Object.values(obj);

    let data = '';
    objectValues.map((currency: any) => data += ` ${currency},`)

    return data.slice(0, data.length-1)
}