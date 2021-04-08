// memory.grow(2); // 2 pages (two 64kb of memory - 128kb)
// store<u8>(0, 21);
// store<u8>(1, 99);

// export function readMemory(n: i32): i32 {
//   return load<u8>(n);
// }

export function isPrimeWasm(x: u32): bool {
  if (x < 2) {
    return false;
  }

  for (let i: u32 = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}
