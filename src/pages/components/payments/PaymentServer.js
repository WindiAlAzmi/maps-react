/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import fs from "fs";
import express from "express";
import * as cheerio from "cheerio";


fs.readFile('/paymendata.txt', (err, data) => {
    if(err){
      throw new Error(err);
    }

    console.log(data, 'ini data');
})
// const app = express();
// app.get("/paymentNMW/:slug", (req, res) => {
    



// })


// app.use(express.static("./build"));


//  const port = 5200;
// app.listen(port, () => console.log(`started server on ${port}`));



//   fs.readFile("public/index.html", (err, file) => {
//      const productTitle = req.params.slug;
//      console.log("ini title payment", productTitle);
  

//         if(productTitle && productTitle !== ''){
//         console.log("data ada");

     
//       const isFile = cheerio.load(file);
//     if (isFile) {
//       $("head").append(
//         '<meta name="description" content="Ini adalah detail page">'
//       );
//       console.log(isFile, 'INI IS FILE')
//     } else {
//       console.log("tidak ada");
//     }


//     if (err) {
//       console.error(err);
//       res.status(500).send("Terjadi kesalahan dalam membaca file HTML");
//       return;
//     }
//    res.send(isFile.html());
//     }

//     });
