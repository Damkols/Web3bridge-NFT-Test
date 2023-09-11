// SPDX-License-Identifier: MIT
pragma solidity > 0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract MemeNFT is ERC721URIStorage, Ownable {
    constructor() ERC721("Meme NFT", "MNFT") {}

     function mint(address _mintAddr, uint _tokenMintId, string calldata _metadataURI) external onlyOwner {
        require(_mintAddr != address(0), "cant mint to address zero");
        require(_tokenMintId > 0, "Token ID not valid");
        _mint(_mintAddr, _tokenMintId);
        _setTokenURI(_tokenMintId, _metadataURI);
    }
}