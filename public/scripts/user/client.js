let form = document.getElementById("clientForm")

async function handleSubmit(event) {
  event.preventDefault()

  let data = {
    id: document.getElementById("clientId").value,
    logo: document.getElementById("clientLogo").value,
    name: document.getElementById("clientName").value,
    nif: document.getElementById("clientNIF").value,
    email: document.getElementById("clientEmail").value,
    street: document.getElementById("clientStreet").value,
    city: document.getElementById("clientCity").value,
    zip_code: document.getElementById("clientZipCode").value,
    country: document.getElementById("clientCountry").value,
    rgpd: document.getElementById("clientRGPD").checked
  }

  console.log(data)

  fetch(`${ baseUrl }/user/client`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status === 404) {
      alert('Algo correu mal')
    } else {
      alert('Cliente atualizado com sucesso')
      form.reset()
      clientForm.classList.add('d--none')
      window.location.href = `${baseUrl}/user/clients`
    }
  }).catch(error => {
    alert(error)
  });
}

form.addEventListener("submit", handleSubmit)

function showHideForm() {
  if (clientForm.classList.value === 'd--none') {
    // Form is hidden and we have to show it
    clientForm.classList.remove('d--none')
  } else {
    // We have to hide the form
    clientForm.classList.add('d--none')
  }
}

function deleteClient(id) {
  let data = { id }

  fetch(`${ baseUrl }/user/client`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status === 404) {
      alert('Algo correu mal')
    } else {
      alert('Cliente apagado com sucesso')
      window.location.href = `${baseUrl}/user/clients`
    }
  }).catch(error => {
    alert(error)
  });
}

function updateClient(event) {
  let tableRow = event.target.parentNode.parentNode

  console.log(tableRow)
  console.log(tableRow.getElementsByTagName('td')[1])
  console.log(tableRow.getElementsByTagName('td')[1].innerText)
}