"use client";

import { UploadButton } from "@/lib/utils";
import { DocumentUpload } from "../document-upload";
import { toast } from "sonner";
import { useUploadThing } from "../uploadthing";
import { useDropzone } from "react-dropzone";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const citationUT = useUploadThing("pdfUploader", {
    onUploadError: (error) => {
      toast.error(error.message);
    },
  });

  const citationFileTypes = citationUT.permittedFileInfo?.config
    ? Object.keys(citationUT.permittedFileInfo?.config)
    : [];

  const citationDropzone = useDropzone({
    accept: citationFileTypes
      ? generateClientDropzoneAccept(citationFileTypes)
      : undefined,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
      }
    },
  });

  const handleSaveClick = async () => {
    if (selectedFile) {
      const response = await citationUT.upload([selectedFile]);
      if (response) {
        setUploadedImageUrl(response[0].url); // Assuming response returns URL
        setSelectedFile(null); // Clear selected file after upload
        toast.success("Image uploaded successfully!");
      }
    } else {
      toast.error("Please select a file first.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DocumentUpload
        dropzone={citationDropzone}
        fileTypes={citationFileTypes.map((f) => ({
          name: f,
          maxSize:
            //@ts-ignore
            citationUT.permittedFileInfo?.config[f]?.maxFileSize ?? "unknown",
        }))}
      />
      {selectedFile && (
        <button
          onClick={handleSaveClick}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      )}
      {uploadedImageUrl && (
        <img src={uploadedImageUrl} alt="Uploaded" className="mt-4" />
      )}
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
