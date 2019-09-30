//cors url
const cors = "https://cors-anywhere.herokuapp.com/";

//first endpoint url request
fetch(
  `${cors}https://u0e8utqkk2.execute-api.eu-west-2.amazonaws.com/dev/email-service/health`
)
  .then(res => res.json())
  .then(res => {
    const first = document.getElementById("first");
    first.innerHTML = res.status;
  })
  .catch(err => console.log("error occured", err));

//second endpoint url request
fetch(
  `https://u0e8utqkk2.execute-api.eu-west-2.amazonaws.com/dev/payment-gateway/health`
)
  .then(res => res.text())
  .then(res => {
    const second = document.getElementById("second");
    second.innerHTML = res;
  })
  .catch(err => console.log("error occured", err));

//third endpoint url request
fetch(
  `https://u0e8utqkk2.execute-api.eu-west-2.amazonaws.com/dev/microservice-controller/health`,
  {
    method: "POST"
  }
)
  .then(res => res.text())
  .then(res => {
    const third = document.getElementById("third");
    third.innerHTML = res;
    console.log(res);
  })
  .catch(err => console.log("error occured", err));
