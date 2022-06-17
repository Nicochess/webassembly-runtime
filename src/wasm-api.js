import { instantiateStreaming } from "@assemblyscript/loader";

export default instantiateStreaming(
    fetch('./wasm-api.wasm')
).then(rawModule => Object.assign({}, rawModule, {
    scramble: input => {
        const pInput = rawModule.__retain(rawModule.__allocString(input));

        const pOutput = rawModule.scramble(pInput);

        const result = rawModule.__getString(pOutput);
        rawModule.__release(pInput);
        rawModule.__release(pOutput);
        return result;
    }
}));