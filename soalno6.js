//buat array kosong utk menampung hasil registrasi
let registrasi = [];

//buat fungsi utk menampilkan hasil tweet
function displayForm() {
    //ambil id nama & password
    let nama = document.getElementById("nama").value;
    let pass = document.getElementById("password").value;
    //cek apakah value textarea yg diinput user dapat
    // console.log(nama);
    // console.log(pass);

    //acak password inputan user dgn Math.random
    let hashPass = Math.random(pass);

    // buat validasi cek nama & password
    if(nama == "" && pass == "") {
        alert("Please insert username & password")
    } else if(nama.length < 6 ) {
        alert("Username must be at least 6 characters long!")
    } else if (pass.length < 8) {
        alert("Password must be at least 8 characters long!")
    } else {
        //panggil variable hashing jika validasi lolos 
        registrasi.push(nama, hashPass)
    }

    //looping array & buat array baru
    let listRegis = registrasi.map((value) => {
        // console.log(value);
        return value;
        // return value.split(',',2);
    });

    //tampil nama
    document.getElementById("hasilnama").innerHTML = listRegis[0];
    document.getElementById("nama").value = '';

    //tampil password
    document.getElementById("hasilpass").innerHTML = listRegis[1];
    document.getElementById("password").value = '';
    
};
