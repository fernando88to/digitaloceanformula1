FROM node:17.3.1 as dependencies
WORKDIR /front-end-nextjs
COPY package.json yarn.lock ./
RUN yarn install

FROM node:17.3.1 as builder
WORKDIR /front-end-nextjs
COPY . .
COPY --from=dependencies /front-end-nextjs/node_modules ./node_modules
RUN yarn build

FROM node:17.3.1-alpine as runner
RUN apk add --no-cache bash
WORKDIR /front-end-nextjs
ENV NODE_ENV production

RUN npm install pm2@5.2.0 -g


# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /front-end-nextjs/next.config.js ./
COPY --from=builder /front-end-nextjs/public ./public
COPY --from=builder /front-end-nextjs/.next ./.next
COPY --from=builder /front-end-nextjs/node_modules ./node_modules
COPY --from=builder /front-end-nextjs/package.json ./package.json
COPY --from=builder /front-end-nextjs/ecosystem.config.js ./ecosystem.config.js
COPY start.sh ./start.sh

RUN chmod +x ./start.sh

EXPOSE 3000


ENTRYPOINT ["./start.sh"]
