document.addEventListener('DOMContentLoaded', () => {
    let button = document.createElement("button");
    let text = document.createTextNode("Press me!");
    button.appendChild(text);
    
    const divRow2 = document.querySelector('#row2');
    const alertBtn = createElement('button', divRow2);
    const alertBtnTxt = createTextNode('Click Me', alertBtn);

    // 'click' event listener on alertBtn
    alertBtn.addEventListener('click', () => {
        alert(`Hi, How Are You?`);
    })
})






