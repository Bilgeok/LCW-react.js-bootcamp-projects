const imgGallery = document.querySelector('.img-container');  //imgGallery adında değişkeni tanımlıyor
const imgURL ="https://source.unsplash.com/random/200*300";    //resimlerin alındığı site linki
const rows = 5;                            // 5 satır olmasını sağlıyor               
for (let i = 0; i < rows * 3;i++){         // her satırda 3 tane img olmasını sağlıyor
    const img = document.createElement('img');  // img adında değişken block scope olarak tanımlandı
    img.src= `${imgURL}${getRandomSize()}`;   // linkten istenen büyüklükte(200*300) fotoğraf çekiyor 
    imgGallery.appendChild(img);            //galeriye child olarak fotoğraf ekliyor
}


function getRandomSize(){
    return `${getRandomNum()}x${getRandomNum()}`;    //heigth ve width değerleri istenen fotoğraf için fonksiyon yazıldı
  
}

 
function getRandomNum(){
return Math.floor(Math.random() * 5);   //math random fonksiyonu kullanıldı
 
}




