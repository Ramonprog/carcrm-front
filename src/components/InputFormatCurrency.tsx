import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface CustomProps extends NumericFormatProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, name, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        thousandSeparator="."
        decimalSeparator=","
        valueIsNumericString
        prefix="R$ "
        onValueChange={(values) => {
          onChange({
            target: {
              name,
              value: values.value,
            },
          });
        }}
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
      />
    );
  },
);

export default NumericFormatCustom;
