import enquiries from "../models/enquiriesModal";

export class enquiriescontrollers {
  static makeEnquiry = async (req, res) => {
    const enquiry = new enquiries({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    const saved = await enquiry.save();

    return res.status(201).json({
      data: saved,
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
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }  
  };

  static deleteEnquiry = async (req, res) => {
  
    try {
      let { id } = req.params;
      const existEnquiry = await enquiries.find({ _id: id });

      if (existEnquiry.length) {
        const deleteEnquiry = await enquiries.deleteOne({ _id: id });
        return res.status(200).json({
          status: 200,
          message: "Deleted enquiry",
          data: existEnquiry,
        });
      } else {
        res.json("enquiry not found").status(404);
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };

  static updateEnquiry = async (req, res) => {
    try {
      const id = req.params.id;
      const enquiry = await enquiries.findByIdAndUpdate({ _id: id }, req.body);
      const updateEnquiry = await enquiries.findOne({ _id: id });
      res.json({data:updateEnquiry}).status(200);
    } catch (error) {
      res.send({ message: "enquiry not found" }).status(404);
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
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };
}
