import {RiHeart3Fill, RiHeart3Line} from "react-icons/ri";
import {useState} from "react";
export function LikeBtn() {
    const [fill, setFill] = useState(false);
    const icon = fill ?  <RiHeart3Fill color={'#535bf2'} size={40} /> :  <RiHeart3Line color={'#535bf2'} size={40} />;
    return (
        <>
          <span className={'cursor-pointer'} onClick={()=> setFill(!fill)}>{icon}</span>
        </>
    );
}
