import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';

// hooks = functions that starts with the "use" keyword

const initialDevices = [
  {
    name: 'Laptop',
    amount: 5,
    price: '1600'
  },
  {
    name: 'Printer',
    amount: 1,
    price: '400'
  },
  {
    name: 'Keyboard',
    amount: 1,
    price: '150'
  },
  {
    name: 'Mouse',
    amount: 1,
    price: '50'
  }
]

function App() {

  const [devices, setDevices] = useState(initialDevices)

  const updateDevices = (newValue, itemIndex) => {
    const tempDevices = [...devices]
    tempDevices[itemIndex].amount = newValue
    setDevices(tempDevices)
  }
  
  let billAmount = 0
  for (var i = 0; i < devices.length; i++) {
    billAmount += parseInt(devices[i].price)
  }

  return (
    <div>
      <ul>
        {
          devices.map((device, i) => {
            return (
              <li>
                {device.name} - {device.price}
                <input type='number' value={device.amount} onChange={(e) => {
                  console.log(e.target.value, i)
                  updateDevices(e.target.value, i)
                }} />
              </li>
            )
          })
        }
      </ul>
      {/* {
        (billAmount > 2000) && (
          <p>You got a discount</p>
        )
      } */}
      {
        (billAmount > 3000) ? (
          <p>You got a discount</p>
        ) : (
          <p>You should buy with {3000 - billAmount} more to get  discount</p>
        )
      }
    </div>
  );
}

export default App;
