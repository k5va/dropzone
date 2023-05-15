import { FC } from 'react';
import { FileWithPreview } from '@/types';
import { FaRegTimesCircle } from 'react-icons/fa';

interface SelectedFilesProps {
  files: FileWithPreview[];
  onRemoveFile: (id: string) => void;
}

export const SelectedFiles: FC<SelectedFilesProps> = ({
  files,
  onRemoveFile,
}) => {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
      {files.map(({ name, preview, id }) => (
        <li key={id} className="w-40 aspect-square relative">
          <img
            src={preview}
            alt={name}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <button
            className="absolute top-1 right-1 hover:scale-125 transition"
            onClick={() => onRemoveFile(id)}
          >
            <FaRegTimesCircle />
          </button>
        </li>
      ))}
    </ul>
  );
};
