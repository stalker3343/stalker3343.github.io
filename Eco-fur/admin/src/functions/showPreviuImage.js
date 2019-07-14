export default function showPreviuImage(files) {
  return new Promise((resolve, reject) => {
    let filesMas = [],
      imageSrc = [],
      pending = files.length;

    for (let i = 0, f;
      (f = files[i]); i++) {
      if (!f.type.match("image/jpeg")) {
        alert("Картинки должны быть в формате .jpg");
        throw "Картинки должна быть в формате .jpg";
      }
      filesMas.push(f);
      let reader = new FileReader();
      reader.onload = function (f) {
        imageSrc[i] = f.target.result;
        --pending;
        console.log(pending);
        if (pending == 0) {
          console.log(pending);
          resolve({
            filesMas,
            imageSrc
          });
        }
      };

      reader.readAsDataURL(f);
    }
  });
  //console.log(returnObject.imageSrc);
}