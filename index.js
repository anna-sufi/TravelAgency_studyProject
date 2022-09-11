const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        removeSelection();
        item.classList.add('selected');
    })
})

removeSelection = () => {
    items.forEach(item => {
         item.classList.remove('selected');
        })
}
