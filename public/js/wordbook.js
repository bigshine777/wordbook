const cards = document.querySelectorAll('.card');
let currentCardIndex = 0;

async function saveProgress(cardIndex, memorized) {
    const id = cards[cardIndex].id;
    const pathname = window.location.pathname;
    const type = pathname.split('/').filter(part => part).pop();

    await fetch(`/${type}/${id}/memorized/${memorized}`, {
        method: 'POST',
    }).then(data => { console.log(data.json()) });
}

function flipCard(card) {
    const cardInner = card.querySelector('.card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

function showPopup(bool) {
    const popup = document.querySelector(bool ? '#success-popup' : '#failed-popup');

    popup.classList.remove('hidden');
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
        popup.classList.add('hidden');
    }, 1500);
}

async function updateMemorizedCount() {
    const pathname = window.location.pathname;

    try {
        const response = await fetch(pathname, {
            headers: { 'Accept': 'application/json' },
        });

        const { all_vocabularies, vocabularies } = await response.json();
        const memorizedCount = all_vocabularies.length - vocabularies.length;

        const numElement = document.querySelector('.memorized-num');
        numElement.textContent = memorizedCount;

    } catch (error) {
        console.error('Error updating memorized count:', error);
    }
}


const container = document.querySelector('.card-container');
const hammer = new Hammer(container);

hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});

hammer.on('swipeleft swiperight swipeup', async (event) => {
    const card = cards[currentCardIndex];
    if (!card) return;

    if (event.type === 'swiperight') {
        showPopup(true);
        await saveProgress(currentCardIndex, true);

        card.classList.add('hidden');
        currentCardIndex++;
        cards[currentCardIndex].classList.remove('hidden');
    } else if (event.type === 'swipeup') {
        showPopup(false);
        await saveProgress(currentCardIndex, false);

        card.classList.add('hidden');
        currentCardIndex++;
        cards[currentCardIndex].classList.remove('hidden');
    } else if (event.type === 'swipeleft' && currentCardIndex !== 0) {
        card.classList.add('hidden');
        currentCardIndex--;
        cards[currentCardIndex].classList.remove('hidden');

        await saveProgress(currentCardIndex, false);
    }

    await updateMemorizedCount();

    if (currentCardIndex < cards.length) {
        const nextCard = cards[currentCardIndex];
        nextCard.style.zIndex = cards.length - currentCardIndex;
    } else {
        alert('すべてのカードを完了しました！');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const match = card.className.match(/card-(\d+)/);
        if (match) {
            const index = parseInt(match[1], 10);
            card.style.zIndex = cards.length - index;
        }
    });
});

