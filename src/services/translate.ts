import OpenAiApi from "openai";
import Configuration from "openai";
import ChatCompletionRequestMessageRoleEnum from "openai";
import { type FromLanguage, type Language } from "../types.d";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const configuration = new Configuration({ apiKey });

const openai = new OpenAiApi(configuration);

export async function translate({
  FromLanguage,
  ToLanguage,
  text,
}: {
  FromLanguage: FromLanguage;
  ToLanguage: Language;
  text: string;
}) {
  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content:
        "You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also recive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[`and`]]`.",
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `Hola mundo {{Spanish}}[[English]]`,
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: `Hello world`,
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: `How are you? {{Español}}[[English]]`,
    },
  ];
}

//terminar algun dia
//https://www.youtube.com/watch?v=kZhabulNCUc