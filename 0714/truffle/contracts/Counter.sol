// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract Counter {
    uint256 private _count;
    event Count(uint256 count); // event를 등록하겠다는 뜻

    function current() public view returns(uint256){
        return _count;
    }

    function increment() public {
        _count += 1;
        emit Count(_count); // increment 함수가 실행되면 Count 이벤트를 실행시킬거야
    }

    function decrement() public {
        _count -= 1;
         emit Count(_count);
    }

}