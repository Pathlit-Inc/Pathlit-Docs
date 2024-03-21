import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Large Language Models (LLMs)

This document presents an organized overview of various Large Language Models (LLMs) from different creators, such as Meta, Google, and OpenAI. Here you'll find information on their specifications and intended use cases.
<!-- ADD ADDITIONAL LLM VENDORS HERE -->
<Tabs
  defaultValue="meta"
  values={[
    { label: 'OpenAI', value: 'openai' },
    { label: 'Meta', value: 'meta' },
    { label: 'Google', value: 'google' },
    { label: 'Amazon', value: 'amazon' },
    { label: 'Microsoft', value: 'microsoft' },
    { label: 'Mistral', value: 'mistral' },
  ]}>




<!-- ADD ALL THE OPENAI MODELS HERE -->
<TabItem value="openai">

## OpenAI's LLMs

<Tabs
  defaultValue="gpt-3-5-turbo"
  values={[
    { label: 'GPT-3.5-turbo-1106', value: 'gpt-3-5-turbo' },
    { label: 'GPT-4-1106-preview', value: 'gpt-4-preview' },
  ]}>

<TabItem value="gpt-3-5-turbo">

### GPT-3.5-turbo-1106

- **Creator:** OpenAI
- **Parameters:** Assumed to align with GPT-3.5's parameters, potentially in the hundreds of billions.
- **Specialization:** High-speed, responsive interaction for a variety of use cases.
- **Description:** An iteration of the GPT-3.5 model with optimizations for turbocharged performance, maintaining the model's robustness while enhancing speed.

</TabItem>

<TabItem value="gpt-4-preview">

### GPT-4-1106-preview

- **Creator:** OpenAI
- **Parameters:** Likely to exceed those of GPT-3.5, reflecting the next step in GPT architecture.
- **Specialization:** Advanced AI applications previewing the capabilities of the next generational leap in language models.
- **Description:** A sneak peek at the potential of GPT-4, offering insights into the advancements in natural language processing and generation.

</TabItem>

</Tabs>
</TabItem>






<!-- ADD ALL THE META MODELS HERE -->
<TabItem value="meta">

## Meta's LLMs

<Tabs
  defaultValue="llama2-13b"
  values={[
    { label: 'Llama2-13b-chat', value: 'llama2-13b' },
    { label: 'Llama2-70b-chat', value: 'llama2-70b' },
  ]}>

<TabItem value="llama2-13b">

### Meta Llama2-13b-chat

- **Creator:** Meta Platforms, Inc.
- **Parameters:** 13 billion.
- **Specialization:** Chat and conversational AI.
- **Description:** Optimized for engaging and detailed conversations, ideal for chat applications.

</TabItem>

<TabItem value="llama2-70b">

### Meta Llama2-70b-chat

- **Creator:** Meta Platforms, Inc.
- **Parameters:** 70 billion.
- **Specialization:** Advanced deep learning with extensive contextual understanding.
- **Description:** Suitable for nuanced conversation generation across a wide array of topics.

</TabItem>

</Tabs>
</TabItem>






<!-- ADD ALL THE GOOGLE MODELS HERE -->
<TabItem value="google">

## Google's LLMs

<Tabs
  defaultValue="gemini"
  values={[
    { label: 'Gemini 1.0 Pro', value: 'gemini' },
    { label: 'Gemma-7b', value: 'gemma-7b' },
    { label: 'Gemma-7b-it', value: 'gemma-7b-it' },
    { label: 'Gemma-2b', value: 'gemma-2b' },
    { label: 'Gemma-2b-it', value: 'gemma-2b-it' },
  ]}>

<TabItem value="gemini">

### Gemini 1.0 Pro

- **Creator:** Presumed independent entity
- **Parameters:** Estimated at 1 billion
- **Specialization:** Professional-level conversational capabilities
- **Description:** Engineered for depth in conversation, this model can engage in complex dialogues across various professional domains.

</TabItem>

<TabItem value="gemma-7b">

### Google Gemma-7b

- **Creator:** Google.
- **Parameters:** 7 billion.
- **Specialization:** Versatile applications in multiple languages.
- **Description:** A general-purpose model designed for diverse language tasks and adaptability.

</TabItem>

<TabItem value="gemma-7b-it">

### Google Gemma-7b-it

- **Creator:** Google.
- **Parameters:** 7 billion
- **Specialization:** Tailored for tasks requiring proficiency...
- **Description:** Provides nuanced understanding and generation...

</TabItem>

<TabItem value="gemma-2b">

### Google Gemma-2b

- **Creator:** Google.
- **Parameters:** 2 billion.
- **Specialization:** Efficient language processing for tasks with fewer computational demands.
- **Description:** A compact model that balances advanced research and efficiency in language tasks.

</TabItem>

<TabItem value="gemma-2b-it">

### Google Gemma-2b-it

- **Creator:** Google.
- **Parameters:** 2 billion
- **Specialization:** Streamlined processing...
- **Description:** Geared towards applications needing quick, efficient...

</TabItem>

</Tabs>
</TabItem>






<!-- ADD ALL THE AMAZON MODELS HERE -->
<TabItem value="amazon">
## Amazon's LLMs

<Tabs
  defaultValue="titan-text-lite"
  values={[
    { label: 'Amazon Titan-text-lite-v', value: 'titan-text-lite' },
    { label: 'Amazon Titan-text-expr', value: 'titan-text-expr' },
  ]}>

<TabItem value="titan-text-lite">

### Amazon Titan-text-lite-v

- **Creator:** Amazon Web Services
- **Parameters:** Undisclosed, with a focus on fast processing
- **Specialization:** Quick text response generation for scalable applications
- **Description:** A nimble version of Amazon's Titan model, designed for rapid interaction without sacrificing too much depth.

</TabItem>

<TabItem value="titan-text-expr">

### Amazon Titan-text-expr

- **Creator:** Amazon Web Services
- **Parameters:** Presumably higher than the lite version for more expressive interactions
- **Specialization:** Rich, nuanced text generation
- **Description:** Focused on generating expressive and detailed responses, this model caters to applications where depth of language is paramount.

</TabItem>

</Tabs>
</TabItem>






<!-- ADD ALL THE MICROSOFT MODELS HERE -->
<TabItem value="microsoft">
## Microsofts's LLMs

<Tabs
  defaultValue="microsoft-phi-2"
  values={[
   { label: 'Microsoft/Phi-2', value: 'microsoft-phi-2' },
  ]}>

<TabItem value="microsoft-phi-2">

### Microsoft/Phi-2

- **Creator:** Microsoft
- **Parameters:** Not publicly disclosed
- **Specialization:** Multi-purpose AI with a focus on versatility and integration
- **Description:** A testament to Microsoft's AI endeavors, aimed at offering both breadth and depth in language understanding and generation.

</TabItem>

</Tabs>

</TabItem>





<!-- ADD ALL THE MISTRAL MODELS HERE -->

<TabItem value="mistral">

## Mistral's LLMs

<Tabs
  defaultValue="mistral-8x7b"
  values={[
    { label: 'Mistral-8x7b-32768', value: 'mistral-8x7b' },
    { label: 'MistralAI/Mistral-7B-v0', value: 'mistralai-7b' },
  ]}>

<TabItem value="mistral-8x7b">

### Mistral-8x7b-32768

- **Creator:** Mistral AI or an associated entity.
- **Parameters:** Implied to be 56 billion (8x7b).
- **Specialization:** Handling extensive datasets and complex NLP tasks.
- **Description:** A model geared towards in-depth data analysis and sophisticated language comprehension.

</TabItem>

<TabItem value="mistralai-7b">

### MistralAI/Mistral-7B-v0

- **Creator:** Mistral AI.
- **Parameters:** 7 billion.
- **Specialization:** Broad-purpose language understanding and generation.
- **Description:** An early version of Mistral AI's 7B model, catering to a range of conversational and text-based tasks.

</TabItem>

</Tabs>
</TabItem>


</Tabs>







<!-- 
<Tabs
  defaultValue="gemini"
  values={[
    { label: 'Gemini 1.0 Pro', value: 'gemini' },
    { label: 'Meta Llama2-13b-chat', value: 'llama2-13b' },
    { label: 'Meta Llama2-70b-chat', value: 'llama2-70b' },
    { label: 'Amazon Titan-text-lite-v', value: 'titan-text-lite' },
    { label: 'Amazon Titan-text-expr', value: 'titan-text-expr' },
    { label: 'GPT-3.5-turbo-1106', value: 'gpt-3-5-turbo' },
    { label: 'GPT-4-1106-preview', value: 'gpt-4-preview' },
    { label: 'Mistral-8x7b-32768', value: 'mistral-8x7b' },
    { label: 'MistralAI/Mistral-7B-v0', value: 'mistralai-7b' },
    { label: 'Google/Gemma-7b', value: 'gemma-7b' },
    { label: 'Google/Gemma-7b-it', value: 'gemma-7b-it' },
    { label: 'Google/Gemma-2b', value: 'gemma-2b' },
    { label: 'Google/Gemma-2b-it', value: 'gemma-2b-it' },
    { label: 'Microsoft/Phi-2', value: 'microsoft-phi-2' },
  ]}>

<TabItem value="gemini">
  
### Gemini 1.0 Pro

- **Creator:** Assumed to be an independent or academic entity.
- **Parameters:** Estimated 1 billion (exact parameters not specified).
- **Specialization:** Presumably high-level conversation and professional applications.
- **Description:** A model likely designed for in-depth discussions and capable of handling complex, subject-specific queries.

</TabItem>

<TabItem value="llama2-13b">
  
### Meta Llama2-13b-chat

- **Creator:** Meta Platforms, Inc.
- **Parameters:** 13 billion.
- **Specialization:** Conversational AI for chat applications.
- **Description:** This model is optimized for engaging in detailed and meaningful conversations across various topics.

</TabItem>

<TabItem value="llama2-70b">
  
### Meta Llama2-70b-chat

- **Creator:** Meta Platforms, Inc.
- **Parameters:** 70 billion.
- **Specialization:** Deep learning and complex understanding of context.
- **Description:** An advanced conversational model capable of understanding and generating human-like text across a wider range of topics and contexts.

</TabItem>

<TabItem value="titan-text-lite">
  
### Amazon Titan-text-lite-v

- **Creator:** Amazon Web Services.
- **Parameters:** Details not specified, but 'lite' suggests fewer parameters for faster processing.
- **Specialization:** Quick response generation for text-based applications.
- **Description:** A lightweight model that balances performance and speed, suitable for applications where rapid responses are crucial.

</TabItem>

<TabItem value="titan-text-expr">
  
### Amazon Titan-text-expr

- **Creator:** Amazon Web Services.
- **Parameters:** Not specified, but likely more than the lite version.
- **Specialization:** Expressive text generation.
- **Description:** Built for applications requiring rich and nuanced language generation, where expressiveness is key.

</TabItem>

<TabItem value="gpt-3-5-turbo">
  
### GPT-3.5-turbo-1106

- **Creator:** OpenAI.
- **Parameters:** Assumed to be in the range of 175 billion, as per GPT-3's architecture.
- **Specialization:** Turbocharged conversational abilities.
- **Description:** A version of GPT-3 optimized for faster interactions, maintaining a high level of conversational intelligence and adaptability.
</TabItem>


<TabItem value="gpt-4-preview">

### GPT-4-1106-preview

- **Creator:** OpenAI.
- **Parameters:** Not explicitly stated but could potentially be an iteration of GPT-4 which may have more than GPT-3's 175 billion parameters.
- **Specialization:** A preview version, likely for testing next-generation language modeling capabilities.
- **Description:** Offers a glimpse into the advancements in language understanding and generation expected in GPT-4.

</TabItem>

<TabItem value="mistral-8x7b">

### Mistral-8x7b-32768

- **Creator:** Mistral AI or an associated entity.
- **Parameters:** Implied to be 56 billion (8x7b).
- **Specialization:** Capable of handling very large datasets or inputs, as suggested by the 32768 suffix.
- **Description:** A model presumably specialized for deep data analysis and complex natural language understanding tasks.

</TabItem>

<TabItem value="mistralai-7b">

### MistralAI/Mistral-7B-v0

- **Creator:** Mistral AI.
- **Parameters:** 7 billion.
- **Specialization:** General-purpose language understanding and generation.
- **Description:** Version 0 of Mistral AI's 7B model, likely tailored for a variety of conversational and text processing tasks.

</TabItem>

<TabItem value="gemma-7b">

### Google/Gemma-7b

- **Creator:** Google.
- **Parameters:** 7 billion.
- **Specialization:** General-purpose AI with a balance between performance and speed.
- **Description:** Google's mid-size model designed to be versatile across different languages and tasks.

</TabItem>

<TabItem value="gemma-7b-it">

### Google/Gemma-7b-it

- **Creator:** Google.
- **Parameters:** 7 billion, with a specialization in Italian language (implied by 'it').
- **Specialization:** Language-specific applications, particularly for Italian.
- **Description:** Tailored for nuanced understanding and generation of the Italian language, perfect for localization and regional applications.

</TabItem>

<TabItem value="gemma-2b">

### Google/Gemma-2b

- **Creator:** Google.
- **Parameters:** 2 billion.
- **Specialization:** Efficient processing for lower-resource tasks.
- **Description:** A compact model optimized for tasks that require less computational power, while still benefiting from Google's advanced AI research.

</TabItem>

<TabItem value="gemma-2b-it">

### Google/Gemma-2b-it

- **Creator:** Google.
- **Parameters:** 2 billion, focused on the Italian language.
- **Specialization:** Efficient Italian language processing.
- **Description:** Designed for Italian language tasks that need quick and efficient language processing capabilities.

</TabItem>

<TabItem value="microsoft-phi-2">

### Microsoft/Phi-2

- **Creator:** Microsoft.
- **Parameters:** Not specified but may be significant given Microsoft's investment in AI.
- **Specialization:** Likely a model with strong multitasking capabilities.
- **Description:** Represents Microsoft's foray into the next generation of language models, focusing on versatility and deep learning prowess.

</TabItem>






</Tabs>
 -->
