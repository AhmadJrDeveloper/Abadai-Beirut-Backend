const mongoose = require('mongoose');
const Inbox = require('../Models/inboxModel')


//////////////////////////////////////////////GET ALL FUNCTION//////////////////////////
const getMessage = async(req,res) => {
    try{
        const inbox = await Inbox.find();
        res.status(200).json(inbox);

    }
    catch (error){
        res.status(500).json({mssg: "you have zero inbox"});

    }
};
 //////////////////////////////////////////////GET ALL FUNCTION//////////////////////////


/////////////////////////////////////////////////ADD FUNCTION//////////////////////////
const addMessage =  async (req, res) => {                                            //
    const{firstName, lastName, email, status, message, time} = req.body                    //
    try{                                                                             //
        const inbox = await Inbox.create({firstName, lastName, email, status, message})
        res.status(200).json(inbox)                                                  //
    }                                                                                //
    catch (error){                                                                   //
        res.status(400).json({error: error.message})                                 //
    }                                                                                //
}                                                                                    //
/////////////////////////////////////////////////ADD FUNCTION//////////////////////////

//////////////////////////////////////////////UPDATE FUNCTION//////////////////////////
const updateMessage = async (req, res) => {
    const { id } = req.params; 
    const { firstName, lastName, email, status, message } = req.body;
    try {
      const inbox = await Inbox.findByIdAndUpdate(
        id,
        { firstName, lastName, email, status, message },
        { new: true }
      );
  
      if (!inbox) {
        return res.status(404).json({ error: "Message not found" });
      }
  
      res.status(200).json(inbox);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


//////////////////////////////////////////////UPDATE FUNCTION//////////////////////////



//////////////////////////////////////////////DELETE FUNCTION//////////////////////////
const deleteMessage = async (req, res) => {                                          
    const { id } = req.params;                                                      
    try {
      const inbox = await Inbox.findOneAndDelete(id);
  
      if (!inbox) {
        return res.status(404).json({ error: "Message not found" });
      }
  
      res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  //////////////////////////////////////////////DELETE FUNCTION//////////////////////////

 



 //////////////////////////////////////////////GETID FUNCTION//////////////////////////

  const getMessageById = async (req, res) => {
    const { id } = req.params; 
    try {
      const inbox = await Inbox.findById({_id:id});
  
      if (!inbox) {
        return res.status(404).json({ error: "Message not found" });
      }
  
      res.status(200).json(inbox);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 //////////////////////////////////////////////GETID FUNCTION//////////////////////////

  

module.exports  = {getMessage,addMessage,updateMessage, deleteMessage, getMessageById}