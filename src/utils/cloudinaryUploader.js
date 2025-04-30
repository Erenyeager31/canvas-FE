import * as CryptoJS from 'crypto-js';

const uploadFile = async (file, uploadPreset = 'canvas-upload') => {
    try {
        // const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        // const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;7
        // const apiSecret = import.meta.env.VITE_CLOUDINARY_SECRET;

        const timestamp = Math.floor(Date.now() / 1000);
        const signatureParams = `timestamp=${timestamp}&upload_preset=${uploadPreset}${apiSecret}`;

        const signature = CryptoJS.SHA1(signatureParams).toString(CryptoJS.enc.Hex);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        formData.append('cloud_name', cloudName);
        formData.append('api_key', apiKey);
        formData.append('timestamp', timestamp);
        formData.append('signature', signature);

        const resourceType = getResourceType(file);

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`, 
            {
                method: 'POST',
                body: formData
            }
        );

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Upload failed: ${response.statusText} - ${errorBody}`);
        }

        const data = await response.json();
        return data.secure_url;

    } catch (error) {
        console.error(`Failed to upload ${file.name}: ${error}`);
        return null;
    }
};

const getResourceType = (file) => {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const videoExtensions = ['mp4', 'avi', 'mov'];
    const audioExtensions = ['mp3', 'wav', 'ogg'];
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

    if (videoExtensions.includes(fileExtension)) return 'video';
    if (audioExtensions.includes(fileExtension)) return 'video';
    if (imageExtensions.includes(fileExtension)) return 'image';
    return 'auto';
};

export default uploadFile;
