// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://dellinhostore.herokuapp.com/advert', true)

request.onload = function () {
  // Begin accessing JSON data here
  var response = JSON.parse(this.response)
  var tableBody = document.getElementById('tbody')

  if (request.status >= 200 && request.status < 400 && response.success == true) {
    // console.log(response);
    response.message.forEach(advert => {
      // console.log(advert)
      if (advert.status == "OPEN") {
        var tr = document.createElement('TR')
        var td1 = document.createElement('TD')
        var td2 = document.createElement('TD')
        var td3 = document.createElement('TD')
        var td4 = document.createElement('TD')
        var td5 = document.createElement('TD')
        var td6 = document.createElement('TD')
        var href = document.createElement('a')
        var link = document.createTextNode(advert.id);  // <a href="./advert/200"
        td1.setAttribute('class', 'column1');
        td2.setAttribute('class', 'column2');
        td3.setAttribute('class', 'column3');
        td4.setAttribute('class', 'column4');
        td5.setAttribute('class', 'column5');
        td6.setAttribute('class', 'column6');
        td1.addEventListener("click", function() { redirectAdvert(advert.id); });
        td6.addEventListener("click", function() { redirectProfile(advert.advertiser.email); });
        td1.textContent = advert.id;
        td2.textContent = advert.platform.name;
        td3.textContent = advert.advertisedGame.name;
        td4.textContent = advert.advertisedGame.genre.name
        td5.textContent = advert.advertisedGame.minimumAge;
        td6.textContent = advert.advertiser.name;
        // href.href = advert.id;
        // href.appendChild(link);
        // td1.appendChild(href);
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tableBody.appendChild(tr)
      }
    })
  }
}

function redirectAdvert(id) {
  console.log('oi ' + id);
}

function viewMyProfile() {
  window.sessionStorage.setItem('clientEmail',window.sessionStorage.loggedEmail);
  window.location.href = "user.html";
}

function redirectProfile(id) {
  window.sessionStorage.setItem('clientEmail',id);
  window.location.href = "user.html";
}

$( document ).ready(function() {
    $('.username').text(window.sessionStorage.name)
    $('.my-profile').on("click", function() { viewMyProfile()});
});

request.send()
