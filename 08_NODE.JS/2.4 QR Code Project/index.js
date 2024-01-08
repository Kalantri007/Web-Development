/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.

*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        name: "link",
        message: "Provide the link"
    }
  ])
  .then((answers) => {
    let qr_img = qr.imageSync(answers.link, {type : "png"});
    fs.writeFileSync('qrcode.png', qr_img, (err) =>{
        if (err) throw err;
        console.log("QR code saved as png");
    });    
  })
  .catch((error) => {
    console.log(error);
  });