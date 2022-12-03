import { partOne, partTwo } from "../02"

const INPUT = `
A Y
B X
C Z
`

describe('part one', () => {
    it('should return a total score', () => {
        expect(partOne(INPUT)).toBe(15)
    })
})

describe('part two', () => {
    it('should return a total score', () => {
        expect(partTwo(INPUT)).toBe(12)
    })
})
