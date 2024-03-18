import { DocumentInterface } from "@langchain/core/documents";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

async function generateEmbeddings() {
  const loader = new DirectoryLoader(
    "src/app/",
    {
      ".tsx": (path) => new TextLoader(path),
    },
    true,
  );

  const docs = (await loader.load()).filter((doc) =>
    doc.metadata.source.endsWith("page.tsx ").map((doc: DocumentInterface) => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/") // Replace \\ with /
          .split("/src/app")[1]
          .split("/page.")[0] || "/";

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "") // Remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();
      return {
        pageContent: pageContentTrimmed,
        metadata: url,
      };
    }),
  );

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

  const splitdocs = await splitter.splitDocuments(docs);
}

generateEmbeddings();
