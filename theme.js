export const currentTheme = "light";

const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#446688',
  secondary: '#8899AA',
};

 const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#223344',
  secondary: '#556677',
};


export const theme = currentTheme === "light" ? lightTheme : darkTheme;