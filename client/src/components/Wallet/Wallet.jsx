import './Wallet.css';
import { useState } from 'react';
import ABI from './ABI.json'
import Web3 from 'web3';
const Wallet =({saveState})=>{
      const [connected, setConnected] = useState(false);
      const isAndroid = /android/i.test(navigator.userAgent);
      const contractAddress = '0xd8854c9320Dbe9657E3Ead744D2ED9DD78da8F85';
      const init = async() => {
            try{
                  const web3 = new Web3(window.ethereum);
                  await window.ethereum.request({method: 'eth_requestAccounts'});
                  const contract = new web3.eth.Contract(ABI, contractAddress);
                  saveState({web3:web3, contract:contract});
                  setConnected(true);
            }catch(error){
                  alert(error);
            }
            
            
      }
      return<>
      <div className="header">
      {isAndroid && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/jysydv.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled ={connected} >{connected?"Connected":"Connect Metamask"}</button>
      </div>
      </>
}
export default Wallet;