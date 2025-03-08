"use client";

import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info !== "string") {
      const newImageUrl = result.info.secure_url;
      onChange(newImageUrl); // Update profile image with the new URL
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Uploaded Image Preview */}
      {value && (
        <div className="relative w-[150px] h-[150px] mb-4">
          <Image src={value} alt="Uploaded Image" className="rounded-full object-cover" fill />
        </div>
      )}

      {/* Cloudinary Upload Button */}
      <CldUploadWidget uploadPreset="lg0dlgjw" onSuccess={handleUpload}>
        {({ open }) => (
          <Button type="button" onClick={() => open?.()}>
            <Plus className="w-6 h-6 mr-2" />
            {value ? "Change Image" : "Upload Image"}
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
