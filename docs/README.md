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

___

### createFetch

▸ `Const` **createFetch**(): `FetchAdapter`<``"html"``, [HtmlPath](#htmlpath)\>

#### Returns

`FetchAdapter`<``"html"``, [HtmlPath](#htmlpath)\>

# Interfaces

## Htmlpath

## Hierarchy

- `Iterable`<[HtmlPath](#htmlpath)\>

  ↳ **HtmlPath**

## Properties

### get

• **get**: (`selector`: `string`) => [HtmlPath](#htmlpath)

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

#### Type declaration

▸ (): ``null`` \| `number` \| `Error`

##### Returns

``null`` \| `number` \| `Error`

___

### toLink

• **toLink**: () => ``null`` \| `Error` \| `LinkType`

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
