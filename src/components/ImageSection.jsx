import '../styles/ImageSection.css';
import { useRef } from 'react';

const imageUrl = 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';

export default function ImageSection() {
  const imageRef = useRef("");
  const inputRef = useRef("");

  const applyDottedBorder = (e) => {
    e.target.style.border = "6px dashed rgb(100 116 139)";
  }
  const onHover = (e) => {
    e.target.style.cursor = 'text';
    e.target.style.border = '3px dashed gray';
  }
  const revertToDefault = (e) => {
    e.target.style.cursor = 'default';
    e.target.style.border = '4px solid #D6C68F';
  }
  const handleInputChange = () => {
    imageRef.current.src = URL.createObjectURL(inputRef.current.files[0]);
  }
  const clicked = () => {
    console.log(imageRef.current);
  }
  return (
    <div className="ImageSection w-1/4 h-48">
      <img
        src={imageUrl}
        // width={180}
        // height={150}
        // className="border-4"
        onFocus={applyDottedBorder}
        onMouseEnter={onHover}
        onMouseOut={revertToDefault}
        ref={imageRef}
      />
      <div className="uploadInstruction text-xs text-slate-800">
        Click and upload image
      </div>
      <label
        htmlFor="input-file"
        className="add-icon"
        onClick={clicked}>
      </label>
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        id="input-file"
        onChange={handleInputChange}
        ref={inputRef}
        value={""}
      />
    </div>
  );
}