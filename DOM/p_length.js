const allP = document.querySelectorAll("p")

allP.forEach(element => element.insertAdjacentHTML('beforebegin',element.innerText.length));