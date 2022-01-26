async function handleSubmit(event) {
  event.preventDefault();
  let data = {}

  let date_time = document.getElementById('reservationDate').value
  let id_Client = document.getElementById('id_Client').value
  let id_Service = document.getElementById('id_Service').value
  let id_Staff = document.getElementById('id_Staff').value

  data = {date_time, id_Client, id_Service, id_Staff}

  fetch(`${ baseUrl }/booking/reservation`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then( response => {
    if (response.status === 401) {
      alert('ERRO')
    } else {
      alert('Reserva efetuada')
    }
  }).catch(error => alert(error.message));
}