import { CSSProperties } from "react";

const KKPIcon = (props: {
  className?: string;
  style?: CSSProperties;
  fill?: string;
}) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 128 128"
    enableBackground="new 0 0 128 128"
    className={props.className}
    style={props.style}
    fill={props.fill}
  >
    <g>
      <path
        fill={props.fill}
        d="M64,0C28.7,0,0,28.7,0,64c0,35.3,28.7,64,64,64c35.3,0,64-28.7,64-64C128,28.7,99.3,0,64,0z M49.5,37.1
		c0-1.1,1.3-2.6,2.3-3.1c10.7-5.1,21.6-10,32.3-15c4.2-1.9,8.2-1.4,11.6,1.7c3.9,3.7,7.7,7.5,11.4,11.5c0.8,0.8,0.9,2.4,1.3,3.6
		c-1.1,0.3-2.2,0.6-3.4,0.9c-2.2,0.5-4.5,0.7-6.5,1.7C83.7,45.4,68.9,52.7,54,59.8c-1.3,0.6-2.5,1.1-4.6,2.1
		C49.4,53,49.3,45.1,49.5,37.1z M100.6,85.1c-5,0.2-10,0.2-14.9,0c-1.1-0.1-2.7-1.1-3.2-2.2c-4.6-8.8-9-17.7-13.7-27.1
		c7.4-3.6,14.3-6.9,21.6-10.5c5.4,10.4,10.9,20.4,15.9,30.7C108.4,80.3,105.5,84.8,100.6,85.1z M28.6,23.6
		c5.6-4.6,11.4-8.7,18.5-10.3c0,24.3,0,47.8,0,71.6c-8,0-15.4,0-23.4,0c0-1.5,0-2.9,0-4.4c0-15.4,0.1-30.7,0-46.1
		C23.7,29.9,25.2,26.4,28.6,23.6z M82,110.2c-6,0-11.9,0-17.9,0c-5.8,0-11.7-0.4-17.5,0.1c-8.5,0.7-15.2-2.8-20.7-9.3
		c-2.8-3.4-5.5-6.9-8.1-10.5c-0.6-0.8-0.6-2.3-0.3-3.2c0.1-0.4,1.7-0.5,2.6-0.4c2.5,0.2,5,0.8,7.6,0.8c24,0.1,48.1,0.1,72.1,0
		c2.8,0,5.6-0.6,8.4-0.9c0.8-0.1,2.1,0,2.3,0.4c0.4,0.8,0.4,2.1,0.1,2.9C106.4,100.9,93.1,110.2,82,110.2z"
      />
    </g>
  </svg>
);

export default KKPIcon;
