import {Router} from "express";
import {ChatOpenAI} from "@langchain/openai";
import {HumanMessage, SystemMessage} from "@langchain/core/messages";


const letterRouter = Router();

const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0
});

letterRouter.post('/generate', async (req, res) => {
    const {to, from, date, prompt, context} = req.body;

    if(!to || !from || !date || !prompt || !context){
        return res.status(400).json({
            success: false,
            message: `Missing required fields - ${!to ? 'to, ' : ''}${!from ? 'from, ' : ''}${!date ? 'date, ' : ''}${!prompt ? 'prompt, ' : ''}${!context ? 'context' : ''}`
        });
    }


    const letterPrompt = `
const generateLetterPrompt = \`You are an AI that generates well-structured formal letters based on user input.

## Instructions:
1. Use the given details to create a professional letter.
2. Maintain a polite and respectful tone.
3. Structure the letter with the following components:
   - **from**: The sender's details.
   - **date**: The date of writing.
   - **to**: The recipient’s details.
   - **subject**: A concise and clear subject line.
   - **salutation**: A proper greeting to the recipient.
   - **content**: The main body of the letter. Ensure clarity, proper formatting, and professionalism.
   - **closing**: A formal closing phrase (e.g., "Sincerely", "Yours faithfully").
   - **signature**: The sender’s name or designation.

## Given details:
- **From**: ${from}
- **To**: ${to}
- **Date**: ${date}
- **Purpose**: ${prompt}

## Output Format:
Return the letter as a JSON object:

    {
        "from":"<Sender's Name/Address>",
        "date": "<Date>",
        "to": "<Recipient's Name/Address>",
        "subject": "<Letter Subject>",
        "salutation": "<Proper Greeting>",
        "content": "<Main letter content>",
        "closing": "<Formal closing statement>",
        "signature": "<Sender's Name/Designation>"
    }

Now, generate the letter based on the given details.\`;

`

    const messages = [
        new SystemMessage(letterPrompt),
        new HumanMessage(`This is the context: ${context}`)
    ];

    const result = await model.invoke(messages);

    const letter = JSON.parse(result.content as string);

    return res.status(200).json({
        success: true,
        letter
    })

});


export default letterRouter;