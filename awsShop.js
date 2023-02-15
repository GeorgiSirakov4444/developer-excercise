// AWS shop

const apple = 50;
const banana = 40;
const tomato = 30;
const potato = 26;

// 2 for 3 - ["apple", "banana", "tomato"]
var promotionArray = ["apple", "banana", "tomato"];
// buy 1 get 1 half price - potato
var promotionProduct = "potato";


function awsShop(input) {
     var totalPrice = 0;
     var priceArray = [];
     var temp = 0;
     var promotionProductPrice = 0;

     for(let i=0; i<input.length; i++) {
          let product = input[i];
          if(product == "apple") {
               priceArray.push(50);
               if(product == promotionProduct) {
                    promotionProductPrice = 50;
               }
          }
          if(product == "banana") {
               priceArray.push(40);
               if(product == promotionProduct) {
                    promotionProductPrice = 40;
               }
          }
          if(product == "tomato") {
               priceArray.push(30);
               if(product == promotionProduct) {
                    promotionProductPrice = 30;
               }
          }
          if(product == "potato") {
               priceArray.push(26);
               if(product == promotionProduct) {
                    promotionProductPrice = 26;
               }
          }
     }

     if(input.length  >= 3) {
          var dealsArray = [];
          dealsArray.push(priceArray[0]);
          dealsArray.push(priceArray[1]);
          dealsArray.push(priceArray[2]);

          if ( promotionArray.includes(input[0]) || 
               promotionArray.includes(input[1]) || 
               promotionArray.includes(input[2])) {

               temp = Math.min(...dealsArray);
               var counter = 0;
               var secondPromotionCounter = 0;

               for(var n = 0; n<priceArray.length; n++) {
                    if (counter != 0) {
                         
                         if ( n > 2) {
                              if(promotionProductPrice == priceArray[n] && secondPromotionCounter == 0) {
                                   secondPromotionCounter  ++;
                                   totalPrice += priceArray[n];
                              } else if (promotionProductPrice == priceArray[n] && secondPromotionCounter == 1) {
                                   secondPromotionCounter  ++;
                                   totalPrice += priceArray[n] / 2;
                              } else {
                                   totalPrice += priceArray[n];
                              }
                         } else {
                              totalPrice += priceArray[n];
                         }
                    } else {
                         if (priceArray[n] === temp) {
                              totalPrice += 0;
                              counter ++;
                         } else {
                              totalPrice += priceArray[n];
                         }
                    }
               }
          } else {
               for(var n = 0; n<priceArray.length; n++) {
                    totalPrice += priceArray[n];
               }
          }
     } else {
          for(var n = 0; n<priceArray.length; n++) {
               totalPrice += priceArray[n];
          }
     }
     console.log(`The total amount is ${totalPrice}clouds = ${totalPrice/100}aws.`);
}

awsShop(["apple", "banana", "banana", "potato", "tomato", "banana", "potato"]);






