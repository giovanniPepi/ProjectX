const TeraByte = (1000 ** 4);
const TebiByte = (1024 ** 4);
const plotSizeTiB = (101.4 / 1024);
const plotSizeTB = (108.9 / 1000);
// source: https://github.com/Chia-Network/chia-blockchain/wiki/k-sizes //

const plotNumber = document.getElementById('plotNumber');
const writePlotSize = document.getElementById('plotSize');

plotNumber.onchange = function() {
    const num = parseFloat(plotNumber.value);
    if (isNaN(num)) {
        writePlotSize.textContent = "Please type a number!";
    } else {
        writePlotSize.textContent =`${num} plots, ${num * (plotSizeTB.toFixed(4))} Terabyte (TB), ${num * (plotSizeTiB.toFixed(4))} Tebibyte (TiB). Hint: Windows use TiB but tells you "TB". `;
    }
}

// need to create a function that converts the plotsize to 3 decimal places and return it to this function



