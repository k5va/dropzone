import { FC, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
  onSelectFiles: (files: File[]) => void;
  className: string;
}

export const Dropzone: FC<DropzoneProps> = ({ onSelectFiles, className }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        onSelectFiles(acceptedFiles);
      }
    },
    [onSelectFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpg': ['.jpg'],
      'image/png': ['.png'],
    },
    maxSize: 1024 * 1000,
  });

  return (
    <div
      {...getRootProps({
        className,
      })}
    >
      <input {...getInputProps()} />

      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag and drop files here or select files</p>
      )}
    </div>
  );
};
