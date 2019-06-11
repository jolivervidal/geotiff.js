import { inflate } from 'pako/lib/inflate';
import BaseDecoder from './basedecoder';


export default class DeflateDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    try {
      return inflate(new Uint8Array(buffer)).buffer;
    } catch (e) {}
  }
}
