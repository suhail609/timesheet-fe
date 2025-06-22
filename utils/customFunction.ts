export const checkOptionInAnswers = async (
  dataArray: any[],
  questionId: number,
  currentQuestion: any
): Promise<any> => {
  let questionData;
  let responsedata = currentQuestion;
  if (currentQuestion._id) {
    questionData = await dataArray.find(
      (item: any) => item.question === questionId
    );
    if (!questionData) return responsedata;
    if (questionData.answers && questionData.answers.length > 0) {
      responsedata.answers = questionData.answers || [];
    }
  }
  return responsedata;
};

export const getPrice = async (
  price: number,
  dividerValue: number
): Promise<string> => {
  if (price && dividerValue) {
    let CalculatedPrice = price / dividerValue;
    if (CalculatedPrice) {
      return parseFloat(CalculatedPrice.toString()).toFixed(2);
    }
    return '0';
  }
  return '0';
};

export const getobjectbylabel = async (
  label: string,
  array: any[]
): Promise<{ id: string; label: string }> => {
  const getdata = array.find((item: any) => item.label === label);
  return getdata;
};

export const hasValue = (answer: any): boolean => {
  if (typeof answer === 'string') {
    // Check if it's a non-empty string
    return answer.trim().length > 0;
  } else if (Array.isArray(answer)) {
    // Check if the array has any elements
    return answer.length > 0;
  } else if (answer && typeof answer === 'object') {
    // Check if the object has any keys
    return Object.keys(answer).length > 0;
  }
  // Return false if it's neither a non-empty string, an array, nor an object with keys
  return false;
};

export const calculateTotalAmount = (
  newPackagePriceAfterPending: number,
  DISCOUNTED_PRICE: number
): number => {
  const totalAmount = newPackagePriceAfterPending - DISCOUNTED_PRICE;
  return totalAmount;
};

export const pngStringToDataUrl = (pngString: any) => {
  let base64 = '';
  for (let i = 0; i < pngString.length; i++) {
    base64 += String.fromCharCode(pngString.charCodeAt(i) & 0xff);
  }
  base64 = btoa(base64);
  return `data:image/png;base64,${base64}`;
};

export const downloadBase64Image = (
  base64Data: string,
  filename: string
): boolean => {
  if (!base64Data || typeof base64Data !== 'string') {
    console.error('Invalid Base64 data');
    return false; // Return false if data is invalid
  }

  const link = document.createElement('a');
  link.href = base64Data;
  link.download = filename;

  document.body.appendChild(link); // Append to body for Firefox

  try {
    link.click(); // Trigger download
    return true; // Return true if download is initiated successfully
  } catch (error) {
    console.error('Download failed:', error);
    return false; // Return false if an error occurs
  } finally {
    document.body.removeChild(link); // Cleanup
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
