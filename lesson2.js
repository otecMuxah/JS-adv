const getUser = (index) => {
	const nam = ['one','two','three'];
	return {["name" + index]: nam[index]};
}