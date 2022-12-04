const PRIORITIES = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
}

export function partOne(data: string) {
    const rucksacks = data.split('\n')

    let prioritySum = 0
    rucksacks.forEach(sack => {
        const compartmentA = sack.substring(0, sack.length/2)
        const compartmentB = sack.substring(sack.length/2)

        let match = null, idx = 0
        while (idx < compartmentA.length) {
            const char = compartmentA.charAt(idx)
            if (compartmentB.includes(char)) {
                match = char
                break
            }
            idx++
        }

        if (match) {
            prioritySum += PRIORITIES[match as keyof typeof PRIORITIES]
        }
    })

    return prioritySum
}

export function partTwo(data: string) {
    const rucksacks = data.split('\n')

    let prioritySum = 0
    for (let i=0; i<rucksacks.length; i+=3) {
        const [sackA, sackB, sackC] = rucksacks.slice(i, i+3)

        let match = null, idx = 0
        while (idx < sackA.length) {
            const char = sackA.charAt(idx)
            if (sackB.includes(char) && sackC.includes(char)) {
                match = char
                break
            }
            idx++
        }

        if (match) {
            prioritySum += PRIORITIES[match as keyof typeof PRIORITIES]
        }
    }

    return prioritySum
}

export function runDayThree(data: string) {
    console.log(`Part #1 Answer: ${partOne(data)}`)
    console.log(`Part #2 Answer: ${partTwo(data)}`)
}
