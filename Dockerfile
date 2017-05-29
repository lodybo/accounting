FROM markhobson/node-chrome
RUN node -v
RUN npm -v

# Setup app folder
RUN mkdir /app
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN npm install

# Copy source
ADD . /app
RUN ls -l /app
