// what is a callback function ?
/*
1. fucntions are first class citizens.
2. you can pass a function in another function.
3. the function that is passed as argument is known as callback function.
4. multiple downloads can cause an callback hell
5. callbacks has inversion of control (tracking the code execution flow is not easy)
*/

function download(url, callback) {
  //mimicing donwload
  console.log(`Downloading from ${url}`);
  setTimeout(() => {
    console.log("Downloaded");
    let pictureUrl = url + "/pict1";
    callback(pictureUrl);
  }, 4000);
}

function process(url) {
  //mimic processing
  console.log(`processing from ${url}`);
  setTimeout(() => {
    console.log("processed");
  }, 2000);
}

download("https://docs.flutter.dev/get-started", process);

/*
1. closure with callbacks are helpful for datahiding
2. garbage collect and remove event listeners 
*/

function addEventListeners() {
  let count = 0;
  document.getElementById("test").addEventListener("click", function () {
    console.log("count", ++count);
  });
}

addEventListeners();

