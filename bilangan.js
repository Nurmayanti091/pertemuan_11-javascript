document.querySelector('#jumlahkan').addEventListener('click', function() {
    let bil1 = parseInt(document.querySelector('#bil1').value);
    let bil2 = parseInt(document.querySelector('#bil2').value);
    let hasil = bil1 + bil2;
    document.querySelector('#hasil').textContent = 'Hasil: ' + hasil;
});