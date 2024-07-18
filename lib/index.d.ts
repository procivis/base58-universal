declare module '@procivis/base58-universal' {

    function encode(input: Uint8Array, maxline?: number): string;

    function decode(input: string): Uint8Array;
}