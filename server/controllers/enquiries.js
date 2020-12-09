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


  static findOneEnquiry = async (req, res) => {
    try {
      const enquiry = await enquiries.findOne({ _id: req.params.id });
      if (!enquiry) {
        return res.status(404).json({
          status: 404,
          message: "enquiry doesn't exist",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "enquiry found",
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
  

 }
