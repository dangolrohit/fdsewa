function displayStatus() {
   const orderInput = document.getElementById("track-number").value;
   fetch("https://script.google.com/macros/s/AKfycbwc8wwelO3fDU6abw0_ouOE5sh_PM3kqTj-699Y5lo5eARySc9M0L3p-vUtW6PuwHY/exec")
      .then((response) => response.json())
      .then((data) => {
         const result = data.data.find((item) => item.Order == orderInput);
         const statusResult = document.getElementById("result");
         if (result) {
            const userName = result.Name; // Get the Name from the result
            const status = result.Status; // Get the Status from the result
            // Display the message using template literals
            statusResult.textContent = `Dear ${userName}, your Order Status is: ${status}`;
         } else {
            statusResult.textContent = "Invalid Order Number.";
         }
         setTimeout(function () {
            document.getElementById("track-number").value = "";
         }, 1000);
      })
      .catch((error) => console.error("Error fetching data:", error));
}
// const source = "https://script.google.com/";
// const storeId = "AKfycbwc8wwelO3fDU6abw0";
// const virtualId = "_ouOE5sh_PM3kqTj-";
