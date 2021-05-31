import { config } from '@geislabs/fetch'
import { createFetch } from '../lib'

describe('provider', () => {
    test('decode', async () => {
        const myFetch = config(async () => ({
            body: `<html>hello</html>`,
        }))
        const fetch = myFetch([createFetch()])
        const actual = await fetch('html://google.com')
        expect(actual.data.toString()).toBe(`hello`)
    })
})
