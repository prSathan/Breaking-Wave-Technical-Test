const cors = "https://cors-anywhere.herokuapp.com/";

fetch(
  `${cors}https://u0e8utqkk2.execute-api.eu-west-2.amazonaws.com/dev/email-service/health`
)
  .then(res => res.json())
  .then(res => {
    const first = document.getElementById("first");
    first.innerHTML = res.status;
  })
  .catch(err => console.log("error occured", err));
