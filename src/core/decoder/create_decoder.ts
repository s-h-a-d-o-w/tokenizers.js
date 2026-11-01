import ByteLevel from "./ByteLevel.js";
import WordPiece from "./WordPiece.js";
import Metaspace from "./Metaspace.js";
import BPE from "./BPE.js";
import CTC from "./CTC.js";
import Sequence from "./Sequence.js";
import Replace from "./Replace.js";
import Fuse from "./Fuse.js";
import Strip from "./Strip.js";
import ByteFallback from "./ByteFallback.js";

import type Decoder from "../Decoder.js";
import type { TokenizerConfigDecoder } from "../../static/tokenizer.js";

function create_decoder(config: TokenizerConfigDecoder): Decoder | null {
  if (config === null) return null;

  switch (config.type) {
    case "ByteLevel":
      return new ByteLevel(config);
    case "WordPiece":
      return new WordPiece(config);
    case "Metaspace":
      return new Metaspace(config);
    case "BPEDecoder":
      return new BPE(config);
    case "CTC":
      return new CTC(config);
    case "Sequence":
      return new Sequence(config);
    case "Replace":
      return new Replace(config);
    case "Fuse":
      return new Fuse(config);
    case "Strip":
      return new Strip(config);
    case "ByteFallback":
      return new ByteFallback(config);
    default:
      throw new Error(`Unknown Decoder type: ${(config as any).type}`);
  }
}

export default create_decoder;
