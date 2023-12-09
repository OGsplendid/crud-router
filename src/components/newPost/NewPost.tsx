import { useState } from "react"
import { CloseButton } from "../CloseButton/CloseButton"
import { postData } from "../handlers"
import { useNavigate } from "react-router-dom";

export const NewPost = () => {

  const [text, setText] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value)
  }

  const handleClick = () => {
    setText('');
  }

  const handlePublish = () => {
    if (!text.trim()) return;

    const body = {
      content: text,
    }

    postData(body);
    // setTimeout(() => navigate('/'), 0); // не получилось - отправляет назад
    setText('');
    setTimeout(() => navigate('/'), 0);
  }

  return (
    <form className='new-post'>
        <textarea onChange={handleChange} className='new-post-input' value={text}></textarea>
        <button onClick={handlePublish} className="new-post-button" type='submit'>Publish</button>
        <CloseButton onClick={handleClick} />
    </form>
  )
}
