function tampilkanSalam() {
    // Mengakses elemen h1 menggunakan DOM getElementById
    const heading = document.getElementById("greeting");

    // Mendapatkan waktu sistem saat ini
    const sekarang = new Date();
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes();

    // Konversi waktu ke format desimal untuk mempermudah pengecekan rentang
    const waktuSekarang = jam + (menit / 100);

    let pesan = "";

    // Logika pengecekan rentang waktu sesuai ketentuan modul
    if (waktuSekarang >= 0.01 && waktuSekarang <= 10.59) {
        pesan = "SELAMAT PAGI!";
    } else if (waktuSekarang >= 11.00 && waktuSekarang <= 13.59) {
        pesan = "SELAMAT SIANG!";
    } else if (waktuSekarang >= 14.00 && waktuSekarang <= 17.59) {
        pesan = "SELAMAT SORE!";
    } else {
        pesan = "SELAMAT MALAM!";
    }

    heading.innerHTML = pesan;
}

tampilkanSalam();