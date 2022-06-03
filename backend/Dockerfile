FROM python:3.9

WORKDIR /be

COPY requirements.txt requirements.txt

# RUN apt install python3-flask

RUN pip install --upgrade pip \
    pip install -r requirements.txt --no-cache-dir

COPY . .