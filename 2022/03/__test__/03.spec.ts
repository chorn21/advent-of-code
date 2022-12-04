import { partOne, partTwo } from '../03'

const INPUT = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe('partOne', () => {
    it('should return sum', () => {
        expect(partOne(INPUT)).toBe(157)
    })
})

describe('partTwo', () => {
    it('should return sum', () => {
        expect(partTwo(INPUT)).toBe(70)
    })
})
