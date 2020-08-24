// look for the buttom
    document.querySelector("#add-time")
    // when click what to do???
    .addEventListener('click', cloneField)
// Do something
    function cloneField() {
        // Duplicate fields. whats fields???
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // se houver o elemento no html ele vai clonar
   // To take the fields. whats fields???
   const fields = newFieldContainer.querySelectorAll('input')

   // For each field, to clear!
   fields.forEach(function(field) {
        //get the field of the moment and clear it
        field.value = ""
   })
   // to show on page. where???
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
    }
    
