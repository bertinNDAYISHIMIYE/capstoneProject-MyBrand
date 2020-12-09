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

  static updateEnquiry = async (req, res) => {
    try {
      const enquiry = await enquiries.findOne({ _id: req.params.id });

      if (req.body.name) {
        enquiry.name = req.body.name;
      }

      if (req.body.email) {
        enquiry.email = req.body.email;
      }

      if (req.body.message) {
        enquiry.message = req.body.message;
      }

      await enquiry.save();
      res.send(enquiry);
    } catch {
      res.status(404);
      res.send({ error: "enquiry doesn't exist!" });
    }
  };

 }
