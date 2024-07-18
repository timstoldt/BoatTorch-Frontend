FROM node:18-alpine as build
WORKDIR /usr/app
COPY . /usr/app
RUN yarn install
COPY . .
RUN yarn build

FROM nginx
EXPOSE 81
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html