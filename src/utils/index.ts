export interface Point {
  x: number
  y: number
}

export function getPolylineLength(points: Array<Point>) {
  const lineSegments = Array.from({ length: points.length - 1 }).fill(0).map((foo, i) => {
    return [points[i], points[i + 1]]
  })
  const lengths = lineSegments.map((item) => {
    return getTwoPointDistance(item[0], item[1])
  })
  return mulAdd(lengths)
}

function getTwoPointDistance(pointOne: Point, pointTwo: Point) {
  const minusX = Math.abs(pointOne.x - pointTwo.x)
  const minusY = Math.abs(pointOne.y - pointTwo.y)
  return Math.sqrt(minusX * minusX + minusY * minusY)
}

function mulAdd(nums: Array<number>) {
  nums = filterNonNumber(nums)
  return nums.reduce((all, num) => {
    return all + num
  }, 0)
}

function filterNonNumber(array: Array<number>) {
  return array.filter((n) => {
    return typeof n === 'number'
  })
}

export function pointsToString(points: Array<Point>) {
  return points.map(pointToString).join(' ')
}

function pointToString(point: Point) {
  return `${point.x},${point.y}`
}

export function randomExtend(minNum: number, maxNum: number) {
  if (arguments.length === 1)
    return Number.parseInt((Math.random() * minNum + 1).toString(), 10)

  else
    return Number.parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10)
}

/**
 * @description Get the coordinates of the specified radian on the circle
 * @param {number} x      Circle x coordinate
 * @param {number} y      Circle y coordinate
 * @param {number} radius Circle radius
 * @param {number} radian Specfied radian
 * @return {Array} Postion of point
 */

export function getCircleRadianPoint(x: number, y: number, radius: number, radian: number) {
  return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius]
}
