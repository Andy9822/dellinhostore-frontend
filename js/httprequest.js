// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://dellinhostore.herokuapp.com/game', true)

request.onload = function () {
  // Begin accessing JSON data here
  var response = JSON.parse(this.response)
  var tableBody = document.getElementById('tbody')

  if (request.status >= 200 && request.status < 400 && response.success == true) {
    response.message.forEach(game => {
      console.log(game)
      var tr = document.createElement('TR')
      var td1 = document.createElement('TD') 
      var td2 = document.createElement('TD')
      var td3 = document.createElement('TD')
      var td4 = document.createElement('TD')
      var td5 = document.createElement('TD')
      var td6 = document.createElement('TD')
      td1.setAttribute('class', 'column1');
      td2.setAttribute('class', 'column2');
      td3.setAttribute('class', 'column3');
      td4.setAttribute('class', 'column4');
      td5.setAttribute('class', 'column5');
      td6.setAttribute('class', 'column6');
      td1.textContent = game.name;
      td2.textContent = game.genre.name;
      td3.textContent = game.minimumAge;
      td4.textContent = game.name;
      td5.textContent = game.name;
      td6.textContent = game.name;
      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)
      tr.appendChild(td5)
      tr.appendChild(td6)
      tableBody.appendChild(tr)
    })
  }
}

// Send request
request.send()
