function validateForm() {
    var name = document.querySelector('#my-form input[type="text"][placeholder="Digite seu nome"]').value;
    var email = document.querySelector('#my-form input[type="text"][placeholder="Digite seu email"]').value;
    var message = document.querySelector('#my-form textarea').value;
  
    if (!name || !email || message.length < 5) {
      alert("Por favor, preencha todos os campos corretamente!");
      return false;
    }
  
    document.querySelector('#my-form').submit();
  }
