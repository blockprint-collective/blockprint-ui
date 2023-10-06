ARG node_version=20
ARG node_image=node:${node_version}

# STAGE 1: builder
FROM $node_image AS builder

COPY . /app/
WORKDIR /app

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
# install (dev) deps
RUN yarn

ENV NODE_ENV=production
# build (prod) app
RUN yarn build

# STAGE 2
FROM node:${node_version}-alpine AS production

EXPOSE 80 
ENV PORT=80
ENV prod_env=true

COPY ./start.sh /bin/start.sh
WORKDIR /app
RUN npm install --global pm2

COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/build ./.next

CMD ["/bin/start.sh"]
