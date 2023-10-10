import React from 'react';

export const Page = () => {
	return (
		<html lang='en-US'>
			<head>
				<meta charset='UTF-8' />
				<meta http-equiv='refresh' content='0; url=docs/intro.html' />
				<script type='text/javascript'>
					window.location.href = 'docs/intro.html';
				</script>
				<title>Bittensor Documentation</title>
			</head>
			<body>
				If you are not redirected automatically, follow this
				<a href='docs/intro.html'>link</a>.
			</body>
		</html>
	);
};

export default Page;