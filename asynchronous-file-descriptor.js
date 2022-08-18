//asynchronous filing using file descriptors.

const fs=require('fs');
const filePath='./file.txt';

fs.open(filePath, 'w', 0o666, (err, fd)=>{

    if (!err)
    {
        const buffer=new Buffer.from('Hello World!');

        fs.write(fd, buffer, (err, writtenBytes, buffer)=>{

            if (!err)
            {
             console.log(`Data: '${buffer}' written to file. No of bytes written are ${writtenBytes})!\n`);

             fs.closeSync(fd);
             fs.open(filePath, 'r', (err, fd)=>{
                fs.read(fd, (err, bytesRead, buffer)=>{
                    if (!err)
                    {
                        console.log(`Data read from the file is as follows:  ${buffer}  (No of bytes read are ${bytesRead})`);
                    }
                })
             })

            }

            else console.log('There was an error writing to file!');
        }
        );
    }
} )