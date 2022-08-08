// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;


// instance 블록에 담길 때 딱 한번만 실행된다~
contract SimpleStore {
    uint256 public value;
    address public owner;

    constructor(uint256 _value){ // 생성자는 배포됐을 때 migration 폴더를 봐!
        value = _value;
        owner = msg.sender; // 배포한 사람의 account
    }
  function getAddress() public view returns (address){
    return msg.sender;
  }
}
