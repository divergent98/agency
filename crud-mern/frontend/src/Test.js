import React, { useEffect, useRef, useState } from "react";

function Test() {
  const [path, setPath] = useState(""); // Initialize path as an empty string
  const pathArray = []; // If you want to store multiple paths as an array
  const [pathArrayState, setPathArrayState] = useState([]);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dhawwwo4n',
      uploadPreset: 'kpkdwfiu',
    }, function (error, data) {
      console.log("Received data:", data.info.files);
      if (data && data.info && data.info.files) {
        const uploadInfo = data.info.files;
        uploadInfo.forEach((item, index) => {
          console.log(`Element ${index}:`, item.uploadInfo);
          pathArray.push(item.uploadInfo.url);
        });
        
        setPathArrayState(pathArray)
        setPath(uploadInfo.path); // Set path as a string
       // Push path to the array if you want to store multiple paths
        console.log(pathArray);
      } else {
        console.error("The expected data structure is not present.");
      }
    });
  }, []);

  return (
    <>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
      <p>{path}</p>
      <p>{pathArrayState.join(', ')}</p>

    </>
  );
}

export default Test;
