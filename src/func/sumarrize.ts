
const striptags = require('striptags');

export function sumarrize(html: string, defaultDesc?: string): string {

    const metaDescription = (defaultDesc? defaultDesc : '') + striptags(html).replace(/\r?\n/g, '').trim();
    return metaDescription.length <= 120
    ? metaDescription
    : metaDescription.slice(0, 120) + '...';
}