
       //handling for file input
       let fileInput = document.getElementById("csv_file");
       let readFile = function () {

        let reader = new FileReader();
        reader.onload=function(){
          if(reader.result){
                //the data here is not null
                if(getExtensionFile(fileInput.value)=='csv'){
                  let csvArray=csvJSON(reader.result);
                  console.log(csvArray);
                }else{
                  console.log('invalid file');
                }
              }
            }

            try{
              reader.readAsBinaryString(fileInput.files[0]);
            }catch(err){
          //code here
        }
      };

      fileInput.addEventListener('change', readFile); 

//converting csv to json function
function csvJSON(csv){

  let lines=csv.split('\n')
  let result = [];

  let headers=lines[0].split(',');

  for(let i=1;i<lines.length;i++){

    let obj = {};
    let currentline=lines[i].split(',');

    for(let j=0;j<headers.length;j++){
      obj[headers[j].replace("\r","")] = currentline[j];
    }

    result.push(obj);
  }

  //return result; //JavaScript object
  return result; //JSON
}

//getExtension
function getExtensionFile(file){
  return /[^.]+$/.exec(file)[0];
}