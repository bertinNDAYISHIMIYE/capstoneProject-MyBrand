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

 }
