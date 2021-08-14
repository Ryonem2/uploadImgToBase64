const s = document.getElementById('submit');

s.addEventListener('click', (event)=> {
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
//   console.log(reader.result);
//   console.log(reader.readAsDataURL(file));
  reader.addEventListener("load", function () {
    // convert image file to base64 string
    console.log(reader.result);
    const data = reader.result;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/sig2/docs/js/ins.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({  //? send JSON by POST method
        data: data    //! sinature data image/base64
    }));
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }

    
});