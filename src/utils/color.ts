// source: https://github.com/jiaming743/Color

export const ColorKeywords = {
  transparent: 'rgba(0,0,0,0)',
  black: '#000000',
  silver: '#C0C0C0',
  gray: '#808080',
  white: '#FFFFFF',
  maroon: '#800000',
  red: '#FF0000',
  purple: '#800080',
  fuchsia: '#FF00FF',
  green: '#008000',
  lime: '#00FF00',
  olive: '#808000',
  yellow: '#FFFF00',
  navy: '#000080',
  blue: '#0000FF',
  teal: '#008080',
  aqua: '#00FFFF',
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  blanchedalmond: '#ffebcd',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  oldlace: '#fdf5e6',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  whitesmoke: '#f5f5f5',
  yellowgreen: '#9acd32',
}

export type RgbValue = [number, number, number]

export type RgbaValue = [number, number, number, number]

/**
 * @description Test if a hex color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isHex(color: string): boolean {
  if (typeof color !== 'string')
    return false
  color = color.toLowerCase()

  return /^#(?:[0-9A-F]{3}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color)
}

/**
 * @description Test if a rgb color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isRgb(color: string): boolean {
  if (typeof color !== 'string')
    return false
  color = color.toLowerCase()

  return /^(?:rgb\(|RGB\()/.test(color)
}

/**
 * @description Test if a rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isRgba(color: string): boolean {
  if (typeof color !== 'string')
    return false
  color = color.toLowerCase()

  return /^(?:rgba|RGBA)/.test(color)
}

/**
 * @description Test if a rgb or rgba color
 * @param {string} color color string
 * @return {boolean} Test result
 */
export function isRgbOrRgba(color: string): boolean {
  return /^(?:rgb|RGB)/.test(color)
}

/**
 * @description Get color by keyword
 * @param {keyof typeof ColorKeywords} keyword Color keyword like red, green and etc.
 * @return {ColorKeywords} Hex or rgba color
 */
function getColorByKeyword(keyword: keyof typeof ColorKeywords): string {
  return ColorKeywords[keyword]
}

/**
 * @description Color validator
 * @param {string} color Hex|Rgb|Rgba color or color keywords
 * @return {string} Color (Invalid input will throw an error)
 */
function validator(color: string): string {
  if (isHex(color) || isRgbOrRgba(color))
    return color

  const keywordColor = getColorByKeyword(color as keyof typeof ColorKeywords)
  if (!keywordColor)
    throw new Error(`Color: Invalid Input of ${color}`)

  return keywordColor
}

/**
 * @description Get the rgb value of the hex color
 * @param {string} color Hex color
 * @return {RgbValue} Rgb value of the color
 */
function getRgbValueFromHex(color: string): RgbValue {
  color = color.replace('#', '')

  if (color.length === 3) {
    color = Array.from(color)
      .map(hexNum => hexNum + hexNum)
      .join('')
  }

  const colorValues = color.split('')

  return Array.from({ length: 3 })
    .fill(0)
    .map((_, i) => Number.parseInt(`0x${colorValues[i * 2]}${colorValues[i * 2 + 1]}`)) as RgbValue
}

/**
 * @description Get the rgb value of the rgb/rgba color
 * @param {string} color Hex color
 * @return {RgbValue} Rgb value of the color
 */
function getRgbValueFromRgb(color: string): RgbValue {
  return color
    .replace(/rgb\(|rgba\(|\)/g, '')
    .split(',')
    .slice(0, 3)
    .map(n => Number.parseInt(n)) as RgbValue
}

/**
 * @description Get the Rgb value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbValue} Rgb value of the color
 */
export function getRgbValue(color: string): RgbValue {
  const validColor = validator(color)

  const lowerColor = validColor.toLowerCase()

  return isHex(lowerColor) ? getRgbValueFromHex(lowerColor) : getRgbValueFromRgb(lowerColor)
}

/**
 * @description Get the opacity of color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {number} Color opacity
 */
export function getOpacity(color: string): number {
  const validColor = validator(color)

  if (!isRgba(validColor))
    return 1

  return Number(
    validColor
      .toLowerCase()
      .split(',')
      .slice(-1)[0]
      .replace(/[)|\s]/g, ''),
  )
}

/**
 * @description Get the Rgba value of the color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {RgbaValue} Rgba value of the color
 */
export function getRgbaValue(color: string): RgbaValue {
  const rgbValue = getRgbValue(color)

  return rgbValue && ([...rgbValue, getOpacity(color)] as RgbaValue)
}

/**
 * @description Convert color to Rgb|Rgba color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} opacity The opacity of color
 * @return {string} Rgb|Rgba color
 */
export function toRgb(color: string, opacity?: number): string {
  const rgbValue = getRgbValue(color)

  return typeof opacity === 'number'
    ? `rgba(${rgbValue.join(',')},${opacity})`
    : `rgb(${rgbValue.join(',')})`
}

/**
 * @description Convert color to Hex color
 * @param {string} color Hex|Rgb|Rgba color or color keyword
 * @return {string} Hex color
 */
export function toHex(color: string): string {
  if (isHex(color))
    return color

  const colorValue = getRgbValue(color)

  const format10To16 = (_: number): string => Number(_).toString(16).padStart(2, '0')

  return `#${colorValue.map(format10To16).join('')}`
}

/**
 * @description Get Color from Rgb|Rgba value
 * @param {RgbValue|RgbaValue} value Rgb|Rgba color value
 * @return {string} Rgb|Rgba color
 */
export function getColorFromRgbValue(value: RgbValue | RgbaValue): string {
  if (!Array.isArray(value))
    throw new Error(`getColorFromRgbValue: ${value} is not an array`)

  const { length } = value
  if (length !== 3 && length !== 4)
    throw new Error(`getColorFromRgbValue: value length should be 3 or 4`)

  return `${(length === 3 ? 'rgb(' : 'rgba(') + value.join(',')})`
}

/**
 * @description Deepen color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of Deepen (1-100)
 * @return {string} Rgba color
 */
export function darken(color: string, percent = 0): string {
  let rgbaValue = getRgbaValue(color)

  rgbaValue = rgbaValue
    .map((v, i) => (i === 3 ? v : v - Math.ceil(2.55 * percent)))
    .map(v => (v < 0 ? 0 : v)) as RgbaValue

  return getColorFromRgbValue(rgbaValue)
}

/**
 * @description Brighten color
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of brighten (1-100)
 * @return {string} Rgba color
 */
export function lighten(color: string, percent = 0): string {
  let rgbaValue = getRgbaValue(color)

  rgbaValue = rgbaValue
    .map((v, i) => (i === 3 ? v : v + Math.ceil(2.55 * percent)))
    .map(v => (v > 255 ? 255 : v)) as RgbaValue

  return getColorFromRgbValue(rgbaValue)
}

/**
 * @description Adjust color opacity
 * @param {string} color   Hex|Rgb|Rgba color or color keyword
 * @param {number} percent of opacity
 * @return {string} Rgba color
 */
export function fade(color: string, percent = 100): string {
  const rgbValue = getRgbValue(color)

  return getColorFromRgbValue([...rgbValue, percent / 100] as RgbaValue)
}
