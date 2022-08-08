// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Voting {
    string[] public candidateList;
    mapping(string => uint8) public votesReceived;

    constructor(string[] memory candidatenames){
        candidateList = candidatenames;
    }

    // 후보군 투료를 위한
    function voteForcandidate(string memory candidate) public{
        require(validCandidate(candidate)," Error !! ");
        votesReceived[candidate] += 1;
    }

    function totalVotesFor(string memory candidate) public view returns(uint8){
        require(validCandidate(candidate)," Error !! ");
        return votesReceived[candidate];
    }

    function validCandidate(string memory candidate) private view returns(bool) {
        // 1. 후보자 리스트 candidateList 가져와!
        // 2. 내가 입력한 후보자군 과 candidateList 안에있는 후보자가 일치하는게 있는지~
        for(uint i=0; i < candidateList.length; i++){
            // 0 1 2 3
            // String 비교가 안됩니다.
            // keccak256 16진수 -> 32byte
            // password
            // keccak256(abi.encodedPacked(candidateList[i]))
            if(keccak256(abi.encodePacked(candidateList[i])) == keccak256(abi.encodePacked(candidate))){
                return true;
            }
        }
        return false;
    }

}
