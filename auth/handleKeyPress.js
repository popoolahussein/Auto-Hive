export const handleKeyPress = (otp, setOtp, key) => {
    const nextEmptyIndex = otp.findIndex((digit) => digit === '');
  
    if (key === 'backspace') {
      const lastFilledIndex = [...otp].reverse().findIndex((digit) => digit !== '');
      if (lastFilledIndex !== -1) {
        const indexToClear = otp.length - 1 - lastFilledIndex;
        const updatedOtp = [...otp];
        updatedOtp[indexToClear] = '';
        setOtp(updatedOtp);
      }
    } else if (nextEmptyIndex !== -1) {
      const updatedOtp = [...otp];
      updatedOtp[nextEmptyIndex] = key;
      setOtp(updatedOtp);
    }
  };
  