import React, { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';

interface PreviewFileProps {
  fileType: string;
  fileUrl: string;
}

const DocxViewer: React.FC<PreviewFileProps> = ({ fileUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchDocx = async () => {
      try {
        const response = await fetch(fileUrl);
        const arrayBuffer = await response.arrayBuffer();
        if (containerRef.current) {
          await renderAsync(arrayBuffer, containerRef.current, undefined, {
            className: 'docx-container',
          });
        }
      } catch (error) {
        console.error('Error fetching or converting file:', error);
      }
    };

    fetchDocx();
  }, [fileUrl]);

  return <div ref={containerRef} style={{ padding: '1em', backgroundColor: '#fff', border: '1px solid #ccc' , direction:"rtl" }} />;
};

export default DocxViewer;
