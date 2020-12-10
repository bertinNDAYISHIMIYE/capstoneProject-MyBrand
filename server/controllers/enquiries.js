import enquiries from "../models/enquiriesModal.js";

export class enquiriescontrollers {



  static makeEnquiry = async (req, res) => {
    const enquiry = new enquiries({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await enquiry.save();

    return res.status(201).json({
      message: "enquiry created",
    });
  };


  static Allenquiries = async (req, res) => {
    try {
      const enquiry = await enquiries.find();
      if (!enquiry) {
        return res.status(404).json({
          message: "enquiries not found",
        });
      } else {
        return res.status(200).json({
          message: "enquiries found",
          data: enquiry,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };

 static deleteEnquiry = async(req,res) => {
    let {id} = req.params;
  

    try {
        const existEnquiry = await enquiries.find({_id: id})

        if (existEnquiry.length) {
            const deleteEnquiry = await enquiries.deleteOne({_id: id});
            res.send({'Deleted enquiry': existEnquiry}).status(200);
        } else {
            res.json('enquiry not found').status(404);
        }
    } catch (error) {
        res.json({
          status: 500,
          message: "server error"
        }).status(500);
    }
    
   
}

 }
