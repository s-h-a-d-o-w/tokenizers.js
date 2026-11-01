import BertNormalizer from "./BertNormalizer.js";
import Precompiled from "./Precompiled.js";
import Sequence from "./Sequence.js";
import Replace from "./Replace.js";
import NFC from "./NFC.js";
import NFD from "./NFD.js";
import NFKC from "./NFKC.js";
import NFKD from "./NFKD.js";
import Strip from "./Strip.js";
import StripAccents from "./StripAccents.js";
import Lowercase from "./Lowercase.js";
import Prepend from "./Prepend.js";

import type { TokenizerConfigNormalizer } from "../../static/tokenizer.js";
import type Normalizer from "../Normalizer.js";

function create_normalizer(
  config: TokenizerConfigNormalizer,
): Normalizer | null {
  if (config === null) return null;

  switch (config.type) {
    case "BertNormalizer":
      return new BertNormalizer(config);
    case "Precompiled":
      return new Precompiled(config);
    case "Sequence":
      return new Sequence(config);
    case "Replace":
      return new Replace(config);
    case "NFC":
      return new NFC(config);
    case "NFD":
      return new NFD(config);
    case "NFKC":
      return new NFKC(config);
    case "NFKD":
      return new NFKD(config);
    case "Strip":
      return new Strip(config);
    case "StripAccents":
      return new StripAccents(config);
    case "Lowercase":
      return new Lowercase(config);
    case "Prepend":
      return new Prepend(config);
    default:
      throw new Error(`Unknown Normalizer type: ${(config as any).type}`);
  }
}

export default create_normalizer;
