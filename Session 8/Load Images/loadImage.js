function loadImage(url) {

    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function () {
            resolve(image);
        }
        image.onerror = function () {
            let message = "Couldn't load the image";
            reject(new Error(message));
        }
        image.src = url;
    })

}




function loadImagePromise(url) {
    return new Promise(function (resolve, reject) {

        let image = new Image();


        image.onload = function () {
            resolve(image);
        }


        image.onerror = function () {
            let message = "Couldn't load the image";
            reject(new Error(message));
        }
        image.src = url;

    })
}