import Admonition from '@theme/Admonition';

## Starting the LLM App

### Start the LLM Server

Windows:

```cmd
llm_server
```

Mac/Ubuntu:

```bash
chmod +x llm_server.sh && ./llm_server.sh
```

<Admonition type="info">

The server starts on port 8000 by default. Set the `LLM_SERVER` environment variable to use a different port.

</Admonition>

### Start MongoDB Server

If MongoDB is installed, start it by specifying the data folder path:

```bash
"mongodb_executable_path" --dbpath="data_folder_path" --bind_ip 127.0.0.1
```

### Start the LLM UI

Open a new command prompt or shell and start the LLM UI:

Windows:

```cmd
llm_ui
```

Mac/Ubuntu:

```bash
chmod +x llm_ui.sh && ./llm_ui.sh
```

## Additional Configuration

## Additional Configuration

This section includes additional instructions for running the app with TLS, enabling GPU support, Docker and Kubernetes deployment, and other configurations.

## Start LLM App

1. **Start the LLM server**:
   - Windows: Execute `llm_server`.
   - Mac/Ubuntu: Execute `chmod +x llm_server.sh` followed by `./llm_server.sh`.

   <Admonition type="info">
   The above commands will start the server on the default port 8000. If you wish the server to listen on some other port, set the environment variable LLM_SERVER to the desired port number before executing the above steps.
   </Admonition>

2. **Start MongoDB server** if you selected to install or if you already have it:
   - Open a command prompt or a shell based on your OS.
   - Execute `"mongodb_executable_path" --dbpath="data_folder_path" --bind_ip 127.0.0.1`.
     For example, in Windows: `"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="d:\mongodb\data" --bind_ip 127.0.0.1`.

3. **Start the LLM UI**:
   - Open another command prompt or shell depending on your OS.
   - Windows: Execute `llm_ui`.
   - Mac/Ubuntu: Execute `chmod +x llm_ui.sh` followed by `./llm_ui.sh`.

## Run with TLS

To start the server and the UI with self-signed certificates, execute `tlsconfig.ps1` (Windows) or `tlsconfig.sh` (Mac/Ubuntu). Then, start the server with the parameters `--key [path to the key file] --cert [path to the cert file]` and the UI with the parameter `--https`.

## GPU Support

For CUDA GPU support, install PyTorch using the link: `pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118`. If a GPU is not available, uncomment the corresponding lines in `requirements.txt` before executing it. Also, install AutoGPTQ with: `pip install auto-gptq --extra-index-url https://huggingface.github.io/autogptq-index/whl/cu118/`.

## Docker

Dockerfiles for building the LLM server and UI are available under the `docker` folder. Use the following commands to build the docker images:

- `docker build -t llm_server -f docker/llm_server.dockerfile .`
- `docker build -t llm_ui -f docker/llm_ui.dockerfile .`

For a Kubernetes environment, build the UI with a different server DNS and port:

- `docker build -t llm_ui --build-arg SERVER_DNS=llm-server-svc --build-arg SERVER_PORT=[port] -f docker/llm_ui.dockerfile .`

Create a `.env` file with necessary variables and run the docker containers as instructed, adjusting paths and ports as needed.

# Docker Configuration

## Environment Variables

For configuring your Docker instance, specify the following variables in your `.env` file. This setup is crucial for ensuring your Docker environment is tailored to your specific needs.

<table>
<thead>
<tr>
<th width="222">Variable</th>
<th>Description</th>
<th width="151">Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>LLM_GW_API_KEY</td>
<td>API key for LLM Gateway</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>LLM_GW_WS</td>
<td>WebSocket endpoint for LLM Gateway</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>ELASTIC_DB_INDEX</td>
<td>Index for ElasticSearch database</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>ELASTIC_OPEN_API_URL</td>
<td>OpenAPI URL for ElasticSearch</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>ELASTIC_PUBLIC_API_URL</td>
<td>Public API URL for ElasticSearch</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>ELASTIC_SECRET</td>
<td>Secret key for ElasticSearch</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>ELASTIC_SECRET_ID</td>
<td>Secret ID for ElasticSearch</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>ELASTIC_USER</td>
<td>Username for ElasticSearch</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>OPENAI_API_KEY</td>
<td>API key for OpenAI services</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>EMAIL_USER</td>
<td>Email account username for sending emails</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>EMAIL_PASS</td>
<td>Email account password for sending emails</td>
<td>String</td>
<td></td>
</tr>
<tr>
<td>HF_KEY</td>
<td>API key for Hugging Face models</td>
<td>String</td>
<td></td>
</tr>
</tbody>
</table>

These variables play a crucial role in the functionality and security of your Dockerized application, allowing for a highly customizable and scalable environment.

### Running Docker Containers

Run the docker containers using the commands below. Make sure to replace `/path/to/env/file` and `[host port]` with your actual file path and port number.

```bash
docker run --env-file /path/to/env/file -p [host port]:8000 llm_server
docker run -p 3000:3000 llm_ui
```

### Chat Persistence Feature

To enable the chat persistence feature, first download a MongoDB docker image, then run it using the command:

```bash
docker run -p 27017:27017 [mongodb image]
```

### Accessing the Application

After starting the docker containers, open a browser and navigate to `localhost:3000` to start using the application.

## Docker Compose Usage

Docker Compose simplifies the process of managing multi-container Docker applications. Here's how to use it effectively:

1. **Building and Starting Containers**:
   Begin by building the images with Docker Compose, then start the containers.

```bash
docker-compose build
# Wait approximately 15 minutes, then
docker-compose up
```

2. **Shutting Down**:
   To stop and remove all the containers defined in the `docker-compose.yml` file:

```bash
docker-compose down
```

3. **Troubleshooting on Windows**:
   If you encounter issues running Docker Compose on Windows, follow these steps:

- Try forcing a rebuild and re-creation of your Docker containers:

```bash
docker-compose up --force-recreate --build --always-recreate-deps --remove-orphans
```

- If the issue persists, completely clean up Docker volumes and containers:

```bash
docker-compose down
docker system prune --volumes
```

- Locate Docker's file storage:
  
  Typically found in `C:\Users\user\AppData\Local\Docker\wsl`.

- Shutdown Docker and the WSL (Windows Subsystem for Linux) environment:

```bash
# Turn off Docker
# Open a terminal and run:
wsl --shutdown
```

- Use Diskpart to compact the VHD file:

```bash
diskpart
# In Diskpart, run:
select vdisk file=C:\Users\user\AppData\Local\Docker\wsl\data\ext4.vhdx
compact vdisk
# Exit Diskpart
```

- Restart Docker and rerun Docker Compose:

```bash
# Start Docker again
docker-compose up --force-recreate --build --always-recreate-deps --remove-orphans
```

Remember, these steps are particularly relevant for troubleshooting on Windows systems. Adjust paths and commands as necessary for your setup.


## Kubernetes

For Kubernetes deployment, follow these steps to ensure proper configuration. This approach is experimental and may need adjustments based on your environment.

1. **Build the UI Docker Image**:
   Ensure that the Docker container image for the UI is built with specific server DNS and port arguments. Replace `[port exposed by LLM server service]` with the actual port number.

```bash
docker build -t llm_ui --build-arg SERVER_DNS=llm-server-svc --build-arg SERVER_PORT=[port exposed by LLM server service] -f docker/llm_ui.dockerfile .
```

2. **Create a Secret from the .env File**:
   Convert your `.env` file containing environment variables into a Kubernetes secret. Replace `/path/to/env/file` with the actual path to your `.env` file.

```bash
kubectl create secret generic llm-server-secret --from-env-file=/path/to/env/file
```

3. **Deploy the LLM Application**:
   Apply the Kubernetes configuration files to deploy the application.

```bash
kubectl apply -f k8s
```

<Admonition type="warning">

**Note**: Kubernetes deployment and functionality are not yet fully tested. Use at your own risk. If you encounter any issues, please contribute fixes back to the project.

</Admonition>


## HELM

The HELM chart in the `helm` folder can be used for installation, but it is also experimental. Contributions are welcome to improve these configurations.

