export const validateDefault = (value: string): boolean => {
	return value.length >= 1;
};

export const validatePhone = (phone: string): boolean => {
	const phoneRegex = /^\+380\d{9}$/;
	return phoneRegex.test(phone);
};

export const validateEmail = (email: string): boolean => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
	return password.length >= 8;
};

export const validateConfirmPassword = (password: string, prevPassword: string): boolean => {
	return password === prevPassword;
};
