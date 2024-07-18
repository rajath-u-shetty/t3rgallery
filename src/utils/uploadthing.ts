import {
    generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { OurFileRouter } from "~/api/uploadthing/core";


export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const {useUploadThing} = generateReactHelpers<OurFileRouter>();
