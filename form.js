// Fungsi simpan data pada session storage
const simpan = () => {
    // clearing session storage
    sessionStorage.clear()
    const userInputNama = document.getElementById('name');
    const userInputTravel = document.getElementById('tempat');
    const userInputRadio = document.querySelector('input[name="radio"]:checked')
    const userInputCheckbox = document.getElementById('cek')
    
    
    
    let nama = sessionStorage.getItem("name");
    let tempat = sessionStorage.getItem("tempat");
    let radio = sessionStorage.getItem("cb");
    let checkbox = sessionStorage.getItem("cek") || [];

    // push 
    nama = userInputNama.value || nama;
    
    
    tempat = userInputTravel.value || email;
    

    radio = userInputRadio.value || radio;
    
    
    for (let i=0; i < userInputCheckbox.length; i++) {
        if (userInputCheckbox[i].checked) {
            checkbox.push(userInputCheckbox[i].value);
        }
    }

    let data = {
    'nama': nama,
    'tempat': tempat,
    'checkbox' : checkbox,
    'radio' : radio
    }

    sessionStorage.setItem("data", JSON.stringify(data));
}