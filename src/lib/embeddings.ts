// import { OpenAIApi, Configuration } from "openai-edge";
import OpenAI from "openai";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw Error("OPENAI_API_KEY is not set");
}

// const openai = new OpenAIApi(config);
const openai = new OpenAI({ apiKey });

//const modelName = "text-embedding-ada-002";
const modelName = "text-embedding-3-small";

export async function getEmbeddings(text: string) {
  try {
    // const response = await openai.createEmbedding({
    //   model: modelName,
    //   input: text.replace(/\n/g, " "),
    // });
    const response = await openai.embeddings.create({
      model: modelName,
      input: text.replace(/\n/g, " "),
      // input: text,
    });
    // const result = await response.json();
    const embedding = response.data[0].embedding;

    if (!embedding) throw Error("Error generating embedding.");
    console.log(embedding);

    // return result.data[0].embedding as number[];
    return embedding as number[];
  } catch (error) {
    console.log("error calling openai embeddings api", error);
    throw error;
  }
}

// "openai-edge": "^1.2.2",
// "openai": "^4.65.0",

// import OpenAI from "openai";

// const apiKey = process.env.OPENAI_API_KEY;

// if (!apiKey) {
//   throw Error("OPENAI_API_KEY is not set");
// }

// const openai = new OpenAI({ apiKey });
// const modelName = "text-embedding-3-small";
// // const modelName = "text-embedding-ada-002";

// export default openai;

// export async function getEmbedding(text: string) {
//   const response = await openai.embeddings.create({
//     model: modelName,
//     input: text,
//   });

//   const embedding = response.data[0].embedding;

//   if (!embedding) throw Error("Error generating embedding.");

//   console.log(embedding);

//   return embedding;
// }
