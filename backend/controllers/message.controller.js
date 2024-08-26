import { Message } from "../models/message.model.js"


export const sendMessage = async (req,res)=>{
    try {
        const senderId = req.id
        const receiverId = req.params.id
        const text = req.body.text
        if(!text) return res.json({message:"Enter a message as it cannot be empty",success:false})
        const message = new Message({
            senderId,
            receiverId,
            text
        })
        await message.save()
        await message.populate('senderId receiverId')
        
        return res.status(200).json({
            message:"Message sent successfully",
            success:true,
            message
        })

    } catch (error) {
        console.log(error)
        console.log("error in sendMessage")
    }
}


export const getMessages = async (req,res)=>{
    try {
        const senderId = req.id
        const receiverId = req.params.id
        const messages = await Message.find({
            senderId,
            receiverId
        }).populate({path:'senderId receiverId',select:('-password')})

        if(!messages){
            return res.status(400).json({
                message:"No messages found",
                success:false
            })
        }

        return res.status(200).json({
            message:"Messages fetched successfully",
            success:true,
            messages
        })

        
    } catch (error) {
        console.log(error);
        console.log("error in getMessages");       
    }
}