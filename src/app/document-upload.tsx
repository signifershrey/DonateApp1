"use client";

import { UploadCloudIcon } from "lucide-react";
import { FC } from "react";
import { DropzoneState } from "react-dropzone";

interface DocumentUploadProps {
  dropzone: DropzoneState;
  fileTypes: {
    name: string;
    maxSize: string;
  }[];
}

export const DocumentUpload: FC<DocumentUploadProps> = ({
  dropzone: { acceptedFiles, fileRejections, getInputProps, getRootProps },
  fileTypes,
}) => {
  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center w-full px-4 py-8 border border-dashed rounded bg-muted"
    >
      <input {...getInputProps()} />
      <UploadCloudIcon className="w-8 h-8 mb-4" />
      <p className="text-center">
        Drop a{" "}
        <span className="font-semibold">
          {fileTypes.map((f) => f.name).join(", ")}
        </span>{" "}
        here, or click to select
      </p>
      {fileTypes.map((f) => (
        <p key={f.name} className="text-sm text-gray-700">
          Max {f.name} size: {f.maxSize}
        </p>
      ))}
      {acceptedFiles.length > 0 && (
        <p className="text-green-600">{acceptedFiles.at(0)!.name}</p>
      )}
      {fileRejections.length > 0 && (
        <p className="text-red-600">{fileRejections.at(0)!.file.name}</p>
      )}
    </div>
  );
};
