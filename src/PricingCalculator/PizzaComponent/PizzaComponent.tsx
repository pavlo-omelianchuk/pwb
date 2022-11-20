import { SliderThumb } from '@mui/material/Slider';

interface PizzaThumbComponentProps extends React.HTMLAttributes<unknown> {}

export const PizzaThumbComponent = (props: PizzaThumbComponentProps) => {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <img
        loading="lazy"
        src="https://uploads-ssl.webflow.com/636333d38401f1c84fb4d0e0/6373a93204ec08003472ae81_Group%2018441.svg"
        alt=""
      />
    </SliderThumb>
  );
};
