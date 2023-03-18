const btn = document.querySelectorAll("#button")

function createDiv() {
    let div = document.createElement("div");
    div.className = "squarediv";
    return div;
}

function generateGrid(numOfDivs = 256, cssClass = 'medium-grid') {
    var board = document.getElementById("container");
    board.innerHTML = '';
    let myDivs = [];
    let i = 0;
    board.classList.remove('small-grid', 'medium-grid', 'big-grid');
    board.classList.add(cssClass);
    for (i; i < numOfDivs; i += 1) {
      myDivs.push(createDiv());
      board.appendChild(myDivs[i]);
    }

    myDivs.forEach(div =>div.addEventListener("click", changeColor, false))
    
  }


function changeColor (e) {
    if(e.target.classList.contains('colored')){
        e.target.classList.remove('colored');
    } else {
        e.target.classList.add('colored');
    }
    console.log(e)
}

function changeSize() {
    btn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.textContent === 'Small') {
                generateGrid(64, 'small-grid');
            } else if (e.target.textContent === 'Medium') {
                generateGrid(256, 'medium-grid');
            } else if (e.target.textContent === 'Big') {
                generateGrid(4096, 'big-grid');
            } else {
                console.log('Error in btn.addEventListener');
            }
        });
    });
}
  

generateGrid();
changeSize();
