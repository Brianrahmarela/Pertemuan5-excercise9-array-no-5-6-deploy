//DGN ARRAY

//buat array kosong utk menampung hasil tweet
let tampung = [];

//buat fungsi utk menampilkan hasil tweet
function displayTweet() {
    //ambil id textarea yg ingin diambil valuenya
    let textArea = document.getElementById("textarea").value;
    //cek apakah value textarea yg diinput user dapat
    console.log(textArea);
    
    //buat validasi
    if(textArea !=="") {
        tampung.push(textArea);
    }
    
    let newTweet = tampung.map((value) => {
        return value;
        // console.log(value);
    });
    document.getElementById("yourtweet").innerHTML = newTweet;
    document.getElementById("textarea").value = '';
    
};

//JIKA PAKAI DOM BKN ARRAY DGN EVENT LISTENER (ONCLICK DITAMBAH DI JS)
//ambil id textarea yg ingin diambil valuenya
// let textArea = document.querySelector("#textarea");
// ambil id button untuk submitnya
// let submit = document.querySelector("#buttonsubmit");
// ambil id untuk merubah elemen yg ingin diubah dgn value dari textarea
// let hasil = document.getElementById("yourtweet");
// console.log(textArea);
// submit.addEventListener("click", displayAlert);

// function displayAlert() {
    // cek value textarea dgn alert
    // alert(textArea.value);
    // tampilkan dgn mengubah teks dgn textContent
    //     hasil.textContent = textArea.value;
    // }

