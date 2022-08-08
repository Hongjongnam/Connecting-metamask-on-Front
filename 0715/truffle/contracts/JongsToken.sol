// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract JongsToken {
    mapping(address => uint256) public balances;
    string public name = "JongsToken";
    string public symbol = "JTK";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * 10 ** decimals;
    
    // transfer 함수 실행됐을 때 이벤트발동
    event Transfer(address  _from, address _to, uint256 _value);
    
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
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

}
