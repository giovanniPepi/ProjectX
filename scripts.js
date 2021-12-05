const dado = document.getElementById('textRico');
const para = document.getElementById('calcRico');

function preço (num) {
    return num * num;
}

dado.onchange = function () {
    const num = parseFloat(dado.value);

    if (isNaN(num)) {
        para.textContent = 'Please type a number!';
    } else switch (true) {
                case num < 0:
                    para.textContent = 'So you have debts in XCH? Woah';
                    break;
                case num === 0:
                    para.textContent = 'Go on get some XCH!';
                    break;
                case num <= 5:
                    para.textContent = 'Sorry man no lambo for u :(';
                    break;
                case num <= 100:
                    para.textContent = 'AUDI is a cheaper versions of Lambo...';
                    break;
                case num <= 1000:
                    para.textContent = 'GOING FOR THAT LAMBO!';
                    break;
                case num <= 10000:
                    para.textContent = 'SPARE SOME LAMBO FOR US!';
                    break;
                case num >10000:
                    para.textContent = 'Welcome back, Chia.Network owner!';
                    break;

                default:
                    para.textContent = 'Bro WTF you typed?';
            }
    }