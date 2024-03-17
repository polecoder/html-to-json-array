let htmlElement = document.getElementById('htmlText');
let jsonElement = document.getElementById('jsonText');

document.getElementById('convertBtn').addEventListener('click', function() {
  if (htmlElement.value != '') {
    let lines = htmlElement.value.split('\n'); // Split the input by newlines directly
    let jsonLines = lines.map(line => JSON.stringify(line)); // Convert each line to a JSON string if needed
    jsonElement.value = '[\n  ' + jsonLines.join(',\n  ') + '\n]'; // Create a JSON array representation
  } 
});

document.getElementById('copy').addEventListener('click', function() {
  jsonElement.select();
  navigator.clipboard.writeText(jsonElement.value)
        .then(() => {
            const span = document.getElementById('copyText');
            const img = document.getElementById('copyImg');
            span.textContent = 'Copied!';
            img.src = './img/check.svg';
            setTimeout(() => {
                span.textContent = 'Copy code';
                img.src = './img/copy.svg';
            }, 2000);
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
});