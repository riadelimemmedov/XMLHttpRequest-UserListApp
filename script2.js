//!Js dE json ile uygulamalar


document.querySelector('#getEmployee').addEventListener('click', loadEmployee)

function loadEmployee() {
    var loadImage = document.getElementById('loading')
    loadImage.style.display = 'block'


    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'person.json', true) //true=asenkron


    setTimeout(function () { 
        xhr.onload = function () {
            loadImage.style.display = "none"
            if (this.status === 200) { 
                let employees = JSON.parse(this.responseText)//this=xhr

                var html_text = ''

                employees.forEach(function (item) {
                    html_text += `<tr>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.age}</td>
                        <td>${item.retired}</td>
                    </tr>`
                })

                document.getElementById('employees').innerHTML += html_text
            }
        }
        xhr.send()
    }, 3000)

}