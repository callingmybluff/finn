FROM node:lts

WORKDIR /frontend
COPY package.json .
COPY yarn.lock .
RUN yarn install
RUN yarn global add serve
COPY . .
RUN yarn run build
CMD serve -s build -l 3000