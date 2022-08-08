// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract JongsToken {
    mapping(address => uint256) public balances;
    string public name = "JongsToken";
    string public symbol = "JTK";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * 10 ** decimals;
    
    constructor(){
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 balance){
        return balances[_owner];
    }

    function transfer(address _to, uint256 _value) public returns(bool success){  
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
       return true;
    }

}
