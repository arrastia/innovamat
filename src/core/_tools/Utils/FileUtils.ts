import { HTTPUtils } from './HTTPUtils';

const { get } = HTTPUtils;

const convertToPDF = async (url?: string) => {
  if (!url) return undefined;

  try {
    const response = await get({ url, responseType: 'blob' });
    const file = await readFile(response.data);

    return URL.createObjectURL(new Blob([file], { type: 'application/pdf' }));
  } catch (error) {
    throw new Error('Error converting file to PDF');
  }
};

const readFile = (file: Blob): Promise<string | ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => resolve(reader.result || '');
    reader.onerror = reject;
  });
};

export const FileUtils = { convertToPDF };
