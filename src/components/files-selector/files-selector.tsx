import { FileWithPreview } from '@/types';
import { FC, useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import { SelectedFiles, Dropzone } from '@/components';

export const FilesSelector: FC = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const selectFilesHandler = useCallback((selectedFiles: File[]) => {
    setFiles((prevFiles) => [
      ...prevFiles,
      ...selectedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: nanoid(),
        })
      ),
    ]);
  }, []);

  const removeFileHandler = (id: string) => {
    setFiles((files) => files.filter((file) => file.id !== id));
  };

  return (
    <div className="flex flex-col gap-4 items-center pt-4">
      <Dropzone
        className="
          h-[100px] w-[500px] grid place-content-center border bg-sky-400 p-1 transition cursor-pointer
          hover:scale-105
        "
        onSelectFiles={selectFilesHandler}
      />
      <SelectedFiles files={files} onRemoveFile={removeFileHandler} />
    </div>
  );
};
