window.function = function (textInput, width, height) {
  // Data input
  textInput = textInput.value ?? "";
  width = width.value ?? 100;
  height = height.value ?? 100;

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Scrollable Text Input</title>
    <style>
    
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${height}px;
        width: ${width}%;
        margin: 0;
        padding: 10px;
      }
      
      textarea {
        width: 100%;
        height: 100%;
        border: none;
        font-family: Inter, -apple-system, "system-ui", Roboto, sans-serif;
      }
      
    </style>
  </head>
  <body>
    <textarea>${textInput}</textarea>
  </body>
</html>
`;

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`;
  return uri; 
}
