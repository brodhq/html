# README

## Interfaces

- [HtmlPath](#htmlpath)

## Functions

### Html

▸ **Html**(`content?`, `selector?`, `config?`): [HtmlPath](#htmlpath)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content?` | `string` |
| `selector?` | `string` |
| `config?` | `Partial`<HtmlConfig\> |

#### Returns

[HtmlPath](#htmlpath)

# Interfaces

## Htmlpath

A HtmlPath represents a nested selection of
properties inside a HTML document

## Hierarchy

- `Iterable`<[HtmlPath](#htmlpath)\>

  ↳ **HtmlPath**

## Properties

### get

• **get**: (`selector`: `string`) => [HtmlPath](#htmlpath)

Extract a nested html value

**`param`** A valid css selector string

**`example`**
```typescript
const html = Html("<html><h1>some title</h1></html>").get('h1').toString()
// => 'some title'
```

#### Type declaration

▸ (`selector`): [HtmlPath](#htmlpath)

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

##### Returns

[HtmlPath](#htmlpath)

___

### toArray

• **toArray**: () => [HtmlPath](#htmlpath)[]

#### Type declaration

▸ (): [HtmlPath](#htmlpath)[]

##### Returns

[HtmlPath](#htmlpath)[]

___

### toBoolean

• **toBoolean**: () => ``null`` \| `boolean` \| `Error`

Return boolean value

**`example`**
```typescript
const html = Html("<html><span>true</span></html>", 'span').toBoolean()
// => true
```

#### Type declaration

▸ (): ``null`` \| `boolean` \| `Error`

##### Returns

``null`` \| `boolean` \| `Error`

___

### toFile

• **toFile**: () => ``null`` \| `Error` \| `PendingFile`

#### Type declaration

▸ (): ``null`` \| `Error` \| `PendingFile`

##### Returns

``null`` \| `Error` \| `PendingFile`

___

### toImage

• **toImage**: () => ``null`` \| `Error` \| `PendingFile`

#### Type declaration

▸ (): ``null`` \| `Error` \| `PendingFile`

##### Returns

``null`` \| `Error` \| `PendingFile`

___

### toInteger

• **toInteger**: () => ``null`` \| `number` \| `Error`

Return string value

**`example`**
```typescript
const html = Html("<html><span>5</span></html>", 'span').toInteger()
// => 5
```

#### Type declaration

▸ (): ``null`` \| `number` \| `Error`

##### Returns

``null`` \| `number` \| `Error`

___

### toLink

• **toLink**: () => ``null`` \| `Error` \| `LinkType`

Return a link

**`example`**
```typescript
const html = Html("<html><a href="http://example.com">my link</a></html>", 'a').toLink()
// => { name: 'my link', href: 'http://example.com' }
```

#### Type declaration

▸ (): ``null`` \| `Error` \| `LinkType`

##### Returns

``null`` \| `Error` \| `LinkType`

___

### toRaw

• **toRaw**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

___

### toString

• **toString**: () => ``null`` \| `string`

Return string value

**`example`**
```typescript
const html = Html("<html><h1>some title</h1></html>", 'h1').toString()
// => 'some title'
```

#### Type declaration

▸ (): ``null`` \| `string`

##### Returns

``null`` \| `string`

___

### valueOf

• **valueOf**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `Iterator`<[HtmlPath](#htmlpath), any, undefined\>

#### Returns

`Iterator`<[HtmlPath](#htmlpath), any, undefined\>

#### Inherited from

Iterable.\_\_@iterator
