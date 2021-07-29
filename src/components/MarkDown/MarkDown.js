/* eslint-disable react/no-danger */
// import "./MarkDown.css";
// import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// // import SyntaxHighlighter from "react-syntax-highlighter";
// // import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// // import VisibilityIcon from "@material-ui/icons/Visibility";

// function Markdown() {
//   // const [input, setInput] = useState("");

//   // useEffect(() => {
//   //   console.log(setInput);
//   // });

//   const markdown = `
//   # Header 1
//   ## Header 2

//   _ italic _

//   ** bold **

//   <b> bold Html </b>
//   `;

//   return (
//     // <div className="App">
//     <ReactMarkdown source={markdown} />
//     // </div>
//   );
//   // <div className="App">
//   //   <div className="cont">
//   //     <div className="nav">
//   //       <VisibilityIcon />
//   //       MARKDOWN
//   //     </div>
//   //     <textarea
//   //       className="textarea"
//   //       value={input}
//   //       // // eslint-disable-next-line jsx-a11y/no-autofocus
//   //       // autoFocus
//   //       onChange={(e) => setInput(e.target.value)}
//   //     />
//   //   </div>

//   //   <div className="cont">
//   //     <div className="nav">
//   //       <VisibilityIcon />
//   //       PREIVEW
//   //     </div>
//   //     <ReactMarkdown
//   //       source={input}
//   //       // renderers={{
//   //       //   // eslint-disable-next-line no-use-before-define
//   //       //   code: Component,
//   //       // }}
//   //       className="markdown"
//   //     />
//   //   </div>
//   // </div>
// }

// // eslint-disable-next-line react/prop-types
// // const Component = ({ value, language }) => {
// //   // eslint-disable-next-line no-unused-vars
// //   const codeString = "(num) => num + 1";
// //   return (
// //     <SyntaxHighlighter language={language ?? null} style={docco}>
// //       {value ?? ""}
// //     </SyntaxHighlighter>
// //   );
// // };
// export default Markdown;

import "./MarkDown.css";
import React, { Component, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import VisibilityIcon from "@material-ui/icons/Visibility";

const marked = require("marked");

class Markdown extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    markdown: "",
  };

  updateMarkdown = function (markdown) {
    this.setState({ markdown });
  };

  // const [input, setInput] = useState("");

  // useEffect(() => {
  //   console.log(setInput);
  // });
  render() {
    const { markdown } = this.state;
    return (
      <div className="App">
        <div className="cont">
          <div className="nav">
            <VisibilityIcon />
            MARKDOWN
          </div>
          <textarea
            className="textarea"
            value={markdown}
            // // eslint-disable-next-line jsx-a11y/no-autofocus
            // autoFocus
            onChange={(e) => this.updateMarkdown(e.target.value)}
          />
        </div>

        <div className="cont">
          <div className="nav">
            <VisibilityIcon />
            PREIVEW
          </div>
          <div
            value={markdown}
            // renderers={{
            //   // eslint-disable-next-line no-use-before-define
            //   code: Component,
            // }}
            className="markdown"
          >
            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Markdown;
