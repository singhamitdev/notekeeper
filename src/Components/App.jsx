import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(notesContent => (
        <Note 
          key={notesContent.key}
          titles={notesContent.title}
          content={notesContent.content}

        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
