import axios from 'axios'

export function addUser(username,email,phone) {
    if (username  === "") {
      alert("Please fill username field")
    }

    if (phone  === "") {
      alert("Please fill phone  field")
    }
    if (email  === "") {
      alert("Please fill email field")
    }
    
    axios
      .post("/api/users", {
        name: username,
        email: email,
        phone: phone
      })
      .then(function () {
        alert("User successfully added");
        window.location.reload()
      })
      .catch(function (e) {
          console.log(e)
      })
  }

export function addDate(date,note){
    axios
        .post("/api/appointment",{
            date: date,
            note: note
        }).then(
            function(){
                alert("Appointment Added ");
                window.location.reload()
            }
        ).catch(function(e){
            console.log(e)
        })
}