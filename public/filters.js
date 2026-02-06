const buttons = document.querySelectorAll('.filterbtns button');
const items = document.querySelectorAll('.item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active'); 
            const category = button.getAttribute('data-category');
                items.forEach(item => {
                    if (category === 'All' || item.getAttribute('data-category') === category) {
                        item.classList.remove('hidden'); 
                    } else {
                        item.classList.add('hidden');
                    }
                });
    });
});

function changeBorder() {
    const bah = [document.getElementById('waycomp'), document.getElementById('gath'), document.getElementById('scatch'), document.getElementById('seat'), 
        document.getElementById('dmas'), document.getElementById('smast'), document.getElementById('gsong'), document.getElementById('fgreed'), document.getElementById('sshell'), 
        document.getElementById('fheart'), document.getElementById('sstone'), document.getElementById('geleg'), document.getElementById('fstreng'), document.getElementById('stwist'), 
        document.getElementById('sbod'), document.getElementById('hblow'), document.getElementById('qslash'), document.getElementById('lnail'), document.getElementById('mpride'), 
        document.getElementById('ffallen'), document.getElementById('tagony'), document.getElementById('bshell'), document.getElementById('fnest'), document.getElementById('dcrest'), 
        document.getElementById('gwom'), document.getElementById('qfoc'), document.getElementById('dfoc'), document.getElementById('lheart'), document.getElementById('lcore'), 
        document.getElementById('jbless')]; 
    let hash = document.getElementById(location.hash.substring(1));
    for (let i = 0; i < bah.length; i++) {
        if (bah[i] !== hash) {
            bah[i].style.border = 'none';
        } else {
            bah[i].style.border = '5px solid #e2a9f1';
        }
    } 
}

