import {useEffect, useState} from 'react';

export default function useDebouncing(value, delay){
  const [inputVal,setInputVal] = useState('');

  useEffect(()=>{
    let index = setTimeout(()=>{
      setInputVal(value);
    },delay);

    return ()=>{clearTimeout(index);}
  } , [value])


return inputVal;
}