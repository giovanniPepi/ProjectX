const select = document.querySelector('select'); 
const content = document.getElementById('content');
const contentlower = document.getElementById('contentlower');
const body = document.querySelector('body');
const header = document.getElementById('header');

function update(bgColorContentLower, bgColorContent, textColor, headerColor){
    contentlower.style.backgroundColor = bgColorContentLower;
    content.style.backgroundColor = bgColorContent;
    body.style.color = textColor;
    header.style.backgroundColor = headerColor;
    
}

select.onchange = function () {
    const choice = select.value;

    switch (choice) {
        case 'dark':
            update ('black', 'black', 'white', '#3AAC59' );
            break;
        case 'light':
            update('white', 'white', 'black', '#3AAC59');
            break;
        case 'bitcoin':
            update('white', '#F7931A', '#4D5060', '#13161f');
            break;
        case 'hacker':
            update('black', 'black', '#00ff2b', 'black');
            break;

        }
}