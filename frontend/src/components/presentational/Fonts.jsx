import React, { Component } from "react";
import FontPicker from "font-picker-react";

export default class ExampleComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeFontFamily: "Open Sans",
		};
	}

	render() {
		return (
			<div>
				<FontPicker
					apiKey="AIzaSyASxeN6ZSEpi090c6P7JCs0ETEMMWQai3c"
					activeFontFamily={this.state.activeFontFamily}
					onChange={(nextFont) =>
						this.setState({
							activeFontFamily: nextFont.family,
						})
                    }
                    limit={500}
				/>
				<p className="apply-font">The font will be applied to this text.</p>
			</div>
		);
	}
}