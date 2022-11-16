import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { UploadImageToFirebaseProps } from "./definitions";

const useUploadImageToFirebase = () => {
  const handleUpload = async ({ file }: UploadImageToFirebaseProps) => {
    return new Promise((resolve, reject) => {
      const metadata = {
        contentType: file.type,
      };
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          reject();
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              console.log("error storage/unauthorized");
              break;
            case "storage/canceled":
              // User canceled the upload
              console.log("error storage/canceled");
              break;

            // ...

            case "storage/unknown":
              console.log("error storage/unknown");
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return handleUpload;
};

export default useUploadImageToFirebase;
