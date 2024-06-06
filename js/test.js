
function cementi(){ // cementis ფასებს ვწერ ჰტმლ მხარეს, ვლიუში
    const select1Value = parseFloat(document.getElementById('selectcementi').value);
   
    console.log(select1Value, "cementi")
   
    return select1Value
}


<label for="selectcementi">აირჩიე ცემენტის ხარისხი (1კუბი):</label>
            <select id="selectcementi">
                <option value="0">არჩევნის გარეშე 0</option>
                <option value="100">ცემენტი 1 ხარისხი  <img></option>
                <option value="200">ცემენტი 2 ხარისხი</option>
                <option value="300">ცემენტი 3 ხარისხი</option>
            </select>
