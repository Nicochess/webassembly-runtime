async function instantiate(module, imports = {}) {
  const { exports } = await WebAssembly.instantiate(module, imports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    isPrime(number) {
      // assembly/index/isPrime(i32) => bool
      return exports.isPrime(number) != 0;
    },
  }, exports);
  return adaptedExports;
}
export const {
  add,
  subtract,
  multiply,
  divide,
  isPrime,
  countPrimes
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
  }
))(new URL("wasm-api.wasm", import.meta.url));
