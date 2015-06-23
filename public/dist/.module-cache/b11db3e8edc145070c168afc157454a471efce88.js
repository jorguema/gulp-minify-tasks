(function(){
	'use strict';


	var HeaderText = React.createClass({displayName: "HeaderText",
		render: function(){
			return React.createElement("h1", {className: 'text-center'}, "Little thai feedback!")
		}
	})

	React.render(
		React.createElement(HeaderText, null),
		document.getElementById('header') 
	);


	var GlobalText = React.createClass({displayName: "GlobalText",
		render: function(){
			return React.createElement("h4", {style: this.props.style, className: this.props.className}, "Antes que nada dime quien eres")
		}
	})

	React.render(
		React.createElement(GlobalText, {className: 'text-center'}),
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
	var Dropdown = React.createClass({displayName: "Dropdown",
				getInitialState: function() {
					return {
						listVisible: false,
						display: ""
					};
				},
				
				select: function(item) {
					this.props.selected = item;
				},
				
				show: function() {
					this.setState({ listVisible: true });
					document.addEventListener("click", this.hide);
				},
				
				hide: function() {
					this.setState({ listVisible: false });
					document.removeEventListener("click", this.hide);
				},
			
				render: function() {
					return React.createElement("div", {className: "dropdown-container" + (this.state.listVisible ? " show" : "")}, 
								React.createElement("div", {className: "dropdown-display" + (this.state.listVisible ? " clicked": ""), onClick: this.show}, 
									React.createElement("span", null, this.props.selected.name), 
									React.createElement("img", {className: "fa fa-angle-down", src: 'public/content/img/arrowdown.svg'})
								), 
								React.createElement("div", {className: "dropdown-list"}, 
									React.createElement("div", null, 
										this.renderListItems()
									)
								)
							);
				},
				
				renderListItems: function() {
					var items = [];
					for (var i = 0; i < this.props.list.length; i++) {
						var item = this.props.list[i];
						items.push(React.createElement("div", {onClick: this.select.bind(null, item)}, 
							React.createElement("span", null, item.name)
						));
					}
					return items;
				}
			});

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