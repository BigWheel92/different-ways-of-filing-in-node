//synchronous filing using file descriptors.

const fs=require('fs');
const filePath='./file.txt';

//writing the file.
try{

    const fd=fs.openSync(filePath, 'w', 0o666);
    const buffer=Buffer.from('Hello World');
    fs.writeSync(fd, buffer, 0, buffer.length, null); //0 (3rd argument) is the offset of buffer, buffer.length (4th argument) is the number of bytes 
                                                  //we want to write. Last argument is the file offset where we want to write. null 
                                                  //means we want to write from the beginning of file (file offset 0)
                                                  //alternate function: fs.writeSync( fd, string, position, encoding )
    fs.closeSync(fd);
    console.log('Data written to file\n');
}
catch(err){

    console.log(err);
    return;
}

//now reading the file.
try{

    const fd=fs.openSync(filePath, 'r');
    const fileSize=fs.statSync(filePath).size;
    const buffer= Buffer.alloc(fileSize)
    fs.readSync(fd, buffer, 0, fileSize, null);   //0 (3rd argument) is the offset of buffer, buffer.length (4th argument) is the number of bytes 
                                                 //we want to read. Last argument is the file offset from where we want to read. null 
                                                  //means we want to read from the beginning of file (file offset 0)
                                         
    console.log(`Data read from the file is as follows: ${buffer}`);
    fs.closeSync(fd);

}
catch (err){
    console.log(err);

}