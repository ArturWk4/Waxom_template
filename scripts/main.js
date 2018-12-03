let menuItems = document.getElementsByClassName('nav-item');

function setCurrentLink(item) {
    for (let i of menuItems) {
        if (i.classList.contains('active')) {
            i.classList.remove('active');
            // I'll add scroll to anchor here
        }
    }
    item.classList.add('active');
}

for (let item of menuItems) {
    item.addEventListener('click', () => {
        setCurrentLink(item);
    })
}