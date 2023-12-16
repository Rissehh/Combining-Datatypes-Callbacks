// Cryayon box
const crayonBox = {
    crayons: ['Red', 'Blue', 'Green', 'Yellow']
  };
  console.log(crayonBox.crayons[0]); 

// Bottle

  const bottle = {
    cap: {
      material: 'metal',
      color: 'blue'
    }
  };
  console.log(bottle.cap.color); 

//reciept
  
  const receipt = [
    { name: 'Bread', price: 2.99 },
    { name: 'Milk', price: 1.99 }
  ];
  console.log(receipt[0].name); 
  
// ApartmentBuilding

const apartmentBuilding = [
    ['Smith', 'Johnson', 'Williams'],
    'Main Street',
    'New York'
  ];
  console.log(apartmentBuilding[0][1]); 


  //knit function

  function knit() {
    return {
      item: 'scarf',
      size: '6ft'
    };
  }
  console.log(knit().item); 

  // crayonsleelctor

  function crayonSelector() {
    return crayonBox;
  }
  console.log(crayonSelector().crayons[2]); // Logs 'Green'

  
  // power button

  function powerButton() {
    return function options() {
      console.log('Select a song');
    };
  }
  powerButton()(); // Logs 'Select a song'

  
  // vending machine
  
  const vendingMachine = {
    snacks: [
      { name: 'Chips', price: 1.50 },
      { name: 'Soda', price: 1.00 },
      { name: 'Candy', price: 0.75 }
    ],
    vend(input) {
      return this.snacks[input];
    }
  };
  console.log(vendingMachine.vend(1)); 

  