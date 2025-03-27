// ==UserScript==
// @name        GitHub squash reminder
// @include     *github.com*/*/*/pull/*
// @exclude     none
// @version     2
// @grant    		none
// @description   	Replaces the button if your current selected merge strategy is a merge commit
// @author      VasilisThePikachu
// @updateURL    https://raw.githubusercontent.com/VasilisThePikachu/GH-Squash-Reminder-Userscript/refs/heads/master/GitHub%2520squash%2520reminder.user.js
// @downloadURL  https://raw.githubusercontent.com/VasilisThePikachu/GH-Squash-Reminder-Userscript/refs/heads/master/GitHub%2520squash%2520reminder.user.js
// ==/UserScript==

function modifyMergeButton() {
    document.querySelectorAll('button.prc-Button-ButtonBase-c50BI').forEach(button => {
        if (button.textContent.trim() === "Confirm merge") {
            button.textContent = '⚠️ MERGE COMMIT SELECTED - Did you mean to squash? ⚠️';
            button.style.backgroundImage = 'linear-gradient(-180deg, #e02626 0%, #9F2D27 90%)';
            button.style.color = 'white';
            button.style.fontWeight = 'bold';
        }
    });
}

function observeMergeButton() {
    const observer = new MutationObserver(modifyMergeButton);
    observer.observe(document.body, { childList: true, subtree: true });

    // Run immediately in case the button is already there
    modifyMergeButton();
}

// Start the observer
observeMergeButton();
