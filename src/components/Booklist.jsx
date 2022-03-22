
import { useState, useEffect } from "react";

// 🔽 propsを追加
export const Booklist = ({ language, getData }) => {
  // 🔽 関数を実行（`?` を使用することで，`getData` が存在する場合のみ関数を実行可能）
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
