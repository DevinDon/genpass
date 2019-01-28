interface InputKey {
    prefix: string;
    suffix: string;
    length?: number;
}
export declare function generate(keys: InputKey): string;
export default generate;
