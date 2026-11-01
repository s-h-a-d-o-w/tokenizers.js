import Normalizer from "../Normalizer.js";
import { remove_accents } from "../../utils/core.js";

import type { TokenizerConfigNormalizerStripAccents } from "../../static/tokenizer.js";

/**
 * StripAccents normalizer removes all accents from the text.
 */
class StripAccents extends Normalizer {
  declare config: TokenizerConfigNormalizerStripAccents;
  /**
   * Remove all accents from the text.
   * @param text The input text.
   * @returns The normalized text without accents.
   */
  normalize(text: string): string {
    return remove_accents(text);
  }
}

export default StripAccents;
