import { readFile } from 'fs/promises'
import { runDayOne } from './2022/01/01'
import { runDayTwo } from './2022/02/02'

(async function() {
    const [,,day] = process.argv;

    const scrappyDirname = __dirname.substring(0, __dirname.indexOf('/dist'))
    const data = await (await readFile(`${scrappyDirname}/2022/${day}/input.txt`)).toString('utf-8')

    switch (day) {
        case '01':
            runDayOne(data)
            break
        case '02':
            runDayTwo(data)
            break
        default:
            console.log('Invalid day param')
    }
})()
