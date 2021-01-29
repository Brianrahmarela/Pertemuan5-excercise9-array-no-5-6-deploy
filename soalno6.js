//buat array kosong utk menampung hasil registrasi
let registrasi = [];

//ambil id elemen yg akan menampilkan hasilnya & assign variable
let listItem = document.getElementById("listitem");

//buat fungsi utk menampilkan hasil registrasi
function displayForm() {
    //ambil id nama & password
    let nama = document.getElementById("nama").value;
    let pass = document.getElementById("password").value;
    //cek apakah value registrasi yg diinput user dapat
    // console.log(nama);
    // console.log(pass);

    //acak password (variable pass) inputan user dgn Math.random
    let hashPass = Math.random(pass);

    // buat validasi cek nama & password
    if(nama == "" && pass == "") {
        alert("Please insert username & password")
    } else if(nama.length < 6 ) {
        alert("Username must be at least 6 characters long!")
    } else if (pass.length < 8) {
        alert("Password must be at least 8 characters long!")
    } else {
        //panggil variable hashing jika validasi lolos & tampung di variable registrasi
        registrasi.push(nama, hashPass)
        // listItem.innerHTML += registrasi[registrasi.length-2]+' '+registrasi[registrasi.length-1] + "\n";

        //tampilkan
        /* Di variable listItem tempelkan dgn .innerhtml utk mendapakan value. assign nilai di variabel registrasi & ambil index yg ingin ditampilkan [registrasi.length-2] artinya ambil index registrasi yg lengthnya yg jmlhnya 2 index dikurang 2 (.length-2). karena ada 2 index di array registrasi, maka hasil length-2=0. artnya ambil index ke [0] yaitu nama. length-1 berarti ambil jmlh length-1=1. yaitu ambil index ke [1] yaitu password */
        listItem.innerHTML +=`<p>${registrasi[registrasi.length-2]}</p>`; //value array nama
        listItem.innerHTML +=`<p>${registrasi[registrasi.length-1]}</p>`; //value array password
        //kosongkan value inputan nama & password
        document.getElementById("nama").value = '';
        document.getElementById("password").value = '';
    }
};


    //looping array & buat array baru
    // let listRegis = registrasi.map((value) => {
    //     // console.log(value);
    //     return value;
    //     // return value.split(',',2);
    // });

    // //tampil nama
    // document.getElementById("hasilnama").innerHTML = listRegis[0];
    // document.getElementById("nama").value = '';

    // //tampil password
    // document.getElementById("hasilpass").innerHTML = listRegis[1];
    // document.getElementById("password").value = '';
    
