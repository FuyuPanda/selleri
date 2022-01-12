const axios=require('axios');


exports.getByTitle=async(req,res)=>{
    try{

        const fetch=await getData();
        if(fetch.length>0)
        {
            const result=fetch.filter(function(e){
                return e.name.title=="Mr"
            });

            let data=result.map(item=>{
                const container={};
                container.fullname=item.name.title+"."+item.name.first+" "+item.name.last;
                container.age=item.dob.age;
                container.city=item.location.city;
                container.email=item.email;
                container.phone=item.phone;
                container.picture=item.picture.medium;
                return container;
            });

            data=data.sort(function(left,right){
                var age=left.age-right.age
                return age;
            });


            return res.status(200).send({
                status:"success",
                message:"Ok",
                code:200,
                data
            });
        }
        //console.log(fetch);

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

exports.getByAge=async(req,res)=>{
    try{
        const fetch=await getData();
        if(fetch.length>0)
        {
            const result=fetch.filter(function(e){
                return e.dob.age>=20 && e.dob.age<=30
            });

            let data=result.map(item=>{
                const container={};
                container.fullname=item.name.title+"."+item.name.first+" "+item.name.last;
                container.age=item.dob.age;
                container.city=item.location.city;
                container.email=item.email;
                container.phone=item.phone;
                container.picture=item.picture.medium;
                return container;
            });

            data=data.sort(function(left,right){
                var age=left.age-right.age
                return age;
            });


            return res.status(200).send({
                status:"success",
                message:"Ok",
                code:200,
                data
            });
        }




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


const getData=async ()=>{
    var options = {
        'method': 'GET',
        'url': 'https://randomuser.me/api/?page=1&results=20'
      };
    const result=await axios(options);
    return result.data.results;
}