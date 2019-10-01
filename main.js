//cors url
const cors = "https://cors-anywhere.herokuapp.com/";

//first endpoint url request
fetch(
  `${cors}https://u0e8utqkk2.execute-api.eu-west-2.amazonaws.com/dev/email-service/health`
)
  .then(res => res.json())
  .then(res => {
    const emailService = document.getElementById("email-service");
    emailService.innerHTML = res.status;
  })
  .catch(err => console.log("error occured", err));

//second endpoint url request
fetch(
  `https://u0e8utqkk2.execute-api.eu-west-2.amazonaws.com/dev/payment-gateway/health`
)
  .then(res => res.text())
  .then(res => {
    const paymentGateway = document.getElementById("payment-gateway");
    paymentGateway.innerHTML = res;
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
    const microserviceController = document.getElementById(
      "microservice-controller"
    );
    microserviceController.innerHTML = res;
  })
  .catch(err => console.log("error occured", err));

//fourth endpoint url request
fetch(
  `${cors}https://u0e8utqkk2.execute-api.eu-west-2.amazonaws.com/dev/transaction-monitor/health`
)
  .then(res => res.json())
  .then(res => {
    const transactionMonitor = document.getElementById("transaction-monitor");
    transactionMonitor.innerHTML = res.status;
  })
  .catch(err => console.log("error occured", err));
