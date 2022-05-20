export function example5() {
  console.log('1. Start');

  setTimeout(() => {
    console.log('2. Timeout callback');
  }, 0);

  Promise.resolve().then(() => {
    console.log('3. Promise callback');
  });

  console.log('4. End');

  // ✅ outputs
  // 1. Start
  // 4. End
  // 3. Promise callback
  // 2. Timeout callback
}
