/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import cloudinary from 'cloudinary';
import { Response } from '../helper/response.js';
import { CLOUDNAME, APIKEY, APISECRET } from './env.js';

cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});
export const uploadToCloud = async (file, res) => {
  try {
    const image = await cloudinary.uploader.upload(file.path, {
      folder: 'MY-BRAND',
      use_filename: true,
    });
    return image;
  } catch (error) {
    return Response.error(res, 500, error);
  }
};
