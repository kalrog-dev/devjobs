export type ZIndexType = {
  lower: number
  below: number
  reset: number
  above: number
  higher: number
}

const zIndex: ZIndexType = {
  lower: -2,
  below: -1,
  reset: 0,
  above: 1,
  higher: 2,
}

export default zIndex