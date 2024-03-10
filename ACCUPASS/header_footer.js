function resetCheckbox() {
    var checkbox = document.getElementById('profile-container-switch');
    checkbox.checked = false;
}

window.addEventListener('resize', function () {
    // Add your responsive logic here
    resetCheckbox();
});

// Call resetCheckbox initially to handle the initial state
resetCheckbox();



// 獲取側邊選單開關的 checkbox 和 overlay 元素
const menuSwitch = document.getElementById('menu-switch');
const overlay = document.querySelector('.overlay');

// 為 checkbox 添加事件監聽器
menuSwitch.addEventListener('change', function() {
    // 根據 checkbox 是否被選中來顯示或隱藏 overlay
    if (menuSwitch.checked) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
});
