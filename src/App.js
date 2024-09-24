import './App.css';
import {useState} from "react";
import {marked} from "marked";

marked.setOptions({
    breaks: true,
})

const renderer = new marked.Renderer();

const defaultMarkdown = "# Markdown Previewer\n" +
    "\n" +
    "## Features\n" +
    "\n" +
    "- **Live Preview:** See your changes in real-time.\n" +
    "- **Syntax Highlighting:** Enjoy clear formatting for headers, lists, and code.\n" +
    "\n" +
    "### Basic Syntax\n" +
    "\n" +
    "You can use various markdown features, such as:\n" +
    "\n" +
    "1. **Headers**\n" +
    "   - `# Header 1`\n" +
    "   - `## Header 2`\n" +
    "   - `### Header 3`\n" +
    "\n" +
    "2. **Text Formatting**\n" +
    "   - **Bold Text:** `**bold**`\n" +
    "   - *Italic Text:* `*italic*`\n" +
    "   - ~~Strikethrough~~: `~~strikethrough~~`\n" +
    "\n" +
    "3. **Lists**\n" +
    "   - Unordered List:\n" +
    "     - `* Item 1`\n" +
    "     - `* Item 2`\n" +
    "   - Ordered List:\n" +
    "     - `1. First item`\n" +
    "     - `2. Second item`\n" +
    "\n" +
    "4. **Links**\n" +
    "   - [OpenAI](https://www.openai.com): `[OpenAI](https://www.openai.com)`\n" +
    "\n" +
    "5. **Images**\n" +
    "   - ![Alt text](https://via.placeholder.com/150): `![Alt text](https://via.placeholder.com/150)`\n" +
    "\n" +
    "6. **Code Blocks**\n" +
    "   - Inline Code: `` `code` ``\n" +
    "   - Code Block:\n" +
    "     ```javascript\n" +
    "     function helloWorld() {\n" +
    "         console.log(\"Hello, world!\");\n" +
    "     }\n" +
    "     ```\n" +
    "\n" +
    "### Blockquotes\n" +
    "\n" +
    "> This is a blockquote. You can use it to highlight important information.\n" +
    "\n" +
    "### Horizontal Rule\n" +
    "\n" +
    "---";

function App() {
    const [preview, setPreview] = useState(defaultMarkdown);
  return (
    <>
      <textarea value={preview} onChange={(e)=> {setPreview(e.target.value)}} id ="editor"></textarea>
        <div id={"preview"} dangerouslySetInnerHTML={{ __html: marked(preview, renderer) }}></div>
    </>
  );
}

export default App;
