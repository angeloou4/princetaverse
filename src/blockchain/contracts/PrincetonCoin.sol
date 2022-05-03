// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
// Actual token contract
contract PrincetonCoin {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;
    address public minter;
 
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    event Approval(address indexed _from, address indexed _to, uint256 _value);
    event Transfer(address indexed _owner, address indexed _spender, uint256 _value);
    event Mint(address indexed _to, uint256 _value);
 
    constructor() {
        symbol = "PTON";
        name = "Princeton Coin";
        decimals = 2;
        _totalSupply = 100000;
        minter = msg.sender;
        
        balances[msg.sender] = _totalSupply;
        // Note: address(0) is where coins go to be burned
        emit Transfer(address(0), msg.sender, _totalSupply);
    }
 
    function totalSupply() public view returns (uint) {
        return _totalSupply  - balances[address(0)];
    }
 
    function balanceOf(address tokenOwner) public view returns (uint balance) {
        return balances[tokenOwner];
    }
 
    function transfer(address to, uint tokens) public returns (bool success) {
        require(tokens <= balances[msg.sender]);
        balances[msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
 
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        require(tokens <= balances[from]);
        require(tokens <= allowed[from][to]);
        balances[from] -= tokens;
        allowed[from][msg.sender] -= tokens;
        balances[to] += tokens;
        emit Transfer(from, to, tokens);
        return true;
    }
 
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
 
    function allowance(address tokenOwner, address spender) public view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

    function mint(address to, uint tokens) public returns (bool success) {
        require(msg.sender == minter);
        balances[to] += tokens;
        _totalSupply += tokens;
        emit Mint(to, tokens);
        return true;
    }

    function isMinter(address account) public view returns (bool result) {
        return account == minter;
    }
}