const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat(name) {
    return [...cats, name]; // Creates a new array with the new cat at the end
  }
  
  function prependCat(name) {
    return [name, ...cats]; // Creates a new array with the new cat at the beginning
  }
  
  function removeLastCat() {
    return cats.slice(0, -1); // Creates a new array excluding the last cat
  }
  
  function removeFirstCat() {
    return cats.slice(1); // Creates a new array excluding the first cat
  }