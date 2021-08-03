import React, { useState } from "react";
import { Input, HStack } from "@chakra-ui/react";
import useUpload from "../hooks/useUpload";

export default function Test() {
  const [image, setImage] = useState("");
  const [uploadImage, url] = useUpload();

  // const handleImage = (e: EventTarget) => setImage(e.target .files[0] as HTMLInputElement)

  // return <HStack>
  //   <Input type='file' onClick=()
  // </HStack>
}
