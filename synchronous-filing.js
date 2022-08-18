//synchronous file reading and writing

const fs=require('fs');
const filePath='./file.txt'


try{
    fs.writeFileSync(filePath, 'Hello World!', {encoding: 'utf8', flag: 'w', mode: 0o666}); //it overwrites the previous data if the file already exists.

    console.log('Data written to File!\n');

    try{
        
        const data=fs.readFileSync(filePath, {encoding:'utf8', flag:'r'});
        console.log('Data read from the file is as follows:', data);
    }
    catch(err)
    {
        console.log(err);
    }
}
catch(err)
{
    console.log(err);
}



