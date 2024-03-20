---
sidebar_position: 2
---
# Advanced Settings for Chat UI

For those looking to fine-tune their experience, the Chat UI's advanced settings offer detailed control over the behavior and output of the Large Language Models (LLMs). These settings allow for precise adjustments, enabling you to experiment with how different parameters affect the interaction.

## Max Tokens (100-1000)

This slider adjusts the maximum length of the model's response, measured in tokens (words or pieces of words). Setting a higher number allows for longer, more detailed responses, while a lower number results in shorter, more concise replies.

## Temperature (0 to 1)

The temperature setting controls the creativity of the model's responses. A lower temperature (closer to 0) makes the model's replies more deterministic and predictable, while a higher temperature encourages more creative and varied responses. This setting is adjustable to two decimal places, such as 0.56.

## Top P (0 to 1)

Top P, also known as nucleus sampling, controls the diversity of the model's responses by limiting the probability mass considered for the responses. Adjusting this setting helps manage the balance between randomness and relevance in replies.

## Frequency Penalty (-2 to 2)

This setting adjusts how often the model should repeat the same line of thought or specific terms. A higher penalty discourages repetition, promoting more diverse and varied responses.

## Presence Penalty (-2 to 2)

Similar to the frequency penalty, the presence penalty discourages the model from revisiting topics or concepts it has already covered in the conversation. Adjusting this penalty helps keep the dialogue fresh and avoids circular responses.

## Conversation Mode Toggle

Switch between different modes of conversation. Each mode may affect how the model interprets the prompt and generates responses, allowing for dynamic changes in the flow of conversation.

## Persist Toggle

This toggle controls whether the context of the conversation is maintained across interactions. Enabling persistence allows for more coherent and continuous exchanges, while disabling it treats each prompt as an independent query.

## Context History Dropdown

Select how much of the previous conversation context the model should consider. Options include none, summary, and full, providing flexibility in how past interactions influence current responses.

## Prompt Format Dropdown

Choose from various prompt formats, including default, instruct, nsp (next sentence prediction), phind (pronoun hinting), wizard, mistral, and t2t (text-to-text). Each format influences how the model processes your prompts, offering unique approaches to interaction.

These advanced settings offer a deeper level of control over your interactions with LLMs in the Chat UI. Experimenting with different configurations can dramatically alter the nature of the conversation, unlocking new possibilities and insights.
