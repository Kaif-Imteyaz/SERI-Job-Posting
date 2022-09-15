function disableSubmit() {
  document.getElementById("Submit").disabled = true;
 }

  function activateButton(element) {

      if(element.checked) {
        document.getElementById("Submit").disabled = false;
       }
       else  {
        document.getElementById("Submit").disabled = true;
      }

  }

  