// SPDX-License-Identifier: NONE
pragma solidity 0.8.26;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract SolanexToken is ERC20Burnable, ERC20Permit {
  uint256 public constant MAX_SUPPLY = 3 * 1_000_000_000 * 1 ether;

  constructor() ERC20("Solanex", "SOLDEX") ERC20Permit("Solanex") {
    initialMint(_msgSender());
  }

  function initialMint(address owner_) internal {
    _mint(owner_, MAX_SUPPLY);
  }
}
