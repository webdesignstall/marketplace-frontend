import axios from "axios";

const generateImageURL = async (image) => {
  const file = new FormData();
  file.append("file", image);
  file.append("upload_preset", 'ml_default');

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/dcdgqiusj/image/upload`,
    file
  );
  return data;
};

export default generateImageURL;
