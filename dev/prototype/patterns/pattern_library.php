<html>
<title>Pattern Library</title>
<head>
	<link rel="stylesheet" type="text/css" media="screen" href="pattern_library_style.css" />
</head>
<body>

	<h1>Pattern Library</h1>
	<a href="/index.html">Back to Contents</a>
	<?php
		//loops through files in partial directory
		foreach (glob("partials/*.html") as $filename)
		{
				print '<hr>';
    		include $filename;
		}
	?>
</body>
</html>
