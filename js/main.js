//layer1
let lima = document.getElementsByClassName("lima")[0];
let empat = document.getElementsByClassName("empat")[0];
let tiga = document.getElementsByClassName("tiga")[0];
let dua = document.getElementsByClassName("dua")[0];
let satu = document.getElementsByClassName("satu")[0];
let traveling = document.getElementById("traveling");
let trip = document.querySelector(".trip");
let bawahnya = document.getElementById("bawahnya");

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;

    lima.style.top = value * 0.7 +'px';

    empat.style.top = value * 0.3 +'px';

    tiga.style.left = value * 1 + 'px';
    tiga.style.top = value * 0.5 + 'px';

    dua.style.top = value * 0 + 'px';

    satu.style.left = value * 1 + 'px';

    traveling.style.right = value * 0.7 +'px';
    trip.style.top = value * 0.1 +'px';

    bawahnya.style.right = value * 1 + 'px';
    //console.log(halLain);
})


//ganti halaman
/*document.getElementById("halaman-lain").onclick = function() {
    const deskripsi = "gunung adalah lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ducimus. Reprehenderit molestiae eum doloribus officiis consequuntur natus quisquam nihil voluptatum veniam hic expedita sapiente, dolorum sequi? In culpa quasi asperiores?"
    let trevel = "foto"
    let pantaiItu = "Pantai Itu"
    let gunungIni = "Gunung Ini"

    document.getElementById("foto").src = "img/travel-2.jpeg";
    document.getElementById("tempat").innerHTML = gunungIni;
    document.getElementById("deskripsi").innerHTML = deskripsi;
}*/
/*    image-array = ['travel-1.jpg', 'travel-2.jpeg', 'travel-3.jpg', 'travel-4.jpg']
    function get_halaman_lain(){
        console.log(imgArray [0]);
        random_index = Math.floor(Math.random() * imgArray.length);
        selected_img = imgArray[random_index]
        document.getElementById("foto").src = `img/${selected_img}`
    }*/

    /*let foto = document.getElementById('foto');
    let gambar = ['travel-1.jpg', 'travel-2.jpeg', 'travel-3.jpg', 'travel-4.jpg'];
    let h1 = ['PANTAI INI', 'PANTAI ITU', 'GUNUNG INI', 'GUNUNG ITU'];
    let p = ['Pantai ini Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ducimus. Reprehenderit molestiae eum doloribus officiis consequuntur natus quisquam nihil voluptatum veniam hic expedita sapiente, dolorum sequi? In culpa quasi asperiores?', 
            'Pantai itu Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ducimus. Reprehenderit molestiae eum doloribus officiis consequuntur natus quisquam nihil voluptatum veniam hic expedita sapiente, dolorum sequi? In culpa quasi asperiores?', 
            'Gunung ini Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ducimus. Reprehenderit molestiae eum doloribus officiis consequuntur natus quisquam nihil voluptatum veniam hic expedita sapiente, dolorum sequi? In culpa quasi asperiores?', 
            'Gunung itu Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ducimus. Reprehenderit molestiae eum doloribus officiis consequuntur natus quisquam nihil voluptatum veniam hic expedita sapiente, dolorum sequi? In culpa quasi asperiores?', ]

    document.getElementById("halaman-lain").onclick = function() {
        random_index = Math.floor(Math.random() * gambar.length);
        selected_img = gambar[random_index]
        document.getElementById("foto").src = `img/${selected_img}`
        
        random_h1 = Math.floor(Math.random() * h1.length);
        selected_h1 = h1[random_h1]
        document.getElementById("tempat").innerHTML = `${selected_h1}`

        random_p = Math.floor(Math.random() * p.length);
        selected_p = p[random_p]
        document.getElementById("deskripsi").innerHTML = `${selected_p}`
    }*/

    /*
    let slide1 = document.getElementById('slide-1');
    let slide2 = document.getElementById('slide-2');
    let slide3 = document.getElementById('slide-3');
    let slide4 = document.getElementById('slide-4');

    document.getElementById("halaman-lain").onclick = function() {
        document.getElementById("slide-1").style.display = "inline-flex";
    }
    document.getElementById("halaman-lain").onclick = function() {
        document.getElementById("slide-2").style.display = "inline-flex";
    }
    document.getElementById("halaman-lain").onclick = function() {
        document.getElementById("slide-3").style.display = "inline-flex";
    }
    document.getElementById("halaman-lain").onclick = function() {
        document.getElementById("slide-4").style.display = "inline-flex";
    }S
    //console.log(slide2)

    let slide1 = document.getElementById('slide-1');
    let slide2 = document.getElementById('slide-2');
    let slide3 = document.getElementById('slide-3');
    let slide4 = document.getElementById('slide-4');
    let slide = [slide1, slide2, slide3, slide4];

    document.getElementById("halaman-lain").onclick = function() {
        random_index = Math.floor(Math.random() * slide.length);
        selected_slide = slide[random_index]
        document.getElementsByClassName("warp").src = `${selected_slide}`
    }*/
//layer-4
let tanpaManusia = document.getElementById('tanpa-manusia');
let manusia = document.getElementById('manusia');
let awan = document.getElementById('awan');
let burung = document.getElementById('burung');

window.addEventListener('scroll', function(){
    let value = this.window.scrollY;

    manusia.style.left = value * 0.3 + 'px';
    awan.style.left = value * 0.7 + 'px';
    burung.style.right= value * 1 + 'px';
})
//console.log(tanpaManusia);

//layer-5

const close = document.getElementsByClassName('overlay');

for (let i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        window.location.href = '#pemandu';
        
    })
}

//review
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }

  });

  //layer-7
  function submit() {

    var nama =document.getElementById('input-nama').value;
    var alamat =document.getElementById('input-alamat').value;
    var paket =document.getElementById('input-paket').value;
    var pesan =document.getElementById('input-pesan').value;

    alert( "NAMA : " + nama + "\nALAMAT : " + alamat + "\nPAKET : " + paket + "\nPESAN : " + pesan)
    document.querySelector('.input-nama').textContent = nama;
    document.querySelector('.input-alamat').textContent = alamat;
    document.querySelector('.input-paket').textContent = paket;
    document.querySelector('.input-pesan').textContent = pesan;
  }

//opsi 2 layer-7
function inputdata(){
    var nama = document.forms['datapribadi']['nama'].value;
    var email = document.forms['datapribadi']['email'].value;
    var paket = document.forms['datapribadi']['paket'].value;
    var alamat = document.forms['datapribadi']['alamat'].value;
    var pesan = document.forms['datapribadi']['pesan'].value;  
    
    alert( "NAMA : " + nama + "\nEMAIL : " + email + "\nPAKET : " + paket + "\nALAMAT : " + alamat + "\nPESAN : " + pesan)
                                            
    var tabel = document.getElementById("databel");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);
    var kol4 = baris.insertCell(3);
    var kol5 = baris.insertCell(4);
            
    kol1.innerHTML = nama;
    kol2.innerHTML = email;
    kol3.innerHTML = paket;
    kol4.innerHTML = alamat;
    kol5.innerHTML = pesan;
   }