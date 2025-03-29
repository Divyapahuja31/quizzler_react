const questions = [
    // HTML Questions (30)
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "Which tag is used to create a hyperlink in HTML?", options: ["<link>", "<a>", "<href>"], answer: "<a>" },
    { question: "Which HTML tag is used to define an unordered list?", options: ["<ol>", "<ul>", "<li>"], answer: "<ul>" },
    { question: "Which attribute is used to provide an alternative text for an image?", options: ["alt", "title", "src"], answer: "alt" },
    { question: "What is the correct HTML tag for inserting a line break?", options: ["<br>", "<break>", "<lb>"], answer: "<br>" },
    { question: "Which tag is used for creating a table row?", options: ["<td>", "<th>", "<tr>"], answer: "<tr>" },
    { question: "What is the purpose of the `<head>` tag in HTML?", options: ["To contain metadata", "To create the body content", "To define scripts"], answer: "To contain metadata" },
    { question: "Which tag is used to create a numbered list?", options: ["<ol>", "<ul>", "<li>"], answer: "<ol>" },
    { question: "What does the `<title>` tag define?", options: ["Page title in the browser", "Main heading", "Navigation bar"], answer: "Page title in the browser" },
    { question: "Which tag is used to embed an image in HTML?", options: ["<img>", "<image>", "<pic>"], answer: "<img>" },
  
    // CSS Questions (30)
    { question: "Which property is used to change text color in CSS?", options: ["font-color", "text-color", "color"], answer: "color" },
    { question: "What is the default position of an element in CSS?", options: ["static", "relative", "absolute"], answer: "static" },
    { question: "Which CSS property is used to change the background color?", options: ["color", "background-color", "bgcolor"], answer: "background-color" },
    { question: "Which property is used to set the font size?", options: ["font-size", "text-size", "size"], answer: "font-size" },
    { question: "Which CSS property makes text bold?", options: ["font-weight", "bold", "text-bold"], answer: "font-weight" },
    { question: "Which CSS unit is relative to the parent element’s font size?", options: ["px", "em", "rem"], answer: "em" },
    { question: "Which property controls the space between lines of text?", options: ["letter-spacing", "line-height", "word-spacing"], answer: "line-height" },
    { question: "Which CSS property makes a webpage responsive?", options: ["grid", "flexbox", "media queries"], answer: "media queries" },
    { question: "Which CSS property is used to make an element disappear?", options: ["visibility", "display", "opacity"], answer: "display" },
    { question: "Which CSS property sets an element’s transparency?", options: ["opacity", "transparent", "visibility"], answer: "opacity" },
  
    // JavaScript Questions (40)
    { question: "Which function is used to print something in JavaScript?", options: ["console.log()", "print()", "log()"], answer: "console.log()" },
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const"], answer: "var" },
    { question: "Which operator is used for strict comparison in JavaScript?", options: ["==", "===", "="], answer: "===" },
    { question: "Which method converts a string to uppercase?", options: ["toUpperCase()", "upperCase()", "toCaps()"], answer: "toUpperCase()" },
    { question: "Which function parses a string into an integer?", options: ["parseInt()", "toInt()", "convertInt()"], answer: "parseInt()" },
    { question: "Which object represents the browser window?", options: ["window", "document", "navigator"], answer: "window" },
    { question: "Which function is used to delay execution in JavaScript?", options: ["setTimeout()", "setInterval()", "delay()"], answer: "setTimeout()" },
    { question: "Which keyword is used to define an asynchronous function?", options: ["async", "await", "defer"], answer: "async" },
    { question: "What will `typeof null` return?", options: ["null", "undefined", "object"], answer: "object" },
    { question: "Which array method removes the last element?", options: ["pop()", "push()", "shift()"], answer: "pop()" },
    { question: "Which method adds a new element to an array?", options: ["push()", "unshift()", "add()"], answer: "push()" },
    { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Syntax Object Notation", "JavaScript Oriented Notation"], answer: "JavaScript Object Notation" },
    { question: "Which function is used to execute code at regular intervals?", options: ["setTimeout()", "setInterval()", "loop()"], answer: "setInterval()" },
    { question: "Which method converts an array into a string?", options: ["join()", "toString()", "convert()"], answer: "toString()" },
    { question: "Which symbol is used for function expressions in ES6?", options: ["=>", "->", "::"], answer: "=>" },
    { question: "Which function is used to merge two arrays?", options: ["concat()", "merge()", "combine()"], answer: "concat()" },
    { question: "Which loop will always execute at least once?", options: ["for", "while", "do-while"], answer: "do-while" },
    { question: "Which object stores local storage data?", options: ["localStorage", "sessionStorage", "windowStorage"], answer: "localStorage" },
    { question: "Which event is triggered when a user clicks on an element?", options: ["onClick", "onHover", "onPress"], answer: "onClick" },
    { question: "Which statement correctly declares a JavaScript class?", options: ["class MyClass {}", "MyClass = class {}", "new class MyClass {}"], answer: "class MyClass {}" },
    { question: "Which operator is used for exponentiation?", options: ["^", "**", "pow()"], answer: "**" },
    { question: "What does `NaN` stand for in JavaScript?", options: ["Not a Number", "Null and None", "Not a Null"], answer: "Not a Number" },
    { question: "Which loop is used to iterate over object properties?", options: ["for...in", "for...of", "foreach()"], answer: "for...in" },
    { question: "Which method returns the first matching element in JavaScript?", options: ["querySelector()", "getElementById()", "findElement()"], answer: "querySelector()" },
  ];
  
  export default questions;
  