//synchronous file reading and writing

const fs=require('fs');
const filePath='./file.txt';

fs.writeFile(filePath, 'Hello World!', {mode: 0o666, flag: 'w', encoding: 'utf8'}, (err)=>{

    if (!err)
    {   console.log('Data written to file!\n');
        fs.readFile(filePath, {encoding:'utf8', flag:'r'}, (err, data)=>{
            
            if (!err)
                console.log('Data read from the file is:', data);
            else
                console.log(err);
        } )
    }
    else
    console.log(err);
});