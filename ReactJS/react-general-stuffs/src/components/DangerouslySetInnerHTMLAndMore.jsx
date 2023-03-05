const DangerouslySetInnerHTMLAndMore = () => {

	const htmlData = 'This rich text is injected into the DOM by using <strong style="color: crimson">dangerouslySetInnerHTML</strong>... <b>ipsum</b>';
// something added after commit
	return (
		<div>
			<hr />
			<h3>dangerouslySetInnerHTML</h3>
			<div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
			<div>{htmlData}</div>
			<hr />
			<p>
				Check this out (public/index.html)<br /><br />
				{'%PUBLIC_URL%'}<br></br>
				{'<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />'}<br />
				{'<title>%REACT_APP_MY_APP_NAME%</title>'}<br />
			</p>
			<p>
				<span>manifest.json</span> provides metadata used when your web app is installed on a<br />
				user's mobile device or desktop:&nbsp;&nbsp;
				<a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">
					Cómo agregar un manifiesto en la aplicación web
				</a>
			</p>
		</div>
	)
}

export default DangerouslySetInnerHTMLAndMore;
