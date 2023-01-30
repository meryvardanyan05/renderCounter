import { Component } from "react";

interface IRowProps {
	// TODO
	label: string;
	value: number;
	index: number;
	onUpdate: (index: number) => void;
}

export class Row extends Component<IRowProps> {
	renderCount = 0;
	handleUpdate = () => {
		this.props.onUpdate(this.props.index);
	};

	shouldComponentUpdate(nextProps: IRowProps) {
		if (this.props.value !== nextProps.value) {
			return true;
		}
		return false;
	}

	render() {
		const {
			label, value
		} = this.props;

		this.renderCount++;

		return (
			<div>
				<span className="label">{label}:</span>
				<span>{value}</span> <span>({this.renderCount})</span>{" "}
				<button className="button" onClick={this.handleUpdate}>
					Update
				</button>
			</div>
		);
	}
}
