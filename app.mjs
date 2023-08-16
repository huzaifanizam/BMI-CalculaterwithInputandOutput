function calculateBMI() {
    let heightInputFeet = document.getElementById("heightInputFeet").value;
    let heightInputInch = document.querySelector("#heightInputInch").value;

    let WeightInputKg = document.querySelector("#WeightInputKg").value;

    heightInputFeet = parseInt(heightInputFeet);
    heightInputInch = parseInt(heightInputInch);

    heightInputInch += heightInputFeet * 12;

    let heightInMeter = (heightInputInch * 2.54) / 100;

    let heightInMeterSq = heightInMeter * heightInMeter;

    let BodyMassIndex = WeightInputKg / heightInMeterSq;

    let idealweight = 22 * heightInMeterSq;
    let weightToLose = (idealweight - WeightInputKg).toFixed(2);
    let weightToGain = ( WeightInputKg - idealweight).toFixed(2);

    let suggestion = "You Are";

    if (BodyMassIndex > 30) {
      suggestion += `Obese.you need to lose ${weightToLose} Kg`;
    } else if (BodyMassIndex > 25) {
      suggestion += `OverWeight.you need to lose ${weightToLose} Kg`;
    }
    

    else if (BodyMassIndex > 18.5) {
      if (BodyMassIndex > 22) {
        suggestion += `Normal.but optionaly you may to lose ${
          weightToLose
        } indexes to become ideally fit`;
      } else if(parseInt (BodyMassIndex) === 22) {suggestion += `you are perfectly fit`

      } else {
        suggestion += `Normal.but optionaly you may to gain ${
         weightToGain
        } indexes to become ideally fit`;
      }
    
    
    } else {
      suggestion += `Under weight.you need to Gain ${weightToGain} kg `;
    }

    console.log("index; ", BodyMassIndex);
    console.log("tittle; ", suggestion);
    console.log("idealweight: ", idealweight);

    document.querySelector("#tittle").innerHTML =  `Ideal Weight; ${(idealweight).toFixed(2)}Kg`;
    document.querySelector("#suggestion").innerHTML = suggestion;


  }