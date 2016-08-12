<!DOCTYPE html>
<html>
<head>
    <title>President Strategic Visioning</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width" />
</head>
<body>
<?php //Get URL Parameter
	$src = (empty($_GET['url'])) ? 'http://bradfrostweb.com/blog/post/ish-2-0/' : addslashes(filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL));
?>
<header class="sg-header" role="banner">
	<div class="nav url-change">
		<a href="/index.html" class="extra-link">< Back to Contents</a>
    <a href="<?php echo $src; ?>" class="extra-link">Remove Controls</a>
	</div>
	<div class="sg-controls" id="sg-controls">
		<div class="sg-control-content">
			<ul class="sg-control">
				<li class="sg-size">
					<div class="sg-current-size">
						<form id="sg-form">
							Size <input type="text" class="sg-input sg-size-px" value="320">px /
							<input type="text" class="sg-input sg-size-em" value="20">em
						</form><!--end #sg-form-->
					</div><!--end #sg-current-size-->
					<ul class="sg-acc-panel sg-size-options">
						<li class="sg-quarter"><a href="#" id="sg-size-s">S</a></li>
						<li class="sg-quarter"><a href="#" id="sg-size-m">M</a></li>
						<li class="sg-quarter"><a href="#" id="sg-size-l">L</a></li>
						<li class="sg-half"><a href="#" id="sg-size-full">Full</a></li>
						<li class="sg-half"><a href="#" id="sg-size-random">Random</a></li>
						<li class="sg-half"><a href="#" class="mode-link" id="sg-size-disco">Disco</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</header>

<!-- Iframe -->
<div id="sg-vp-wrap">
	<div id="sg-cover"></div>
	<div id="sg-gen-container">
		<iframe id="sg-viewport" src="<?php echo $src; ?>" sandbox="allow-same-origin allow-scripts allow-forms"></iframe>
		<div id="sg-rightpull-container">
			<div id="sg-rightpull"></div>
		</div>
	</div>
</div>
<!--end iFrame-->
<link href="../../assets/css/ish.css" rel="stylesheet" type="text/css" media="screen" />
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script type="text/javascript" src="../../assets/js/url-handler.js "></script>
<script type="text/javascript" src="../../assets/js/init.js "></script>
</body>
</html>
