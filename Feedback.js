function Feedback() {
	return React.createElement(
		'button',
		{
		  onClick: () => showTextBox(),
		},
		'Click me',
	  );
}

function showTextBox() {
	alert('Hello Bernie')
}

const rootNode = document.getElementById('react-entry-point');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Feedback));