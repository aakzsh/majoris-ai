const { gpt } = require("gpti");

async function getGPTResponse(prompt, model, type) {
  const response = await gpt({
    prompt,
    model,
    type,
  });
  return response;
}

export default getGPTResponse;
