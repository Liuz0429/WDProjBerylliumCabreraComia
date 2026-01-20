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

