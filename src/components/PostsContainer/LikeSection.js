import React, {useState} from 'react';



const LikeSection = props => {

 
  let [pressed, setPressed] = useState(true)
 
  const changeLikes = () => {
    setPressed(!pressed)
    return (pressed ? props.setLikes(props.likes+1) : props.setLikes(props.likes-1))
  }


  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={()=>{
          changeLikes()
          }}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      <span>{props.likes} </span>
      likes</p>
</div>
  )
};

export default LikeSection;
