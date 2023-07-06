// Kullanıcıdan isim al
var isim = prompt("İsminizi girin:");

// Tarih ve saat bilgisini al
var tarih = new Date();
var saat = tarih.getHours();
var dakika = tarih.getMinutes();
var gun = tarih.getDay();

// Günleri metin olarak depola
var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

// Karşılama mesajını oluştur
var mesaj = "Merhaba, " + isim + "! Bugün " + gunler[gun] + " günüdür.";
mesaj += " Şu an saat " + saat + ":" + dakika + ".";

// Karşılama mesajını göster
console.log(mesaj);
