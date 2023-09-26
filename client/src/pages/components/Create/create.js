import React, { useState } from "react";
import styles from "./Create.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function Create() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    console.log(files);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/blog"} />;
  }

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={createNewPost}>
        <input
          className={styles.input}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />
        <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
        <ReactQuill
          theme="snow"
          value={content}
          modules={modules}
          formats={formats}
          onChange={(newValue) => setContent(newValue)}
        />
        <div className={styles.buttonDiv}>
          <button className={styles.button} type="submit">
            Create post
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
