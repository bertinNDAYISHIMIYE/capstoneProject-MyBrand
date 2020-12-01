import  cloudinary from "cloudinary";
import {Response} from "../helper/response.js";

 cloudinary.v2;
cloudinary.config({
    cloud_name:'bertin',
    api_key:'996829211724617',
    api_secret:'55YhbqREqpUtjfP_R6Hwo2i4EPs',
});
export const uploadToCloud = async (file, res) => {
  try {
    const image = await cloudinary.uploader.upload(file.path, {
      folder: "MY-BRAND",
      use_filename: true,
    });
    return image;
  } catch (error) {
    return Response.error(res, 500, error);
  }
};