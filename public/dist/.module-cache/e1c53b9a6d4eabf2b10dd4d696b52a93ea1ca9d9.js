(function(){
	'use strict';

	var HelloMessage = React.createClass({displayName: "HelloMessage",
		render: function() {
			return React.createElement("div", null, "Hello ", this.props.name);
		}
	});

	React.render(
		React.createElement(HelloMessage, {name: "world!"}),
		document.getElementById('test') 
	);


	/*list*/
	var CustomLi = React.createClass({displayName: "CustomLi",
		propTypes:{
			item: React.PropTypes.object.isRequired
		},
		render: function(){
			return React.createElement("li", {onClick: this.handleClick}, React.createElement("h4", null, this.props.item))
		},
		handleClick: function(e){
			console.log("click");
		}
	});

	var CustomUL = React.createClass({displayName: "CustomUL",
		propTypes:{
			items: React.PropTypes.array.isRequired
		},
		render: function() {
				return React.createElement("ul", null, 
						this.props.items.map(function(b){
							return React.createElement(CustomLi, {item: b})
						})
						);
			}
	});


	var items = [{key:1, value:"LOTR"},{key:2, value:"ASD"},{key:3, value:"ASD2"}];

	React.render(
		React.createElement(CustomUL, {items: items}),
		document.getElementById('list') 
	);

	/*dropdown*/
	var colours = [{
				name: "Red",
				hex: "#F21B1B"
			}, {
				name: "Blue",
				hex: "#1B66F2"
			}, {
				name: "Green",
				hex: "#07BA16"
			}];
			
	React.render(React.createElement(Dropdown, {list: colours, selected: colours[0]}), document.getElementById("dropdown"));
})();