// For filters
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

// For index entry highlighting
function changeBorder() {
    const bah = [document.getElementById('waycomp'), document.getElementById('gath'), document.getElementById('scatch'), document.getElementById('seat'), 
        document.getElementById('dmas'), document.getElementById('smast'), document.getElementById('gsong'), document.getElementById('fgreed'), document.getElementById('sshell'), 
        document.getElementById('fheart'), document.getElementById('sstone'), document.getElementById('geleg'), document.getElementById('fstreng'), document.getElementById('stwist'), 
        document.getElementById('sbod'), document.getElementById('hblow'), document.getElementById('qslash'), document.getElementById('lnail'), document.getElementById('mpride'), 
        document.getElementById('ffallen'), document.getElementById('tagony'), document.getElementById('bshell'), document.getElementById('fnest'), document.getElementById('dcrest'), 
        document.getElementById('gwom'), document.getElementById('qfoc'), document.getElementById('dfoc'), document.getElementById('lheart'), document.getElementById('lcore'), 
        document.getElementById('jbless'), document.getElementById('hblood'), document.getElementById('sshroom'), document.getElementById('sshadow'), document.getElementById('sunn'),
        document.getElementById('nglory'), document.getElementById('wsong')]; 
    let hash = document.getElementById(location.hash.substring(1));
    for (let i = 0; i < bah.length; i++) {
        if (bah[i] !== hash) {
            bah[i].style.border = 'none';
        } else {
            bah[i].style.border = '5px solid #e2a9f1';
        }
    } 
}

// For accounts
let accountString = localStorage.getItem("accs")
if (!accountString) { listofacc = {} } 
else listofacc = JSON.parse(accountString)

const form = document.getElementById("dForm"); 

form.addEventListener("submit", function(e) { 
    e.preventDefault(); 

  
 if (confirm("Sure You Want To Save Your Work?")) { 
        const data = new FormData(form);

        const obj = Object.fromEntries(data.entries()); 

        listofacc[obj.uname] = {};
        for (let key in obj) { 
            if (key != "uname") { 
                listofacc[obj.uname][key] = obj[key];
            }
        }
        
        console.log(listofacc) 
        accountString = JSON.stringify(listofacc) 
        localStorage.setItem("accs", accountString) 
        form.submit();
    }
  });


form.addEventListener("reset", function(e) { 
  if (!confirm("Clear all account details?")) {
    e.preventDefault();
  }
});

function list() {
    console.log(listofacc);

    const gar = console.log(listofacc);
    
    if (gar === null) { 
    const hey = [document.getElementById("yoyo"), document.getElementById("yoy")];
    hey[0].style.display = "none";
    hey[1].style.display = "none";
    }

    if (gar !== null) {
    const what = document.getElementById("son");
    what.style.display = "none";
    }
}

