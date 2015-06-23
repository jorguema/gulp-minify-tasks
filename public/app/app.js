(function(){
	'use strict';


	var HeaderText = React.createClass({
		render: function(){
			return <h1 className={'text-center'}>Little thai feedback!</h1>
		}
	})

	React.render(
		<HeaderText/>,
		document.getElementById('header') 
	);


	var GlobalText = React.createClass({
		render: function(){
			return <h4 style={this.props.style} className={this.props.className}>Antes que nada dime quien eres</h4>
		}
	})

	React.render(
		<GlobalText className={'text-center'}/>,
		document.getElementById('test') 
	);



	/*list*/
	var CustomLi = React.createClass({
		propTypes:{
			item: React.PropTypes.object.isRequired
		},
		render: function(){
			return <li onClick={this.handleClick}><h4>{this.props.item}</h4></li>
		},
		handleClick: function(e){
			console.log("click");
		}
	});

	var CustomUL = React.createClass({
		propTypes:{
			items: React.PropTypes.array.isRequired
		},
		render: function() {
				return <ul>
						{this.props.items.map(function(b){
							return <CustomLi item={b}/>
						})}
						</ul>;
			}
	});


	var items = [{key:1, value:"LOTR"},{key:2, value:"ASD"},{key:3, value:"ASD2"}];

//	React.render(
//		<CustomUL items={items}/>,
//		document.getElementById('list') 
//	);

	/*dropdown*/
	var Dropdown = React.createClass({
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
					return <div><div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
								<div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
									<span>{this.props.selected.name}</span>
									<img className="fa fa-angle-down" src={'public/content/img/arrowdown.svg'}/>
								</div>
								<div className="dropdown-list">
									<div>
										{this.renderListItems()}
									</div>
								</div>
							</div>
							<button className={'btn btn-primary'} style={{ marginTop: '20px', marginLeft:'10px',height:'40px'}}><span>Aceptar</span></button>
							</div>;
				},
				
				renderListItems: function() {
					var items = [];
					for (var i = 0; i < this.props.list.length; i++) {
						var item = this.props.list[i];
						items.push(<div onClick={this.select.bind(null, item)}>
							<span>{item.name}</span>
						</div>);
					}
					return items;
				}
			});

	var colours = [{
				name: "Jorge",
				hex: "#F21B1B"
			}, {
				name: "Javi",
				hex: "#1B66F2"
			}, {
				name: "Dani",
				hex: "#07BA16"
			}];

	React.render(<Dropdown list={colours} selected={colours[0]} />, document.getElementById("dropdown"));
})();