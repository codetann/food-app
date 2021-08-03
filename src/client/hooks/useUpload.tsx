import React, { useState } from "react";
import axios from "axios";
import { Param } from "cloudinary-core";

const baseUrl = `https://api.cloudinary.com/v1_1/xxxxxx/image/upload`;

type Upload = (image: string) => Promise<void>;
type Url = string | null;

interface Props {
  image: string;
  Upload: Upload;
}

export default function useUpload(): [Function, Url] {
  const [url, setUrl] = useState<string | null>(null);

  const uploadImage = async ({ image }: Props) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "u1fcbzde");
    data.append("cloud_name", "dchbfnubk");

    try {
      const res = await axios.post(baseUrl, data);
      const json = await res.data;
      setUrl(json.url);
    } catch (error) {
      console.log(error);
    }
  };

  return [uploadImage, url];
}
