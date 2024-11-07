import {Grid2, TextField} from "@mui/material";
import {useState} from "react";
import Stack from "@mui/material/Stack";

export const OTPInput = (props) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (e, index) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value.slice(0, 1);
        setOtp(newOtp);

        if (e.target.value && index < otp.length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }

        props.otpNumber(newOtp)
    };
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    return (
        <Stack style={{paddingTop: '1.5rem', direction: 'ltr'}}>
            <Grid2 container spacing={1} justifyContent="center">
                {otp.map((value, index) => (
                    <Grid2 key={index}>
                        <TextField
                            id={`otp-${index}`}
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            inputProps={{ style: { textAlign: 'center', width: '3ch' } }}
                            variant="outlined"
                            size="small"
                        />
                    </Grid2>
                ))}
            </Grid2>
        </Stack>
    );
}