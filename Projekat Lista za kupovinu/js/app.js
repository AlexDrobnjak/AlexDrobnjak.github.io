const form = document.getElementById('registrar');
const input = document.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');
const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = "Sta se mora uzeti";
div.style.display = "inline-block";
filterCheckbox.type = "checkbox";
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

filterCheckbox.addEventListener('change' , (event) => {
    const IsChecked = event.target.checked;
    const lis = ul.children;
   if (IsChecked) {

       for (let i = 0; i<lis.length; i++) {
       let li = lis[i];
        if (li.className === 'responded') {
             li.style.display = '';
        } else {
             li.style.display = 'none';
        }
   }
   }
  else {
     for (let i = 0; i<lis.length; i++) {
        let li = lis[i];
        li.style.display = '';
   }
   }
});

function createLi (text) {

             const li = document.createElement('li');
             const span = document.createElement('span');
             span.textContent = text;
             li.appendChild(span);
             const label = document.createElement('label');
             label.textContent = 'Potvrdi';
             const checkBox = document.createElement('input');
             checkBox.type = 'checkbox';
             label.appendChild(checkBox);
             li.appendChild(label);
             const editButton = document.createElement('button');
             editButton.textContent = 'Edit';
             li.appendChild(editButton);


             const removeButton = document.createElement('button');
             removeButton.textContent = 'Remove';
             li.appendChild(removeButton);
             return li;
}


form.addEventListener('submit', (event) => {
             event.preventDefault();
             const text = input.value;
             const li = createLi(text);
             ul.appendChild(li);
             input.value = " ";
                      });


ul.addEventListener('change' , (event) => {
   const checkbox = event.target;
   const checked = checkbox.checked;
   const listItem = checkbox.parentNode.parentNode;
   if (checked) {
       listItem.className = 'responded';
   } else {
     listItem.className = '';
   }
});



ul.addEventListener('click' , (event) => {
  if (event.target.tagName === 'BUTTON') {
     const button = event.target;
     const li = event.target.parentNode;
     const ul = li.parentNode;
  if (button.textContent === 'Remove') {
      ul.removeChild(li);
  } else if (button.textContent === 'Edit') {
      const span = li.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text' ;
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'Save';
  } else if (button.textContent === 'Save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span,input);
      li.removeChild(input);
      button.textContent = 'Edit';
  }
  }
});
