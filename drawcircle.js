const btn = document.querySelector('button');
const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');
const WDT = document.documentElement.clientWidth;
const HGT = document.documentElement.clientHeight;

canv.width = WDT;
canv.heigh = HGT; 

rnd = (numb) => Math.floor(Math.random()*numb);

drawCircle = () => {
    ctx.clearRect(0,0,WDT,HGT); 
    for (let i=0; i<100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(0,150,0,0.5)';
        ctx.arc(rnd(WDT), rnd(HGT), rnd(80), 0, 2* Math.PI);
        ctx.fill();
    }
}

btn.addEventListener('click', drawCircle);

