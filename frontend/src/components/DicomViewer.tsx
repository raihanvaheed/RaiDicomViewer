import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import cornerstoneTools from 'cornerstone-tools';
import dicomParser from 'dicom-parser';

const DicomViewer: React.FC = () => {
  const fileUrl = useSelector((state: RootState) => state.dicom.fileUrl);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register the WADO image loader and set dicomParser
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
    cornerstoneWADOImageLoader.configure({
      useWebWorkers: true,
    });

    if (fileUrl && elementRef.current) {
      cornerstone.enable(elementRef.current);

      const loadImage = async () => {
        try {
          const imageId = `wadouri:${fileUrl}`;
          const image = await cornerstone.loadImage(imageId);
          console.log('DICOM image:', image); // Log the image
          cornerstone.displayImage(elementRef.current!, image);
          cornerstoneTools.init({
            mouseEnabled: true,
            touchEnabled: true,
          });
        } catch (error) {
          console.error('Error loading DICOM image:', error);
        }
      };

      loadImage();
    }
  }, [fileUrl]);

  if (!fileUrl) {
    return <div>No DICOM file uploaded</div>;
  }

  return (
    <div>
      <div ref={elementRef} style={{ width: '512px', height: '512px' }}></div>
    </div>
  );
};

export default DicomViewer;
