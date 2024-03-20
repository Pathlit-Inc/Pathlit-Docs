
import Admonition from '@theme/Admonition';

# LLM App Installation Guide

The LLM App provides a plug-and-play solution for utilizing various HuggingFace models for a wide range of tasks such as summarizing documents, sentiment analysis, code generation, and more. This guide outlines the steps required to install and run the LLM App on different operating systems.

## Prerequisites

Before you begin the installation, ensure you have Python 3.11 installed. 

<Admonition type="warning">

**Note:** If you have Python 3.12 or later, please uninstall it before proceeding, else the installation will fail.

</Admonition>

## Installation Instructions

### Windows

1. Install Chocolatey with PowerShell:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

2. Install Node.js from [https://nodejs.org/en/download](https://nodejs.org/en/download).

3. Install Git.

4. Check if Anaconda or Miniconda is in your system path by executing `conda` in the shell. If no error occurs, download `Install_LLM_conda_win.ps1`; otherwise, download `Install_LLM_pyenv.ps1`. Open Windows PowerShell and execute the downloaded script. Follow the prompts during the installation.

5. Activate the Python environment where the installation took place and install `bitsandbytes-windows`:

```powershell
pip install git+https://github.com/Keith-Hon/bitsandbytes-windows.git
```

### Mac

1. Install Node.js and Portaudio with Python, and Git using Homebrew:

```bash
brew install nodejs portaudio python git
```

2. Follow a similar process as Windows for Anaconda/Miniconda and script execution, using the macOS scripts (`Install_LLM_conda_mac.sh` or `Install_LLM_pyenv.sh`).

3. Activate the Python environment and install `bitsandbytes`:

```bash
pip install bitsandbytes
```

### Ubuntu Linux

1. Update packages and install Node.js and Git:

```bash
sudo apt-get update
sudo apt-get install nodejs git
```

2. Follow similar steps as for Mac/Windows for checking Anaconda/Miniconda and executing the script, using the Ubuntu scripts (`Install_LLM_conda_ubuntu.sh` or `Install_LLM_pyenv.sh`).

3. Activate the Python environment and install `bitsandbytes`:

```bash
pip install bitsandbytes
```

### Common Instructions for All OS

After completing the OS-specific instructions, you are prompted to decide if you wish to install MongoDB for chat history persistence. 

#### Set Environment Variables

Set the following environment variables according to your usage:

- For OpenAI hosted LLMs: `OPENAI_API_KEY`
- For LLM G/W hosted LLMs: `LLM_GW_API_KEY`, `LLM_GW_WS`
- For ATG hosted LLMs: ATG_SERVER_TOKEN
- For Elastic DB: ELASTIC_USER, ELASTIC_SECRET_ID, ELASTIC_SECRET, ELASTIC_OPEN_API_URL, ELASTIC_PUBLIC_API_URL
- For MongoDB: MONGO_USER and MONGO_PASS
- For using the email agent: EMAIL_USER, EMAIL_PASS (your app key provided by the email service provider), email address of the desired default recipients should be configured under "recipients:" in <code>backend/config/LLMs.yml</code>. All email will be sent to these recipients along with those entered in the UI.


### Manual Instructions After Installation

Activate the Python environment and install additional packages:

#### For Windows, also install `bitsandbytes-windows`:

```bash
pip install git+https://github.com/Keith-Hon/bitsandbytes-windows.git
```

#### For all other os
```bash
pip install angle_emb
```


