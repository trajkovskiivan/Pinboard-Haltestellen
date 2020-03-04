const busStatus = document.querySelectorAll(`.bus_status`);
for (const input of busStatus) {
    if (input.value === `GEREINIGT`) {
        input.style.backgroundColor = `#39d09f`
    } else if (input.value === `IN REINIGUNG`) {
        input.style.backgroundColor = `#fdc301`
    } else if (input.value === `ANZEIGEN`) {
        input.style.backgroundColor = `#0a64fc`;
    } else {
        input.style.backgroundColor = `#f12a2b`
    }
};

let modal = document.getElementById("myModal");
let modalBtn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("close")[0];

modalBtn.addEventListener(`click`, () => {
    modal.style.display = "block";
});

span.addEventListener(`click`, () => {
    modal.style.display = "none";
});

window.addEventListener(`click`, () => {
    if (event.target == modal) {
        modal.style.display = "none";
    };
});
window.addEventListener(`keydown`, (e) => {
if (e.key == "Escape") {
    modal.style.display = "none";
};
});