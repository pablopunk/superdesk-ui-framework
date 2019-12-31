import * as React from 'react';

interface IProps {
    name: string;
    isRequered: boolean;
    type: string;
    default: string;
    description: string;
}

class Prop extends React.PureComponent<IProps> {
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.isRequered ? 'yes' : 'optional'}</td>
                    <td>{this.props.type}</td>
                    <td>{this.props.default}</td>
                    <td>{this.props.description}</td>
                </tr>
            </React.Fragment>
        );
    }
}

class PropsList extends React.PureComponent {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Prop Name</th>
                        <th>Is Required</th>
                        <th>Type</th>
                        <th>Default Value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        );
    }
}

export { Prop, PropsList };
