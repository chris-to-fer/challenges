import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function addTag(newTag) {
    setTags([...tags, newTag]);
  }

  function deleteTag(name) {
    const filtered = tags.filter((e) => e !== name);
    setTags([...filtered]);
  }

  return (
    <main className="app">
      <Form onAddTag={addTag} />
      <List tags={tags} onDeleteTag={deleteTag} />
    </main>
  );
}
