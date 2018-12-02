let menuItems = document.getElementsByClassName('menu-item');

function setCurrentLink(item) {
    for (let i of menuItems) {
        if (i.classList.contains('current')) {
            i.classList.remove('current');
            // I'll add scroll to anchor here
        }
    }
    item.classList.add('current');
}

for (let item of menuItems) {
    item.addEventListener('click', () => {
        setCurrentLink(item);
    })
}