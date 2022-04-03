import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import styles from "./index.module.css";

interface IBodyMarkdownContentProps {
  content: string;
}

const BodyMarkdownContent = ({ content }: IBodyMarkdownContentProps) => (
  <div className={styles.container}>
    <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
  </div>
);

export default BodyMarkdownContent;
