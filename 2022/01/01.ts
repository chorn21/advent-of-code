import { readFile } from 'fs/promises'

const FILE_LOC = `${__dirname}/input.txt`

function getSums(data: string): number[] {
    return data.split('\n\n') // split sections of numbers
        .map(nums => nums.split('\n')) // split rows of numbers in each section
        .map(arr => arr.reduce((prevNum, num) => prevNum + Number(num), 0)) // compute sum of each section
}

/**
 * Finds and returns the maximum number of calories that an elf is carrying [Part #1]
 * @returns {Promise}
 */
export function findMaxCalories(data: string): number { // O(N) where N is the number of calorie counts
    try {
        const sums = getSums(data)
        return Math.max(...sums)
    } catch(err) {
        console.log(err)
        return -1
    }
}

/**
 * Finds and returns the sum of calories carried by the three elves carrying the most calories apiece
 * @returns {Promise}
 */
export function findSumTopThreeCalories(data: string): number { // O(N) where N is the number of calorie counts
    try {
        const sums = getSums(data)

        let max = 0, secondMax = 0, thirdMax = 0
        sums.forEach(sum => {
            if (sum > max) {
                thirdMax = secondMax
                secondMax = max
                max = sum
            } else if (sum > secondMax) {
                thirdMax = secondMax
                secondMax = sum
            } else if (sum > thirdMax) {
                thirdMax = sum
            }
        })

        return max + secondMax + thirdMax
    } catch(err) {
        console.log(err)
        return -1
    }
}

(async () => {
    const data = await (await readFile(FILE_LOC)).toString('utf-8')

    console.log(`Part #1 Answer: ${findMaxCalories(data)}`)
    console.log(`Part #2 Answer: ${findSumTopThreeCalories(data)}`)
})()
