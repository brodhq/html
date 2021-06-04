import { PendingFile } from '@geislabs/file'
import { LinkType } from './link/linkTypes'

export interface HtmlPath extends Iterable<HtmlPath> {
    toString: () => string | null
    toInteger: () => number | Error | null
    toBoolean: () => boolean | Error | null
    toLink: () => LinkType | Error | null
    toFile: () => PendingFile | Error | null
    toImage: () => PendingFile | Error | null
    get: (selector: string) => HtmlPath
    toArray: () => HtmlPath[]
    toRaw: () => string
    valueOf: () => string
}
