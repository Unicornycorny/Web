document.addEventListener('DOMContentLoaded', async function () {
    const preloader = document.getElementById('preloader');
    const contentContainer = document.getElementById('content');

    if (navigator.onLine) {
        preloader.style.display = 'block';

        try {
            const data = await fetchData();
            preloader.style.display = 'none';
            renderData(data, contentContainer);
        } catch (error) {
            preloader.style.display = 'none';
            handleError(error, contentContainer);
        }
    } else {
        const offlineMessage = document.createElement('div');
        offlineMessage.textContent = '⚠ Нет подключения к интернету';

        contentContainer.appendChild(offlineMessage);
    }
});

async function fetchData() {
    const randomFilter = Math.random() < 0.5 ? 100 : 200;
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${randomFilter}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}

function renderData(data, contentContainer) {
    const template = document.getElementById('commentTemplate');
    const list = document.createElement('ul');

    data.forEach(item => {
        const listItem = document.importNode(template.content, true);
        listItem.querySelector('.comment-name').textContent = `Name: ${item.name}`;
        listItem.querySelector('.comment-email').textContent = `Email: ${item.email}`;
        listItem.querySelector('.comment-body').textContent = `Comment: ${item.body}`;
        list.appendChild(listItem);
    });

    contentContainer.appendChild(list);
}

function handleError(error, contentContainer) {
    const errorContainer = document.createElement('div');
    errorContainer.textContent = `⚠ Что-то пошло не так: ${error.message}`;

    contentContainer.appendChild(errorContainer);
}
