document.addEventListener('DOMContentLoaded', () => {
    const codeElement = document.querySelector('#code code');
    const codeString = `
jika anda membutuhkan bantuan silahkan simak baik baik agar tidak terjadi adanya kesalahan pahaman

dimulai dari bagaimana cara menggunakan tools sc deface generator?

[1]--> mudah sekali anda hanya mengisi input di bawah ini jika anda perlu di isi silahkan, jika tidak kosongkan saja.

[2]--> jika anda ingin membuat sebuah gambar atau audio/sound silahkan pergi ke top4top.io, disana anda bisa membuat 
sebuah gambar, gif, lagu/sound, caranya? pergi ke web https://top4top.io/ dan upload media anda jika sudah tunggu saja 
sampai muncul url, jika sudah copy aja url nya lalu tempelkan di input sc deface generatornya.

[3]--> jika anda ingin mengedit teks di <p> mau pun <h1> anda perlu cari di menu settings terdapat banyak menu untuk 
mngedit sc anda biar bagus.

[4]--> jika anda ingin mengedit font nya bisa berwarna silahkan ketik <span style='color: red;'>Hacked By? </span> 
seperti itu kalau mau ganti warna tinggal hapus red nya ganti warna terserah anda contoh : red, green, white, black,
 blue, rgb(0, 255, 0);, #FFFFFF, seperti itu.

[5]--> jika anda masih bingung silahkan hubungi kami, kami akan membalas secepatnya jika sempet :v.

[6]--> jika ada kesalahan atau ada bug di dalam web toolsnya silahkan hubungi kami.

[7]--> tambahan jika ingin upload background image silahkan dua input diisi dengan url top4top yang sudah di buat, dimana 
letaknya? di bagian paling bawah settings cari saja namanya yaitu background color dan background image, isi aja dua 
duanya make url top4top boleh, kalau mau upload gambar di background-image`;

    // Fungsi untuk mengetikkan kode satu per satu dengan delay tambahan di awal baris baru
    function typeCode(code, element, delay = 20, lineDelay = 2000) {
        const lines = code.split('\n');
        let lineIndex = 0;
        let charIndex = 0;

        function type() {
            if (lineIndex < lines.length) {
                if (charIndex < lines[lineIndex].length) {
                    element.textContent += lines[lineIndex][charIndex++];
                    setTimeout(type, delay); // Delay antara karakter
                } else {
                    // Setelah baris selesai, tambahkan newline dan delay sebelum baris berikutnya
                    element.textContent += '\n';
                    charIndex = 0;
                    lineIndex++;
                    setTimeout(type, lineDelay); // Delay sebelum baris baru
                }
            }
        }
        type();
    }

    typeCode(codeString, codeElement);
});