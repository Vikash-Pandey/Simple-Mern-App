const router=require("express").Router()
const users=require("../module/Data")

const multer  = require('multer')
router.get('/', async (req,res)=>{
    try{
        const data= await users.find()
        res.status(200).json({
            message:"Data Added",
           data
        })
    }
    catch(err){
        res.status(500).json(err)
    }
    })

    router.get('/:id', async (req,res)=>{
        try{
            const data= await users.findById(req.params.id)
            res.status(200).json({
                message:"Data Added",
                data
            })
        }
        catch(err){
            res.status(500).json(err)
        }
        })


        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
              cb(null, './public/images')
            },
            filename: function (req, file, cb) {
              cb(null, Date.now()+' ' +file.originalname)
            }
          })
          
          const upload = multer({ storage: storage })

router.post('/post',upload.single('file'), async (req,res)=>{
    console.log(req.body.name)
try{
    const usersdata=new users({
        name:req.body.name,
        email:req.body.email,
        image:req.file.filename
    })
    const data= await usersdata.save()
    res.status(200).json({
        message:"Data Added",
        data
    })
}
catch(err){
    res.status(500).json({err:err})
}
})


router.put('/update/:id',upload.single('file'), async (req,res)=>{
    try{
        const _id= await req.params.id;
        const profile= await req.file.filename
        console.log(_id)
        const data= await users.findByIdAndUpdate(_id,{
            $set:req.body,
            image:profile
        },{new:true})
        res.status(200).json({
            message:"Data Updated",
            data
        })
    }
    catch(err){
        res.status(500).json(err)
    }
    })


    router.delete('/delete/:id', async (req,res)=>{
        try{
            const _id= await req.params.id;
           
           
            const data= await users.findByIdAndDelete(_id)
            res.status(200).json({
                message:"Data Added",
                data
            })
        }
        catch(err){
            res.status(500).json(err)
        }
        })



module.exports =router