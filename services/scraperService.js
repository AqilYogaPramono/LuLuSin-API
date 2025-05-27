const puppeteer = require('puppeteer')

const URL = 'https://snbt.utbkcak.com/'

async function countdown() {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
    const page = await browser.newPage()
    
    await page.setUserAgent( 'Mozilla/5.0 (Windows NT 10.0 Win64 x64) ' + 'AppleWebKit/537.36 (KHTML, like Gecko) ' + 'Chrome/113.0.0.0 Safari/537.36' )
    await page.goto(URL, { waitUntil: 'networkidle0' })
    await page.waitForSelector('.countdown-items .ctw-label')
    
    const title = await page.$eval( 'h1.elementor-heading-title', el => el.innerText.trim() )

    const days = await page.$$eval('.countdown-items', items => {
        for (const it of items) {
            const label = it.querySelector('.ctw-label')?.innerText.trim().toLowerCase()
            if (label === 'hari') {
                const digit = it.querySelector('.ctw-digits')?.innerText.trim()
                return parseInt(digit.replace(/\D/g, ''), 10)
            }
        }
        return null
    })
    
    await browser.close()
    return { title, days: isNaN(days) ? null : days }
}

module.exports = { countdown }
