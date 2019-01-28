import { sha1, MD5 } from 'object-hash';

interface InputKey {
  prefix: string;
  suffix: string;
  length?: number;
}

export function generate(keys: InputKey): string {
  keys.length = keys.length || 6;
  return `${MD5(keys.prefix).slice(0, keys.length)}@${sha1(keys.suffix).slice(0, keys.length)}`;
}

export default generate;
