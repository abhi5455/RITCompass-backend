# RITCompass Backend

RITCompass is a **Generalized College Enquiry System** that provides structured, verified information about college procedures using **LangChain** and **semantic search**. It serves as a constrained, reliable alternative to searching for college-related queries.

## 🚀 Features
- 🔍 **Semantic Search with LangChain**
- 🏛 **MongoDB for structured information retrieval**

## 🛠️ Tech Stack
- **Backend:** Express.js, Node.js, TypeScript
- **Database:** MongoDB
- **Search & AI:** LangChain, OpenAI embeddings
- **Data Format:** Markdown


### Development
1. Clone the repository
2. Install the dependencies.
    ```bash
    npm install
   # or
    yarn install
    # or
    pnpm install
    ```
3. Create a `.env` file and populate it with the following environment variables.
    ```dotenv
    PORT=5000
    MONGO_URI=
    OPENAI_API_KEY=
    SECRET_KEY=
    ```
4. Start the development server.
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
5. The server would be running at [http://localhost:5000](http://localhost:5000) locally.

### Production

1. Clone the repository and install the dependencies and follow the above mentioned steps upto step 3.
2. Build the project.
    ```bash
    npm run build
    # or
    yarn build
    # or
    pnpm build
    ```
3. Start the production server.
    ```bash
    npm start
    # or
    yarn start
    # or
    pnpm start
    ```