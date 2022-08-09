// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract AppleShop {
  mapping (address => uint) myApple;

    function buyApple() public payable {
        myApple[msg.sender] += 1;
    }

    function sellApple(uint _applePrice) public payable {
        uint refund = myApple[msg.sender] * _applePrice;
        myApple[msg.sender] = 0;
        payable(msg.sender).transfer(refund);
    }

    function getApple() view public returns (uint){
        return myApple[msg.sender];
    }
}