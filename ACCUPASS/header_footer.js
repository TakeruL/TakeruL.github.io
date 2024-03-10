function resetCheckbox() {
    var checkbox = document.getElementById('profile-container-switch');
    checkbox.checked = false;
}

window.addEventListener('resize', function () {
    resetCheckbox();
});

resetCheckbox();