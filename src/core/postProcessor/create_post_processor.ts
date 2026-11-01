import TemplateProcessing from "./TemplateProcessing.js";
import ByteLevel from "./ByteLevel.js";
import BertProcessing from "./BertProcessing.js";
import RobertaProcessing from "./RobertaProcessing.js";
import Sequence from "./Sequence.js";

import type PostProcessor from "../PostProcessor.js";
import type { TokenizerConfigPostProcessor } from "../../static/tokenizer.js";

function create_post_processor(
  config: TokenizerConfigPostProcessor,
): PostProcessor | null {
  if (config === null) return null;

  switch (config.type) {
    case "TemplateProcessing":
      return new TemplateProcessing(config);
    case "ByteLevel":
      return new ByteLevel(config);
    case "BertProcessing":
      return new BertProcessing(config);
    case "RobertaProcessing":
      return new RobertaProcessing(config);
    case "Sequence":
      return new Sequence(config);
    default:
      throw new Error(`Unknown PostProcessor type: ${(config as any).type}`);
  }
}

export default create_post_processor;
