function AllData() {
	const [data, setData] = React.useState("");

	React.useEffect(() => {
		// fetch all accounts from API
		fetch("/account/all")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(JSON.stringify(data));
			});
	}, []);

	// NEED AUTHORIZATION LOGIN HERE BEFORE SHOWING DATA!!!!!!!!!!

	return (
		<>
			<h5>Bank data:</h5>
			{data}
		</>
	);
}
