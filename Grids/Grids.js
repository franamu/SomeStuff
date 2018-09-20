document.getElementById('first').scrollIntoView(true);

Array.from(document.getElementsByClassName('grid-cell')).forEach(e => {
    e.addEventListener('click', elem => {
        let target = elem.target;
        document.getElementsByClassName('grid-cell active')[0].classList.toggle('active');
        target.classList.toggle('active');
        target.scrollIntoView({behavior: 'smooth'});
        console.log(target);
    });
});
