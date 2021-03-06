
import { useState, useEffect } from "react";

// ð½ propsãè¿½å 
export const Booklist = ({ language, getData }) => {
  // ð½ é¢æ°ãå®è¡ï¼`?` ãä½¿ç¨ãããã¨ã§ï¼`getData` ãå­å¨ããå ´åã®ã¿é¢æ°ãå®è¡å¯è½ï¼
  const [bookData, setBookData] = useState(null);
  const result = getData?.(language);

  useEffect(() => {
    const result = getData?.(language).then((response) =>
      setBookData(response)
    );
  }, [language, getData]);


  return (
    <ul>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (
        bookData.data.items.map((x, index) => (
          <li key={index}>{x.volumeInfo.title}</li>
        ))
      )}
    </ul>
  );
};
