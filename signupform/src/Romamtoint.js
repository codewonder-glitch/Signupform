const romtoint=(rom)=>{

    let obj={
        I  :           1,
V     :        5,
X      :       10,
L       :      50,
C        :     100,
D         :    500,
M          :   1000
    }
    let total=0;

    for(let i=0;i<rom.length;i++)
    {
        // console.log(rom[i])
        // console.log(rom[++i])
        // console.log(rom[++i])
//         if((rom[i]==='I' && rom[++i]==='V')|| (rom[i]==='I' && rom[++i]==='X'))
//         {

// total=-2;
//         }
        // i-=2;
        console.log(rom[i])
       total+=obj[rom[i]];

    }
    return total;
}
console.log(romtoint("IVIX"));