const DangerouslySetInnerHTMLAndMore = () => {

	const htmlData = 'This rich text is injected into the DOM by using <strong style="color: crimson">dangerouslySetInnerHTML</strong>... <b>ipsum</b>';

	return (
		<div>
			<hr />
			<h3>dangerouslySetInnerHTML</h3>
			<div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
			<div>{htmlData}</div>
		</div>
	)
}

export default DangerouslySetInnerHTMLAndMore;
