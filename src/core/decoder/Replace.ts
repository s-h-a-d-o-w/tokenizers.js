import Decoder from "../Decoder.js";
import { create_pattern } from "../../utils/core.js";
import { TokenizerConfigDecoderReplace } from "../../static/tokenizer.js";

class Replace extends Decoder {
  declare config: TokenizerConfigDecoderReplace;
  pattern: RegExp | null;

  /**
   * @param config The configuration object for the decoder.
   */
  constructor(config: TokenizerConfigDecoderReplace) {
    super(config);
    // Compile once: decode_chain() is called for every decode.
    this.pattern = create_pattern(this.config.pattern);
  }

  decode_chain(tokens: string[]): string[] {
    const content = this.config.content ?? "";
    const pattern = this.pattern;
    return pattern === null
      ? tokens
      : tokens.map((token) => token.replaceAll(pattern, content));
  }
}

export default Replace;
