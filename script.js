const danceSelection = document.getElementById("dance");
const rockSelection = document.getElementById("rock");
const popSelection = document.getElementById("pop");
const submitBtn = document.getElementById("submit");
const displayMusicSelection = document.getElementById("display-music-selection");



submitBtn.onclick = function () {
    if (danceSelection.checked) {
        displayMusicSelection.textContent = `Dance music selected. We will now curate a playlist for you...`;
    } else if (rockSelection.checked) {
        displayMusicSelection.textContent = `Rock music selected. We will now curate a playlist for you...`;
    } else if (popSelection.checked) {
        displayMusicSelection.textContent = `Pop music selected. We will now curate a playlist for you...`;
    } else {
        displayMusicSelection.textContent = `No music genre selected!`;
    }


}
