import { findMaxCalories, findSumTopThreeCalories } from '../01'

const INPUT = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`

describe('find max calories', () => {
    it('should return the sum of calories of the section of input with the highest sum', () => {
        expect(findMaxCalories(INPUT)).toBe(24000)
    })
})

describe('find sum of top three calories', () => {
    it('should return the sum of the top three highest calorie counts', () => {
        expect(findSumTopThreeCalories(INPUT)).toBe(45000)
    })
})
