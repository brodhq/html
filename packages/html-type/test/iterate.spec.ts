import { Html } from '../lib'

describe('iterate', () => {
    test('simple', () => {
        expect(
            [
                ...Html(
                    `<html>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </html>`
                ).get('ul > li'),
            ].map((path) => path.toInteger())
        ).toStrictEqual([1, 2, 3])
    })
    test('empty', () => {
        expect(
            [...Html(`<html></html>`, '.value').get('ul > li')].map((path) =>
                path.toInteger()
            )
        ).toStrictEqual([])
    })
})
