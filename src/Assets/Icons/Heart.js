import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

/**
 *
 * @param {props} width - width of icon
 * @param {props} height - height of the icon
 * @param {props} color - fill the inner space of icon
 * @param {props} clicked - returns if clicked or not 
 * Example - 
        <HeartIcon
         width={50}
         height={60} 
         color={COLORS.lightGreen} 
         clicked 
         />
 * 
 * @returns
 */

const HeartIcon = props => {
  const {width, height, color, clicked} = props;

  let NotFilled =
    'M13.913.495A6.5 6.5 0 0 1 20.998 11.1l-8.84 8.84a1 1 0 0 1-1.414 0l-8.84-8.84a6.501 6.501 0 1 1 9.194-9.194l.353.353.353-.353a6.502 6.502 0 0 1 2.11-1.41ZM16.401 2a4.5 4.5 0 0 0-3.182 1.319l-1.06 1.06a1 1 0 0 1-1.415 0l-1.06-1.06a4.501 4.501 0 1 0-6.366 6.366l8.133 8.133 8.133-8.133A4.501 4.501 0 0 0 16.401 2Z';
  let Filled =
    'M13.913.495A6.5 6.5 0 0 1 20.998 11.1l-8.84 8.84a1 1 0 0 1-1.414 0l-8.84-8.84a6.501 6.501 0 1 1 9.194-9.194l.353.353.353-.353a6.502 6.502 0 0 1 2.11-1.41Z';

  return (
    <Svg
      width={width ? width : 23}
      height={height ? height : 21}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d={clicked ? Filled : NotFilled}
        fill={color}
      />
    </Svg>
  );
};

export default HeartIcon;
