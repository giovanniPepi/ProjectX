const xchNumber = document.getElementById('textRico');
const para1 = document.getElementById('calcRico');
const para2 = document.getElementById('xchN')
const para3 = document.getElementById('xchDollarCalc');
const xchUSD = document.getElementById('xchUSD');

xchNumber.onchange = function () {
    const num = parseFloat(xchNumber.value);
    if (isNaN(num)) {
        para1.textContent = 'Please type a number!';
    } else switch (true) {
                case num < 0:
                    para1.textContent = `${num} XCH? So you have debts in XCH? Woah`;
                    break;
                case num === 0:
                    para1.textContent = `${num} XCH `+ 'go on get some XCH!';
                    break;
                case num <= 5:
                    para1.textContent = `${num} XCH - ` + 'Sorry man no lambo for u :(';
                    break;
                case num <= 100:
                    para1.textContent = `${num} XCH - ` + 'AUDI is a cheaper version of Lambo...';
                    break;
                case num <= 1000:
                    para1.textContent = `${num} XCH - ` +  'GOING FOR THAT LAMBO!';
                    break;
                case num <= 10000:
                    para1.textContent = `${num} XCH - ` +  'SPARE SOME LAMBO FOR US!';
                    break;
                case num >10000:
                    para1.textContent = `${num} XCH - ` +  'Welcome back, Chia.Network owner!';
                    break;

                default:
                    para1.textContent = 'Bro WTF you typed?';
            }
        xchDollarify(num);
    }
