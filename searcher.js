const dataBase = ['XCH:Chia currency symbol', 'KYC:Know Your Costumer', 
    'GUI:Graphic User Interface of Chia', 'CLI:Command Line Interface of Chia', 
    'HDD:Hard Disk Drive', 'SSD:Solid State Drive', 'NFT:Non Fungible Token', 
    'RPC:Remote Procedure Call', 'BTC:Bitcoin', 'ETH:Ethereum']; 

const para = document.querySelector('#searchResult');
const input = document.querySelector('#searchInput');

input.oninput = () => {
    const searchItem = input.value.toLowerCase();
    para.textContent = '';
    for (const data of dataBase) {
        const splitData = data.split(':');
            if (splitData[0].toLowerCase() === searchItem) {
                para.textContent = splitData[0] + ' meaning is: ' +
                splitData[1] + '.';
                break;
            }
        }
        if (para.textContent === '') {
            para.textContent = `${input.value} not found.`; 
        }

};
