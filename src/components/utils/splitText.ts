// SAFE & FREE SplitText helper
const setSplitText = (text?: string) => {
  if (!text) return [];

  return text.split("").map((char, index) => ({
    char,
    id: index,
  }));
};

export default setSplitText;
