export function partOne(data: string) {
    const rounds = data.split('\n')

    function isTie(opponentMove: string, myMove: string) {
        return (opponentMove === 'A' && myMove === 'X') ||
            (opponentMove === 'B' && myMove === 'Y') ||
            (opponentMove === 'C' && myMove === 'Z')
    }

    function isWin(opponentMove: string, myMove: string) {
        return (opponentMove === 'A' && myMove === 'Y') ||
            (opponentMove === 'B' && myMove === 'Z') ||
            (opponentMove === 'C' && myMove === 'X')
    }
    function getExtraPoints(opponentMove: string, myMove: string): number {
        if (isWin(opponentMove, myMove)) {
            return 6
        } else if (isTie(opponentMove, myMove)) {
            return 3
        }

        return 0
    }

    function getMyPoints(myMove: string) {
        switch (myMove) {
            case 'X':
                return 1
            case 'Y':
                return 2
            case 'Z':
                return 3
            default:
                return 0
        }
    }

    let myTotalScore = 0
    rounds.filter(round => round.length > 0)
        .forEach(round => {
            const [opponentMove, myMove] = round.split(' ')
            myTotalScore += (getMyPoints(myMove) + getExtraPoints(opponentMove, myMove))
        })

    return myTotalScore
}

export function partTwo(data: string) {
    const rounds = data.split('\n')

    function shouldPlayRock(opponentMove: string, desiredOutcome: string) {
        return (opponentMove === 'A' && desiredOutcome === 'Y') ||
            (opponentMove === 'B' && desiredOutcome === 'X') ||
            (opponentMove === 'C' && desiredOutcome === 'Z')
    }

    function shouldPlayPaper(opponentMove: string, desiredOutcome: string) {
        return (opponentMove === 'A' && desiredOutcome === 'Z') ||
            (opponentMove === 'B' && desiredOutcome === 'Y') ||
            (opponentMove === 'C' && desiredOutcome === 'X')
    }

    function shouldPlayScissors(opponentMove: string, desiredOutcome: string) {
        return (opponentMove === 'A' && desiredOutcome === 'X') ||
            (opponentMove === 'B' && desiredOutcome === 'Z') ||
            (opponentMove === 'C' && desiredOutcome === 'Y')
    }

    function getMyPoints(opponentMove: string, desiredOutcome: string) {
        if (shouldPlayRock(opponentMove, desiredOutcome)) {
            return 1
        } else if (shouldPlayPaper(opponentMove, desiredOutcome)) {
            return 2
        } else if (shouldPlayScissors(opponentMove, desiredOutcome)) {
            return 3
        }
        return 0
    }

    function getExtraPoints(desiredOutcome: string) {
        switch (desiredOutcome) {
            case 'X':
                return 0
            case 'Y':
                return 3
            case 'Z':
                return 6
            default:
                return 0
        }
    }

    let myTotalScore = 0
    rounds.filter(round => round.length > 0)
        .forEach(round => {
            const [opponentMove, desiredOutcome] = round.split(' ')
            myTotalScore += (getMyPoints(opponentMove, desiredOutcome) + getExtraPoints(desiredOutcome))
        })

    return myTotalScore
}

export function runDayTwo(data: string) {
    console.log(`Part #1 Answer: ${partOne(data)}`)
    console.log(`Part #2 Answer: ${partTwo(data)}`)
}
