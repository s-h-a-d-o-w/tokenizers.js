import UnicodeNormalizer from "./UnicodeNormalizer.js";

/**
 * A normalizer that applies Unicode normalization form KC (NFKC) to the input text.
 * Compatibility Decomposition, followed by Canonical Composition.
 */
class NFKC extends UnicodeNormalizer {
  form: "NFKC" = "NFKC";
}

export default NFKC;
