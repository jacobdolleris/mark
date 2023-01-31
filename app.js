import { marked } from "marked";
document.getElementById('parsed').innerHTML =
marked.parse('# Marked in the browser');