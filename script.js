const priceInputs = document.querySelectorAll("input");
const form = document.querySelector("#myform");

form.addEventListener("submit", (e) => {
  e.preventDefault();


  let purchasePrice = Number(priceInputs[0].value);
  let stockQuantity = Number(priceInputs[1].value);
  let currentPrice = Number(priceInputs[2].value);

  if (purchasePrice > 0 && stockQuantity > 0 && currentPrice > 0) {
    if (purchasePrice > currentPrice) {
      const totalLoss = (
        (purchasePrice - currentPrice) *
        stockQuantity
      ).toFixed(2);
     
      const lossPercent = (
        ((purchasePrice - currentPrice) * 100) /
        purchasePrice
      ).toFixed(2);
      if (lossPercent >= 50) {
        document.querySelector(".background").style.backgroundImage =
          "url('/Images/loss.webp')";
        document.querySelector(".background").style.backgroundSize = "cover";
        document.querySelector(".background").style.backgroundPosition =
          "center";
      }
      var losses = "";
      losses = `
            
                    <div class="loss-info">
                    
                        <p> You lost ${lossPercent}%, and Your total loss is ₹${totalLoss}</p>
                    </div>
            `;
      document.querySelector(".output").innerHTML = losses;
    } 
    else if(purchasePrice == currentPrice) {
      
      var losses = "";
      losses = `

                    <div class="loss-info">

                        <p> You are safe!! No profit, no loss.</p>
                    </div>  
            `;

      document.querySelector(".output").innerHTML = losses;
    }
    else {
      
      const totalProfit = (
        (currentPrice - purchasePrice) *
        stockQuantity
      ).toFixed(2);
      //profit in percentage
      const profitPercent = (
        ((currentPrice - purchasePrice) * 100) /
        purchasePrice
      ).toFixed(2);

      if (profitPercent >= 50) {
        document.querySelector(".background").style.backgroundImage =
          "url('./Images/profit.gif')";
        document.querySelector(".background").style.backgroundSize = "cover";
        document.querySelector(".background").style.backgroundPosition =
          "center";
      }
      else{
        document.querySelector(".background").style.backgroundImage =
        "url('./Images/neutral.jpg')";
        document.querySelector(".background").style.backgroundSize = "cover";
        document.querySelector(".background").style.backgroundPosition =
          "center";
      }

      var profit = "";
      profit = `
            
                    <div class="loss-info">
                    
                        <p> You gain ${profitPercent}%, and Your total profit is ₹${totalProfit}</p>
                    </div>
            `;
      document.querySelector(".output").innerHTML = profit;
    }
  }
});
