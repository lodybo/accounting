FROM markhobson/node-chrome
RUN node -v
RUN npm -v

# Install dependencies
COPY package.json .
RUN npm install

# Copy source
COPY . .
