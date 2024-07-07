document.addEventListener('DOMContentLoaded', function() {
    const changeTextButton = document.getElementById('changeTextButton');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');
    const changeBgColorButton = document.getElementById('changeBgColorButton');
    const alertButton = document.getElementById('alertButton');
    const message = document.getElementById('message');
    const newElementContainer = document.getElementById('newElementContainer');

    changeTextButton.addEventListener('click', function() {
        message.textContent = 'The text has been changed!';
    });

   addElementButton.addEventListener('click',function() {
        const newElement = document.createElement('p');
        newElement.textContent= "This is a new element added to the page!";
        newElement.classList.add('added-element');
        newElementContainer.appendChild(newElement);
   })

    removeElementButton.addEventListener('click', function() {
        const addedElements = document.querySelectorAll('.added-element');
        if (addedElements.length > 0) {
            newElementContainer.removeChild(addedElements[addedElements.length - 1]);
        }
    });

    changeBgColorButton.addEventListener('click', function() {
        const colors = ['#f0f0f0', '#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    alertButton.addEventListener('click', function() {
        alert('This is an alert message!');
    });
});