const { set } = require("express/lib/application");

exports.getArrays=(req,res)=>{
    try{
        const combination=["Merah-S-Katun", "Merah-S-Polyester", "Merah-M-Katun", "Merah-M-Polyester", "Merah-L-Katun", "Merah-L-Polyester", "Merah-XL-Katun", "Merah-XL-Polyester",
        "Merah-XXL-Katun", "Merah-XXL-Polyester", "Kuning-S-Katun", "Kuning-S-Polyester", "Kuning-M-Katun", "Kuning-M-Polyester", "Kuning-L-Katun", "Kuning-L-Polyester", "Kuning-XL-Katun", "Kuning-XL-Polyester", "Kuning-XXL-Katun", "Kuning-XXL-Polyester", "Hijau-S-Katun", "Hijau-S-Polyester",
        "Hijau-M-Katun", "Hijau-M-Polyester", "Hijau-L-Katun", "Hijau-L-Polyester", "Hijau-XL-Katun", "Hijau-XL-Polyester", "Hijau-XXL-Katun", "Hijau-XXL-Polyester"];
        let color=new Array();
        let size= new Array();
        let material= new Array();

        for(var i=0;i<combination.length;i++)
        {
            let items=combination[i].split("-");
            color.push(items[0]);
            size.push(items[1]);
            material.push(items[2]);
        }

        color=Array.from(new Set(color));
        size=Array.from(new Set(size));
        material=Array.from(new Set(material));
        const data={
            color,
            size,
            material
        };
        console.log(data);
        return res.status(200).send({
            status:"success",
            message:"Ok",
            code:200,
            data
        });
        

    }
    catch(err)
    {
        return res.status(500).send({
            status:"Error",
            code:500,
            message:err.message
        });
    }
}