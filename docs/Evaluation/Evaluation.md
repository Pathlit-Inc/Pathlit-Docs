---
sidebar_position: 4
---

# Evaluation Page Documentation

The Evaluation Page in our platform provides a comprehensive suite of metrics to assess the performance and efficiency of specific workflows when interacting with Large Language Models (LLMs). This documentation explains the metrics and features available on the Evaluation Page, including how to use a Judge LLM to critically assess the output of your workflows.

## How It Works

To evaluate a workflow:
1. **Upload your workflow** to the tool. This should be a predefined sequence of tasks or operations you've set up using one or more LLMs.
2. **Choose a Judge LLM.** Select an LLM that will serve as the "judge" for evaluating the output of your workflow. The Judge LLM assesses the effectiveness, accuracy, and relevance of the workflow's output against specific criteria or datasets.

## Metrics Explained

- **Target LLM:** The specific Large Language Model your workflow is designed to utilize.
- **Dataset:** The data set against which your workflow's output is evaluated. This could be a collection of texts, questions, or any relevant data specific to your workflow's domain.
- **BLEU (Bilingual Evaluation Understudy):** A metric for evaluating the quality of text that has been machine-translated from one language to another. Higher scores indicate better translation quality.
- **MMLU (Massive Multitask Language Understanding):** Measures the language model's understanding across a broad set of tasks and domains.
- **ROUGE (Recall-Oriented Understudy for Gisting Evaluation):** A set of metrics for evaluating automatic summarization of texts and the quality of machine-generated translations. It includes measures such as precision, recall, and F1 score.
- **LLM:** The Large Language Model used in the workflow.
- **LLM Judge:** The Large Language Model used to judge or evaluate the output of the workflow.
- **TN (True Negative):** The number of instances correctly identified as not fulfilling the criteria.
- **VDB (Vector Database):** Indicates whether the workflow utilizes a vector database for retrieving information or embedding.
- **TK (Total Knowledge):** The total number of knowledge fragments or pieces of information the workflow managed to utilize effectively.
- **TP (True Positive):** The number of instances correctly identified as fulfilling the criteria.
- **MT (Model Tuning):** Indicates if the workflow involved any fine-tuning or customization of the model.
- **FP (False Positive):** The number of instances incorrectly identified as fulfilling the criteria.
- **PP (Presence Penalty):** A metric that penalizes the repetition of information in the workflow's output, encouraging diversity in responses.
- **System Prompt:** The initial prompt or instruction given to the workflow to initiate the evaluation.
- **Details:** Additional information or comments about the evaluation process or outcome.
- **Cost:** The computational or financial cost associated with running the evaluation.
- **DT (Decision Threshold):** The threshold at which the model's output is considered positive or negative, relevant or irrelevant.
- **Status:** The current status of the evaluation process (e.g., In Progress, Completed, Failed).

## Conclusion

The Evaluation Page offers a detailed and nuanced framework for assessing the performance of workflows using LLMs. By understanding and utilizing these metrics, users can refine their workflows, improve efficiency, and achieve more accurate and relevant outputs. The Judge LLM feature further enhances this process by providing an expert evaluation of the workflow's effectiveness.
