const seededRandom = function (seed: number): () => number {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function (): number {
        return (s = s * a % m) / m;
    };
}

export default seededRandom