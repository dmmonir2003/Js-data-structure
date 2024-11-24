function joinArraysById(arr1, arr2) {
  const map = new Map();

  // Add all objects from arr1 to the map
  arr1.forEach(obj => {
    map.set(obj.id, { ...obj });
  });

  // Merge objects from arr2 into the map
  arr2.forEach(obj => {
    if (map.has(obj.id)) {
      map.set(obj.id, { ...map.get(obj.id), ...obj });
    } else {
      map.set(obj.id, { ...obj });
    }
  });

  // Convert map values to an array and sort by id
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}