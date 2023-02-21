FROM ubuntu:14.04

ENV SERVER_PORT=9001
ENV SECRET=sudhasduh4sdf4848dfns
ENV DD_API_KEY=3563c589f39d6b0d423eeacbd2156b66
ENV EXPIRES_IN=3600s
ENV MONGO_DEBUG=false
ENV LANG pt_BR.UTF-8

RUN apt update
RUN apt install -y curl locales
RUN sudo apt-key update
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
RUN apt update -y
RUN apt install -y nodejs --force-yes
RUN localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias pt_BR.UTF-8
ENV LANG pt_BR.UTF-8

WORKDIR /app

COPY . /app

RUN npm install

RUN npm install pm2 -g

EXPOSE 9001

CMD [ "pm2-runtime", "start", "process.yml" ]