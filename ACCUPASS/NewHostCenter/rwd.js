function adjustStructure() {
    const listItem = document.querySelectorAll('.list-item');
    const listContainer = listItem.querySelector('.list-container');

    if (window.innerWidth < 768) {
        const listContainerPhone = document.createElement('div');
        listContainerPhone.classList.add('list-container', 'list-container-phone');

        const dateRow = document.createElement('div');
        dateRow.classList.add('list-item-row');
        dateRow.innerHTML = `
            <div class="list-item-date">
                <span>02.29</span>
            </div>
            <div class="list-item-img">
                <img src="./img/event_520x260.png" alt="">
            </div>
        `;
        listContainerPhone.appendChild(dateRow);

        const nameRow = document.createElement('div');
        nameRow.classList.add('list-item-row');
        nameRow.innerHTML = `
            <div class="list-item-name">
                <span>test</span>
            </div>
        `;
        listContainerPhone.appendChild(nameRow);

        const signStatusRow = document.createElement('div');
        signStatusRow.classList.add('list-item-row', 'list-item-row-sign');
        signStatusRow.innerHTML = `
            <div class="list-item-sign list-item-sign-phone">
                <span>報名數</span>
                <span>30/100</span>
            </div>
            <div class="list-item-status list-item-sign-phone">
                <span>狀態</span>
                <span>草稿</span>
            </div>
        `;
        listContainerPhone.appendChild(signStatusRow);

        listItem.removeChild(listContainer);
        listItem.appendChild(listContainerPhone);
    } else {
        const listContainerPhone = listItem.querySelector('.list-container-phone');
        if (listContainerPhone) {
            listItem.removeChild(listContainerPhone);
            listItem.appendChild(listContainer);
        }
    }
}

// 初始調整
adjustStructure();

// 當視窗大小改變時再次調整
window.addEventListener('resize', adjustStructure);