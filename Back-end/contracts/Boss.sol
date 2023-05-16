// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Boss{
    mapping(address=>mapping(string=>string)) public passwordLocker;
    event passwordSaved(address indexed, string indexed);
   

    function storePasswords(string memory key, string memory password)public{
        passwordLocker[msg.sender][key]=password;
        emit passwordSaved(msg.sender, key);
    }
    
    function getPassword(string memory key)external view returns(string memory){
        return  passwordLocker[msg.sender][key];
        
    }

    receive() external payable{

    }
    fallback() external payable {
       
    }
    
   
}