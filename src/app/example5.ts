export function example5() {
  console.log('1. Start');

  setTimeout(() => {
    console.log('2. Timeout callback');
  }, 0);

  const p = new Promise((resolve) => {
    console.log('3. Promise created');
    resolve(true);
  });

 p.then(() => {
    console.log('4. Promise resolve callback');
  });

  console.log('5. End');

  // ✅ outputs
  // 1. Start
  // 4. End
  // 3. Promise callback
  // 2. Timeout callback
}
