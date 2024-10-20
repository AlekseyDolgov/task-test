const items = document.querySelectorAll('.item');

const readinessCounter = document.querySelector('.readiness-text');
const readinessSpan = readinessCounter.querySelector('span');
const retryButton = document.querySelector('.retry-button');
let readinessCount = 0;


items.forEach(item => {
    item.addEventListener('click', function() {

        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            readinessCount++;

            readinessSpan.textContent = `${readinessCount}/5`;


            this.style.transition = 'opacity 0.5s';
            this.style.opacity = '0.5';
            console.log(readinessCount);
        }

        console.log(readinessCount);

        if (readinessCount == items.length) {

            const taskText = document.querySelector('.task_text');
            taskText.style.opacity = '0';

            Object.assign(readinessCounter.style, {
                opacity: '0',
                display: 'none',
            });

            items.forEach(item => {
                Object.assign(item.style, {
                    opacity: '0',
                    display: 'none',
                });
            });




            const textGame = document.querySelector('.text-game');
            textGame.style.display = 'block';


            const rukzak = document.querySelector('.backpack');
            rukzak.classList.remove('anim-start');
            rukzak.classList.add('backpackAnim');


            retryButton.style.display = 'block';
        }
    });

});

function resetGame() {
    readinessCount = 0;
    readinessSpan.textContent = `0/5`;

    items.forEach(item => {
        item.classList.remove('clicked');
        item.style.opacity = '1';
        item.style.display = 'block';
    });

    Object.assign(readinessCounter.style, {
        opacity: '1',
        display: 'block',
    });

    const task_text = document.querySelector('.task_text');
    task_text.style.opacity = '1';

    const textGame = document.querySelector('.text-game');
    textGame.style.display = 'none';

    const backpack = document.querySelector('.backpack');
    backpack.classList.remove('backpackAnim');
    backpack.classList.add('anim-start');

    retryButton.style.display = 'none';
}

retryButton.addEventListener('click', resetGame);
