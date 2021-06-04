import { Cheerio, Node } from 'cheerio'
import { LinkType } from './linkTypes'

export function toLink(node: Cheerio<Node>) {
    if (node.length === 0) {
        return null
    }
    const href = node.attr('href')
    if (!href) {
        return new Error(`element is not a valid link`)
    }
    return { name: node.text(), href } as LinkType
}
