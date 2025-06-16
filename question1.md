# Question 1: Identify the Errors in the JavaScript Program

## Original Code:
```javascript
function find(arr) {
    const frequencyMap = {};
    arr.forEach((element) => {
        if (frequencyMap[element]) {
            frequencyMap[element] = frequencyMap.element + 1;
        }
        frequencyMap[element] = 1;
    });

    return frequencyMap;
}

find(['hello', 'world', 'hello', 'india', 'world']);
// Expected Output: {hello:2, world:2, india:1}
```

---

## Issues Identified:

### 1. Incorrect Property Access:
- `frequencyMap.element` is used in the code.
- This tries to access a property literally named `element`, not the value of the `element` variable.
- Since such a property does not exist, it returns `undefined`. Then `undefined + 1` evaluates to `NaN`.

**Correct Approach:**
Use bracket notation to dynamically access the value associated with a key:
```javascript
frequencyMap[element]
```

### 2. Missing `else` Block:
- The line `frequencyMap[element] = 1;` is placed outside the `else` block.
- This causes the key to be reset to `1` even after it was incremented inside the `if` block.
- As a result, all counts become `1` regardless of repetitions.

**Fix:**
Use an `else` block to assign `1` only if the element is not already present.

---

## Corrected Version:
```javascript
function find(arr) {
  const frequencyMap = {};

  arr.forEach((element) => {
    if (frequencyMap[element]) {
      frequencyMap[element] = frequencyMap[element] + 1;
    } else {
      frequencyMap[element] = 1;
    }
  });

  return frequencyMap;
}

console.log(find(['hello', 'world', 'hello', 'india', 'world']));
// Output: { hello: 2, world: 2, india: 1 }
```

---

## Summary:
- Use bracket notation to dynamically access object keys using variables.
- Ensure that assignment statements are not placed in logic branches where they override previous values unintentionally.
- Use `else` blocks where mutually exclusive conditions are required.
