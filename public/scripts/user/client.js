let form = document.getElementById("clientForm")

async function handleSubmit(event) {
  event.preventDefault()

  var data = new FormData(form);

  console.log(data)

      /*
  fetch("https://formspree.io/f/mrgjbvlb", {
    method: "POST",
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    loadingForm.classList.remove('d-block');
    var successForm = document.getElementById("successForm");
    successForm.classList.add('d-block');
    successForm.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    loadingForm.classList.remove('d-block');
    var errorForm = document.getElementById("errorForm");
    errorForm.classList.add('d-block');
    errorForm.innerHTML = "Oops! There was a problem submitting your form";
  });*/
}

form.addEventListener("submit", handleSubmit)