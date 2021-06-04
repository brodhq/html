import { Cheerio, Node } from 'cheerio'

export function toBoolean(node: Cheerio<Node>): boolean | Error | null {
    if (node.length === 0) {
        return null
    }
    const text = node.text().trim().toLowerCase()
    return { true: true, false: false }[text] ?? Error('not a boolean')
}
