const next = document.querySelector('#next');
const prog = document.getElementById('prog');
let progState = 0;
let active = [];

next.addEventListener('click', () =>{
    if (active.length == 0) {
        const item = document.querySelector(`#s1`);
        item.classList.add('active');
        active.push(item);
    }
    else if(active.length > 3) {
        for (let index = 0; index < active.length; index++) {
            const item = active[index];
            progState = 0;
            item.classList.remove('active');
        }
        active = [];
    }
    else {
        const item = document.querySelector(`#s${active.length + 1}`);
        (progState < 60)? progState += 25 : progState = 70;
        setTimeout(() => {
            item.classList.add('active');
        }, 1000);
        active.push(item);
    }
    prog.style.width = progState + '%';
});
