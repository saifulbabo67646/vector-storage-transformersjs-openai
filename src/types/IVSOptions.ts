export interface IVSOptions {
  maxSizeInMB?: number; // The maximum size of the storage in megabytes. Defaults to 4.8. Cannot exceed 5.
  sentenceTransformerModel?: string; // The Transformers.js model used for generating embeddings. Defaults to 'text-embedding-ada-002'.
}
