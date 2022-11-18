// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract Counter {
    uint256 public _count;

    function current() public view returns(uint256){
        return _count;
    }

    function increment() public {
        _count += 1;
    }

    function decrement() public {
        _count -= 1;
    }

}