import React, { useEffect, useState } from 'react'

const Test = () => {
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    const res = await fetch(`http://localhost:5001/api/loaihoa`);
    const data =  await res.json();

    setData(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      {
        data.map((i, idx) => <p>{i.maloai} - {i.tenloai}</p>)
      }
    </div>
  )
}

export default Test;