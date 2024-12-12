FROM python:latest

WORKDIR /code

RUN pip install poetry
RUN pip install jupyter

COPY . /code

# Configuration to avoid creating virtual environments inside the Docker container
RUN poetry config virtualenvs.create false

RUN poetry install

CMD ["jupyter", "notebook", "--port=8888", "--no-browser", "--ip=0.0.0.0", "--allow-root"]