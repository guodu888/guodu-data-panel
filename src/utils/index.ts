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
