import React from "react";
import { ethers } from "ethers";
import {bnbTokenAddress} from "../Services/ContractAddress"
import {bnbContractAddress} from "../Services/ContractAddress"
import BNBContractAbi from "../Services/BNBContractAbi.json"
import BNBTokenAbi from "../Services/BNBContractAbi.json"
import ETHContractAbi from "../Services/ETHContractAbi.json"
import { ethContractAddress } from "../Services/ContractAddress";
const EventListner = () => {

  //-------------------Listen to events that will happen after it gets triggered----------------------------------//
  const listenToOccuringEvent = async () => {
  
    try {
        const provider = new ethers.providers.WebSocketProvider('wss://sepolia.infura.io/ws/v3/cc1359e3395943b5a5e1d6e395b3aea2');
        const signer = provider.getSigner();
        const Contract = new ethers.Contract(
            ethContractAddress,
            ETHContractAbi,
          signer
        );
        console.log("Sepolia Contract",Contract);
       
        Contract.on("escrowExecuted", (_escrowAddress, _sender, _receivedBy, _amount, event) => {

            let info={
                escrowAddress: _escrowAddress,
                sender: _sender,
                receivedBy: _receivedBy,
                amount: ethers.utils.formatUnits(_amount,18),
                data: event


            }
            console.log(JSON.stringify(info,null,4));
        });

    } catch (e) {
      console.log(e);
    }
  };
   //--------------------- gets all previous event till now-------------//
  const allPreviousEvents=async()=>{
    const provider = new ethers.providers.WebSocketProvider('wss://sepolia.infura.io/ws/v3/cc1359e3395943b5a5e1d6e395b3aea2');
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(
        ethContractAddress,
        ETHContractAbi,
      signer
    );
    console.log("Sepolia Contract",Contract);
    const events = await Contract.queryFilter("escrowExecuted");
    console.log("Events length",events.length);
    console.log("dayum",events);

    console.log("Event Details",events[1].args._receivedBy)
  }
  
  return (
    <div>
      <button onClick={allPreviousEvents}> Listen to event </button>
    </div>
  );
};

export default EventListner;
