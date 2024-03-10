window.addEventListener("load", function () {
    setSelectThemeScript();
});

function setSelectThemeScript() {
    const theme_cards = document.querySelectorAll(".theme-card");
    const save_btn = document.querySelector(".select-theme-content .save-btn");
    let selectedCount = 0;
    theme_cards.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains("selected")) {
                e.currentTarget.classList.remove("selected");
                selectedCount--;
            } else if (!e.currentTarget.classList.contains("selected") && selectedCount < 2) {
                e.currentTarget.classList.add("selected");
                selectedCount++;
                save_btn.classList.remove("off");
            }
            if (selectedCount == 0) save_btn.classList.add("off");
        });
    });
}
