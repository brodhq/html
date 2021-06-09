import { PendingFile } from '@geislabs/file'
import { LinkType } from './link/linkTypes'

/**
 * A HtmlPath represents a nested selection of
 * properties inside a HTML document
 */
export interface HtmlPath extends Iterable<HtmlPath> {
    /**
     * Extract a nested html value
     *
     * @param selector - A valid css selector string
     * @example
     * ```typescript
     * const html = Html('<html><h1>some title</h1></html>').get('h1').toString()
     * // => 'some title'
     * ```
     */
    get: (selector: string) => HtmlPath
    /**
     * Return string value
     * @example
     * ```typescript
     * const html = Html('<html><h1>some title</h1></html>', 'h1').toString()
     * // => 'some title'
     * ```
     */
    toString: () => string | null
    /**
     * Return string value
     * @example
     * ```typescript
     * const html = Html('<html><span>5</span></html>', 'span').toInteger()
     * // => 5
     * ```
     */
    toInteger: () => number | Error | null
    /**
     * Return boolean value
     * @example
     * ```typescript
     * const html = Html('<html><span>true</span></html>', 'span').toBoolean()
     * // => true
     * ```
     */
    toBoolean: () => boolean | Error | null
    /**
     * Return a link
     * @example
     * ```typescript
     * const html = Html('<html><a href="http://example.com">my link</a></html>', 'a').toLink()
     * // => { name: 'my link', href: 'http://example.com' }
     * ```
     */
    toLink: () => LinkType | Error | null
    toFile: () => PendingFile | Error | null
    toImage: () => PendingFile | Error | null
    toArray: () => HtmlPath[]
    toRaw: () => string
    valueOf: () => string
}
