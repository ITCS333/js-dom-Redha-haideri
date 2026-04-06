function changeHeadingText() {
  if (typeof document !== "undefined") {
    const heading = document.getElementById("main-heading")
    if (heading) {
      heading.textContent = "DOM Manipulation Challenge"
    }
  }
}

function changeBoxColor() {
  if (typeof document !== "undefined") {
    const box = document.getElementById("box-to-modify")
    if (box) {
      box.style.backgroundColor = "lightblue"
    }
  }
}

function addNewItem() {
  if (typeof document !== "undefined") {
    const list = document.getElementById("item-list")
    if (list) {
      const newItem = document.createElement("li")
      newItem.textContent = "New Item"
      list.appendChild(newItem)
    }
  }
}

function highlightParagraph() {
  if (typeof document !== "undefined") {
    const para = document.querySelector(".content-para")
    if (para) {
      para.classList.add("highlight")
    }
  }
}

function removeElement() {
  if (typeof document !== "undefined") {
    const element = document.getElementById("to-be-removed")
    if (element) {
      element.remove()
    }
  }
}
