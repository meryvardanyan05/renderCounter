import { Component } from "react";
import { Row } from "./CRow";

interface IDataRecord {
	label: string; // uniq
	value: number;
}

interface IAppProps {
	size?: number;
}

export class CApp extends Component<
	IAppProps,
	{ list: IDataRecord[]; }
> {
	state = {
		list: Array.from({ length: this.props.size ?? 200 }, (_el, index) => ({
			label: `label ${index + 1}`,
			value: this.generateValue()
		}))
	};

	generateValue() {
		return Math.round(100 + Math.random() * 900);
	}

	handleUpdate = (index: number) => {

		this.setState((prev) => {
			prev.list[index].value = this.generateValue();
			return prev;
		});

	};


	render() {
		return (
			<div>
				<h1>Test app</h1>
				<h2>Class Component</h2>
				{this.state.list.map((el, index) => (
					<Row key={index} value={el.value} label={el.label} index={index} onUpdate={this.handleUpdate} />
				))}
			</div>
		);
	}
}


