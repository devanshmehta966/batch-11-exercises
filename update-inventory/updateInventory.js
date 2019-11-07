
function createMapInventory(inventory) {
  return inventory.reduce((accumulator, itemInfoArray, index) => {
    const name = itemInfoArray[1];
    accumulator[name] = index.toString();
    return accumulator;
  }, {});
}

function sortInventory(inventory) {
  return inventory.sort((inventoryItem1, inventoryItem2) => {
    const nameA = inventoryItem1[1];
    const nameB = inventoryItem2[1];
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

function updateInventory(currentInventory, newInventory) {
  const currentInventoryMap = createMapInventory(currentInventory);
  newInventory.forEach((itemInfoArray) => {
    const name = itemInfoArray[1];
    const quantity = itemInfoArray[0];
    const indexOfCurrentItemInMap = currentInventoryMap[name];
    if (indexOfCurrentItemInMap) {
      const itemInCurrentInventory = currentInventory[parseInt(indexOfCurrentItemInMap, 10)];
      let currentItemQuantity = itemInCurrentInventory[0];
      currentItemQuantity += quantity;
      itemInCurrentInventory[0] = currentItemQuantity;
    } else {
      currentInventory.push(itemInfoArray);
    }
  });
  return sortInventory(currentInventory);
}

export {
  updateInventory,
};
