// src/lib/cloudinary/upload.ts

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dg5htx8wl';
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'power_erp_uploads';
const FOLDER = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || 'power-international';

// Upload Function
export const uploadToCloudinary = async (file: File, subFolder?: string): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  
  const folderPath = subFolder ? `${FOLDER}/${subFolder}` : FOLDER;
  formData.append('folder', folderPath);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Upload failed');
    }
    
    return data.secure_url;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};

// Multiple Upload
export const uploadMultipleToCloudinary = async (files: File[], subFolder?: string): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadToCloudinary(file, subFolder));
  return await Promise.all(uploadPromises);
};

// Specific Folder Uploads
export const uploadProductImage = (file: File) => uploadToCloudinary(file, 'products');
export const uploadHeroImage = (file: File) => uploadToCloudinary(file, 'hero');
export const uploadTeamImage = (file: File) => uploadToCloudinary(file, 'team');
export const uploadProfileImage = (file: File) => uploadToCloudinary(file, 'profiles');
export const uploadDocument = (file: File) => uploadToCloudinary(file, 'documents');