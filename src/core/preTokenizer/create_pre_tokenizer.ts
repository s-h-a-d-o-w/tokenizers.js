import ByteLevel from "./ByteLevel.js";
import Whitespace from "./Whitespace.js";
import Metaspace from "./Metaspace.js";
import Split from "./Split.js";
import Punctuation from "./Punctuation.js";
import Digits from "./Digits.js";
import BertPreTokenizer from "./BertPreTokenizer.js";
import Replace from "./Replace.js";
import Sequence from "./Sequence.js";
import WhitespaceSplit from "./WhitespaceSplit.js";
import FixedLength from "./FixedLength.js";

import type PreTokenizer from "../PreTokenizer.js";
import type { TokenizerConfigPreTokenizer } from "../../static/tokenizer.js";

function create_pre_tokenizer(
  config: TokenizerConfigPreTokenizer,
): PreTokenizer | null {
  if (config === null) return null;

  switch (config.type) {
    case "BertPreTokenizer":
      return new BertPreTokenizer();
    case "Sequence":
      return new Sequence(config);
    case "Whitespace":
      return new Whitespace();
    case "WhitespaceSplit":
      return new WhitespaceSplit();
    case "Metaspace":
      return new Metaspace(config);
    case "ByteLevel":
      return new ByteLevel(config);
    case "Split":
      return new Split(config);
    case "Punctuation":
      return new Punctuation(config);
    case "Digits":
      return new Digits(config);
    case "Replace":
      return new Replace(config);
    case "FixedLength":
      return new FixedLength(config);
    default:
      throw new Error(`Unknown PreTokenizer type: ${config.type}`);
  }
}

export default create_pre_tokenizer;
