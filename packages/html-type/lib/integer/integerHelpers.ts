import { Cheerio, Node } from 'cheerio'

export function toInteger(node: Cheerio<Node>): number | Error | null {
    if (node.length === 0) {
        return null
    }
    const value = node.text()
    const number = Number(value)
    if (isNaN(number)) {
        return new Error('Not an integer')
    }
    return number
}
