import { FetchAdapter } from '@geislabs/fetch'
import { Html, HtmlPath } from '@geislabs/html-type'

export const createFetch = (): FetchAdapter<'html', HtmlPath> => ({
    name: 'html',
    encode: (value) => value.valueOf(),
    decode: (value) => Html(value),
})
