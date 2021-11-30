const allTitle = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
allTitle.forEach(element => element.prepend(element.innerText.toUpperCase()));