const fs = require("fs");

const readJSONFile = (filePath) => {
    return new Promise(
    (resolve, reject) => {
        fs.readFile(filePath, "utf-8", (error, stringifiedData) => {
            if(error){
                reject({error, message : "Could not read file."});
            }else{
                try{
                    const jsonData = JSON.parse(stringifiedData);
                    resolve(jsonData);
                }catch(error){
                    reject({message : "Failed to convert stringified json."})
                }
            }
        })
    }
)
};

const writeJSONFile = ({filePath, jsonData}) => {
    return new Promise(
        (resolve, reject) => {
            let stringifiedData;
            try{
                stringifiedData = JSON.stringify(jsonData);
            }catch(error){
                reject({error, message : "Failed to convert json data."})
            }
            fs.writeFile(filePath, stringifiedData, {encoding : "utf8"}, (error) => {
                if(error){
                    reject({error, message : "Could not write file."});
                }else{
                    resolve({message : "File written successfully."})
                }
            })
        }
    );
}

module.exports = {readJSONFile, writeJSONFile};

// readJSONFile("C:\\Users\\Atharv Joshi\\Documents\\GitHub\\rest-api\\data\\products.json")
// .then(
//     (data) => {
//         console.log(data);
//     }
// )
// .catch(
//     (error) => {
//         console.log(error.message);
//     }
// )