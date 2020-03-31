const MESSAGES_ROW_SELECTOR = ".messages-table .messages-table__row";
const SELECTED_MESSAGE_ROW_SELECTOR = ".messages-table .messages-table__row.selected";

document.addEventListener("keydown", (event) => {

  // Toggle open/close of the heystack with ctrl+h
  if(event.ctrlKey && event.key == "h") {
    toggleHeystack();
    setTimeout(selectFirstHey, 250);
    event.preventDefault();
  }

  // Commands for when the Heystack is open
  if(isHeyOpen()) {
    if(event.key == "ArrowDown" || event.key == "j") {
      event.preventDefault();
      if(getSelectedHey() === null) {
        selectFirstHey();
      } else {
        selectNextHey();
      }
    }

    if(event.key == "ArrowUp" || event.key == "k") {
      event.preventDefault();
      if(getSelectedHey() !== null) {
        selectPreviousHey();
      }
    }

    if(event.key == "Enter") {
      document.querySelector("article.reading.selected .reading__link").click();
      event.preventDefault();
    }
  }

  // Commands for when we are on a project overview page
  if(isOnProjectPage()) {
    if(event.key == "c") {
      document.querySelector("article.card--chat a").click();
    }
    if(event.key == "m") {
      document.querySelector("article.card--message_board a").click();
    }
    if(event.key == "t") {
      document.querySelector("article.card--todoset a").click();
    }
    if(event.key == "d" || event.key == "f") {
      document.querySelector("article.card--vault a").click();
    }
    if(event.key == "s") {
      document.querySelector("article.card--schedule a").click();
    }
  }

  if(isOnMessagesPage()) {

    if(event.key == "ArrowDown" || event.key == "j") {
      console.log("Down messages");
      event.preventDefault();
      if(getSelectedMessage() === null) {
        selectFirstMessage();
      } else {
        selectNextMessage();
      }
    }

    if(event.key == "ArrowUp" || event.key == "k") {
      console.log("Up messages");
      event.preventDefault();
      if(getSelectedMessage() === null) {
        selectLastMessage();
      } else {
        selectPreviousMessage();
      }
    }

    if(event.key == "Enter") {
      event.preventDefault();
      document.querySelector(".messages-table .messages-table__row.selected a").click()
    }

    if(event.key == "Escape") {
      window.eval(`$("${SELECTED_MESSAGE_ROW_SELECTOR}").removeClass("selected")`)
    }
  }

})

function toggleHeystack() {
  console.log("Expanding");
  window.eval(`$("[data-menu-section=readings]").toggleExpansion();`)
  console.log("Done expanding");
}

function isHeyOpen() {
  return window.eval(`$("[data-menu-section=readings]").isExpanded();`);
}

function isOnProjectPage() {
  return window.location.pathname.match("\/projects\/[0-9]+$") != null;
}

function isOnMessagesPage() {
  return window.location.pathname.match("\/message_boards\/[0-9]+$") != null;
}

function getSelectedHey() {
  return document.querySelector("article.reading.selected");
}

function selectFirstHey() {
  console.log("Selecting the first hey");
  window.eval(`$("article.reading").first().addClass("selected")`);
}

function selectNextHey() {
  console.log("Selecting the next hey");
  let index = window.eval(`$("article.reading").index($("article.reading.selected"))`);
  let count = window.eval(`$("article.reading").length`);
  if(index < count) {
    window.eval(`$("article.reading.selected").removeClass("selected")`)
    window.eval(`$($("article.reading").get(${index+1})).addClass("selected")`)
  }
}

function selectPreviousHey() {
  console.log("Selecting the previous");
  let index = window.eval(`$("article.reading").index($("article.reading.selected"))`);
  let count = window.eval(`$("article.reading").length`);
  if(index > 0) {
    window.eval(`$("article.reading.selected").removeClass("selected")`)
    window.eval(`$($("article.reading").get(${(index-1)})).addClass("selected")`)
  }
}

function getSelectedMessage() {
  return document.querySelector(MESSAGES_ROW_SELECTOR);
}

function selectFirstMessage() {
  window.eval(`$("${MESSAGES_ROW_SELECTOR}").first().addClass("selected")`);
}

function selectLastMessage() {
  window.eval(`$("${MESSAGES_ROW_SELECTOR}").last().addClass("selected")`);
}

function selectNextMessage() {
  let index = window.eval(`$("${MESSAGES_ROW_SELECTOR}").index($("${SELECTED_MESSAGE_ROW_SELECTOR}"))`);
  let count = window.eval(`$("${MESSAGES_ROW_SELECTOR}").length`);
  if(index < count) {
    window.eval(`$("${SELECTED_MESSAGE_ROW_SELECTOR}").removeClass("selected")`)
    window.eval(`$($("${MESSAGES_ROW_SELECTOR}").get(${index+1})).addClass("selected")`)
  }
}

function selectPreviousMessage() {
  let index = window.eval(`$("${MESSAGES_ROW_SELECTOR}").index($("${SELECTED_MESSAGE_ROW_SELECTOR}"))`);
  let count = window.eval(`$("${MESSAGES_ROW_SELECTOR}").length`);
  if(index > 0) {
    window.eval(`$("${SELECTED_MESSAGE_ROW_SELECTOR}").removeClass("selected")`)
    window.eval(`$($("${MESSAGES_ROW_SELECTOR}").get(${index-1})).addClass("selected")`)
  }
}


