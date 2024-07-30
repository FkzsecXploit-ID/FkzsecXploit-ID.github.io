document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-button');
    const downloadButton = document.getElementById('download-button');
    const copyButton = document.getElementById('copy-button');
    const resultIframe = document.getElementById('result-iframe');
    const backgroundInput = document.getElementById('background');
    const frameContainer = document.querySelector('.frame-container');
    const inputColorLines = document.querySelector('#backgroundColor3'); // Mendapatkan elemen input untuk warna garis
    let selectedFontFamily = "Arial, sans-serif";
    let selectedBackgroundColor = "#000000";
    let selectedColorLine = "#ffffff"; // Default color for lines

    // Event listener untuk tombol generate
    generateButton.addEventListener('click', generateDeface);

    // Event listener untuk tombol download
    downloadButton.addEventListener('click', downloadHTML);

    // Event listener untuk tombol copy
    copyButton.addEventListener('click', copyCode);

    // Update font-family saat item dropdown dipilih
    const fontDropdownItems = document.querySelectorAll('.menu:nth-of-type(1) .submenu li');
    fontDropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            selectedFontFamily = this.getAttribute('data-font');
            document.getElementById('fonts').value = selectedFontFamily;
            document.querySelector('.menu:nth-of-type(1) .menu-item').textContent = this.textContent + ' ▼';
        });
    });

    // Update background color saat item dropdown dipilih
    const colorDropdownItems = document.querySelectorAll('.menu:nth-of-type(2) .submenu li');
    colorDropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            selectedBackgroundColor = this.getAttribute('data-color');
            if (frameContainer) {
                frameContainer.style.backgroundColor = selectedBackgroundColor;
            }
            backgroundInput.value = this.textContent;
            document.querySelector('.menu:nth-of-type(2) .menu-item').textContent = this.textContent + ' ▼';
        });
    });

    // Update warna garis saat item dropdown dipilih
    const backgroundColorDropdownItems3 = document.querySelectorAll('.menu:nth-of-type(3) .submenu li');
    backgroundColorDropdownItems3.forEach(item => {
        item.addEventListener('click', function() {
            const selectedColor = this.getAttribute('data-color');
            const selectedText = this.textContent;

            document.querySelector('.menu:nth-of-type(3) .menu-item').textContent = selectedText + ' ▼';
            inputColorLines.value = selectedText; // Update input text dengan warna yang dipilih
            selectedColorLine = selectedColor; // Update warna garis
        });
    });

    // Fungsi untuk menghasilkan dan menampilkan HTML hasil generate
    function generateDeface() {
        const author = document.getElementById('author').value;
        const alertMessage = document.getElementById('alert').value;
        const message = document.getElementById('message').value;
        const greetz = document.getElementById('greetz').value;
        const team = document.getElementById('team').value;
        const message2 = document.getElementById('message2').value;
        const imageURL = document.getElementById('imageURL').value;
        const soundURL = document.getElementById('soundURL').value;
        const marquee = document.getElementById('marquee').value;
        const alt = document.getElementById('alt').value;
        const imageWidth = document.getElementById('imageWidth').value || '100%';
        const imageHeight = document.getElementById('imageHeight').value || 'auto';
        const sizeh1 = document.getElementById('sizeh1').value || '13px';
        const sizep = document.getElementById('sizep').value || '9px';
        const marginh1 = document.getElementById('marginh1').value || '0';
        const marginp = document.getElementById('marginp').value || '0';
        const marginsound = document.getElementById('marginsound').value || '13px';
        const marginmarquee = document.getElementById('marginmarquee').value || '13px';
        const showLines = document.getElementById('show-lines-checkbox').checked;
        const efekf = document.getElementById('efekf').value;
        const marginemail = document.getElementById('marginemail').value || "14px";
        const emails = document.getElementById('emails').value;
        const fonts = selectedFontFamily;
        const sizeemail = document.getElementById('sizeemail').value || '12px';

        const lineHTML = showLines ? `<div class="full-width-line" style="background-color: ${selectedColorLine};"></div>` : '';

        const resultHTML = `
            <html>
            <head>
                <title>Deface Page</title>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap');
                body { 
                    background: ${selectedBackgroundColor}; 
                    color: #fff; 
                    text-align: center; 
                    font-family: ${fonts}; 
                    background-image: url('${backgroundInput.value}'); 
                    background-size: cover; 
                    background-position: center;
                }
                h1 { font-size: ${sizeh1}; margin: ${marginh1}; }
                .full-width-line { width: 100%; height: 2px; margin: 20px 0; background-color: ${selectedColorLine} }
                p { font-size: ${sizep}; margin: ${marginp}; }
                audio { margin: ${marginsound}; }
                marquee { margin: ${marginmarquee}; }
                .email { margin: ${marginemail}; font-size: ${sizeemail} }
                </style>
            </head>
            <body>
                <h1>${alertMessage} ${author}</h1>
                <p>${message}</p>
                <img src="${imageURL}" alt="${alt}" class="image" width="${imageWidth}" height="${imageHeight}">
                <p>${message2}</p>
                <marquee>${marquee}</marquee>
                ${lineHTML}
                <p>${greetz}</p>
                <p>${team}</p>
                <div class="email">${emails}</div>
                <audio controls autoplay loop>
                    <source src="${soundURL}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                ${efekf}
            </body>
            </html>
        `;

        const blob = new Blob([resultHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        resultIframe.src = url;
    }

    // Fungsi untuk mendownload file HTML
    function downloadHTML() {
        const author = document.getElementById('author').value;
        const alertMessage = document.getElementById('alert').value;
        const message = document.getElementById('message').value;
        const greetz = document.getElementById('greetz').value;
        const team = document.getElementById('team').value;
        const message2 = document.getElementById('message2').value;
        const imageURL = document.getElementById('imageURL').value;
        const soundURL = document.getElementById('soundURL').value;
        const marquee = document.getElementById('marquee').value;
        const alt = document.getElementById('alt').value;
        const imageWidth = document.getElementById('imageWidth').value || '100%';
        const imageHeight = document.getElementById('imageHeight').value || 'auto';
        const sizeh1 = document.getElementById('sizeh1').value || '13px';
        const sizep = document.getElementById('sizep').value || '9px';
        const marginh1 = document.getElementById('marginh1').value || '0';
        const marginp = document.getElementById('marginp').value || '0';
        const marginsound = document.getElementById('marginsound').value || '13px';
        const marginmarquee = document.getElementById('marginmarquee').value || '13px';
        const showLines = document.getElementById('show-lines-checkbox').checked;
        const efekf = document.getElementById('efekf').value;
        const marginemail = document.getElementById('marginemail').value || "14px";
        const emails = document.getElementById('emails').value;
        const fonts = selectedFontFamily;
        const sizeemail = document.getElementById('sizeemail').value || '12px';

        const lineHTML = showLines ? `<div class="full-width-line" style="background-color: ${selectedColorLine};"></div>` : '';

        const resultHTML = `
            <html>
            <head>
                <title>Deface Page</title>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap');
                body { 
                    background: ${selectedBackgroundColor}; 
                    color: #fff; 
                    text-align: center; 
                    font-family: ${fonts}; 
                    background-image: url('${backgroundInput.value}'); 
                    background-size: cover; 
                    background-position: center;
                }
                h1 { font-size: ${sizeh1}; margin: ${marginh1}; }
                .full-width-line { width: 100%; height: 2px; margin: 20px 0; background-color: ${selectedColorLine} }
                p { font-size: ${sizep}; margin: ${marginp}; }
                audio { margin: ${marginsound}; }
                marquee { margin: ${marginmarquee}; }
                .email { margin: ${marginemail}; font-size: ${sizeemail} }
                </style>
            </head>
            <body>
                <h1>${alertMessage} ${author}</h1>
                <p>${message}</p>
                <img src="${imageURL}" alt="${alt}" class="image" width="${imageWidth}" height="${imageHeight}">
                <p>${message2}</p>
                <marquee>${marquee}</marquee>
                ${lineHTML}
                <p>${greetz}</p>
                <p>${team}</p>
                <div class="email">${emails}</div>
                <audio controls autoplay loop>
                    <source src="${soundURL}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                ${efekf}
            </body>
            </html>
        `;

        const blob = new Blob([resultHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'defacer.html';
        link.click();
    }

    // Fungsi untuk menyalin kode ke clipboard
    function copyCode() {
        const author = document.getElementById('author').value;
        const alertMessage = document.getElementById('alert').value;
        const message = document.getElementById('message').value;
        const greetz = document.getElementById('greetz').value;
        const team = document.getElementById('team').value;
        const message2 = document.getElementById('message2').value;
        const imageURL = document.getElementById('imageURL').value;
        const soundURL = document.getElementById('soundURL').value;
        const marquee = document.getElementById('marquee').value;
        const alt = document.getElementById('alt').value;
        const imageWidth = document.getElementById('imageWidth').value || '100%';
        const imageHeight = document.getElementById('imageHeight').value || 'auto';
        const sizeh1 = document.getElementById('sizeh1').value || '13px';
        const sizep = document.getElementById('sizep').value || '9px';
        const marginh1 = document.getElementById('marginh1').value || '0';
        const marginp = document.getElementById('marginp').value || '0';
        const marginsound = document.getElementById('marginsound').value || '13px';
        const marginmarquee = document.getElementById('marginmarquee').value || '13px';
        const showLines = document.getElementById('show-lines-checkbox').checked;
        const efekf = document.getElementById('efekf').value;
        const marginemail = document.getElementById('marginemail').value || "14px";
        const emails = document.getElementById('emails').value;
        const fonts = selectedFontFamily;
        const sizeemail = document.getElementById('sizeemail').value || '12px';

        const lineHTML = showLines ? `<div class="full-width-line" style="background-color: ${selectedColorLine};"></div>` : '';

        const resultHTML = `
            <html>
            <head>
                <title>Deface Page</title>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap');
                body { 
                    background: ${selectedBackgroundColor}; 
                    color: #fff; 
                    text-align: center; 
                    font-family: ${fonts}; 
                    background-image: url('${backgroundInput.value}'); 
                    background-size: cover; 
                    background-position: center;
                }
                h1 { font-size: ${sizeh1}; margin: ${marginh1}; }
                .full-width-line { width: 100%; height: 2px; margin: 20px 0; background-color: ${selectedColorLine} }
                p { font-size: ${sizep}; margin: ${marginp}; }
                audio { margin: ${marginsound}; }
                marquee { margin: ${marginmarquee}; }
                .email { margin: ${marginemail}; font-size: ${sizeemail} }
                </style>
            </head>
            <body>
                <h1>${alertMessage} ${author}</h1>
                <p>${message}</p>
                <img src="${imageURL}" alt="${alt}" class="image" width="${imageWidth}" height="${imageHeight}">
                <p>${message2}</p>
                <marquee>${marquee}</marquee>
                ${lineHTML}
                <p>${greetz}</p>
                <p>${team}</p>
                <div class="email">${emails}</div>
                <audio controls autoplay loop>
                    <source src="${soundURL}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                ${efekf}
            </body>
            </html>
        `;

        navigator.clipboard.writeText(resultHTML).then(() => {
            alert('Code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy code: ', err);
        });
    }
});
