// //import * as React from 'react';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';

// const ariaLabel = { 'aria-label': 'description' };

// export default function Inputs() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Input defaultValue="Hello world" inputProps={ariaLabel} />
//     </Box>
//   );
// }

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

interface InputsProps {
  defaultValue?: string;
}

export default function Inputs(props: InputsProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder={props.defaultValue || "word"} inputProps={ariaLabel} />
    </Box>
  );
}

// import { Input } from "@material-tailwind/react";
// export function InputDefault({ label }: { label: string }) {
//   return (
//     <div className="w-72">
//       <Input label={label} crossOrigin={undefined}  
      
//       />
//     </div>
//   );
// }
//crossOriginは違うオリジンからのアクセスを許可すること

// import { Input } from "@material-tailwind/react";
// export function InputDefault() {
//   return (
//     <div className="w-72">
//       <Input label="Username" />
//     </div>
//   );
// }