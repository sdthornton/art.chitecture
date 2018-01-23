function emailer() {
  emailjs.init("user_yNApgpUHN9XXaOA2ZbvcP");

  var form = document.querySelector('#contact_form');
  var submitButton = form.querySelector('button');
  var serviceId = "default_service";
  var templateId = "website_contact";
  var successAlert = document.querySelector('.email-success-alert');
  var errorAlert = document.querySelector('.email-error-alert');
  var formHeading = document.querySelector('.form-heading');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    submitButton.innerHTML = 'Sending&hellip;'
    submitButton.disabled = true;
    successAlert.classList.add('d-none');
    errorAlert.classList.add('d-none');
    emailjs
      .sendForm(serviceId, templateId, contact_form)
      .then(function (response) {
        console.log('SUCCESS', response);
        submitButton.innerHTML = "Send your message<i class='ion-paper-airplane ml-2'></i>";
        submitButton.disabled = false;
        grecaptcha.reset();
        form.reset();
        successAlert.classList.remove('d-none');
        formHeading.scrollIntoView();
      }, function (error) {
        console.log(error);
        submitButton.innerHTML = "Send your message<i class='ion-paper-airplane ml-2'></i>";
        submitButton.disabled = false;
        grecaptcha.reset();
        form.reset();
        errorAlert.classList.remove('d-none');
        formHeading.scrollIntoView();
      });
  }, true);
}
